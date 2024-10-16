"use client";

import { useState, useEffect, useRef } from 'react';
import TypingAnimation from '@/app/components/TypingAnimation';
import Background from '@/app/components/Background';
import Dog from '@/app/components/Dog';

// Initial guidelines for the AI assistant
const aiGuideline = `
  You are a helpful assistant. Your name is Motto!
  Please be wary that kids might use you too,
  so don't dispense any not child-friendly information
  unless they confirm that they're an adult. You are the user's best friend.
  Ask them about their day or anything. Remember! YOU ARE THE
  USER'S BEST FRIEND! ALWAYS BE NICE!
`;

export default function MainRoot () {
  const [enterChat, setEnterChat] = useState(false);
  // Reference to the input element for focusing
  const inputRef = useRef<HTMLInputElement | null>(null);
  
  // State to manage AI responses and conversation history
  const [aiText, setAiText] = useState(<TypingAnimation text={""} speed={0}/>);
  const [isAiTalking, setIsAiTalking] = useState(false);
  const [conversationHistory, setConversationHistory] = useState(() => {
    // Load conversation history from local storage or use initial guidelines
    if (typeof window !== 'undefined') {
      const savedConvo = window.localStorage.getItem('conversation') || "null";
      const storedHistory = JSON.parse(savedConvo);
      return storedHistory || [{ role: 'system', content: aiGuideline }];
    } else {
      return [{ role: 'system', content: aiGuideline }];
    }
  });

  // Sets the talking typing speed of the AI
  const [talkingTypingSpeed, setTalkingTypingSpeed] = useState(70);

  // Update local storage when conversation history changes
  useEffect(() => {
    window.localStorage.setItem('conversation', JSON.stringify(conversationHistory));
  }, [conversationHistory]);

  // Function to communicate user input to the AI
  const commsToAi = async (content: string) => {
    try {
      setConversationHistory((prevHistory: { role: string; content: string }[]) => [
        ...prevHistory,
        { role: 'user', content },
      ]);
  
      const response = await fetch('/api/chat', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ userInput: content }),
      });
  
      const data = await response.json();
  
      if (response.ok) {
        console.log(response, data);
        const aiResponse = data.responseText;
        setConversationHistory((prevHistory: { role: string; content: string }[]) => [
          ...prevHistory,
          { role: 'assistant', content: aiResponse },
        ]);
        setAiText(<TypingAnimation text={aiResponse} speed={talkingTypingSpeed} />);
      } else {
        console.error(data.error);
        // Handle error appropriately
      }
  
      setIsAiTalking(true);
      setTimeout(() => {
        setIsAiTalking(false);
        inputRef.current?.focus();
      }, data.responseText.length * talkingTypingSpeed);
    } catch (error) {
      console.error('Error in commsToAi:', error);
    }
  };
  
  

  // Function to handle user input on pressing Enter
  const handleKeyDown = (event: React.KeyboardEvent<HTMLInputElement>) => {
    if (event.key === 'Enter') {
      const userText = (event.target as HTMLInputElement).value;
      // Communicate user input to the AI
      commsToAi(userText);
      // Clear the input field after sending the message
      (event.target as HTMLInputElement).value = '';
    }
  };

  const handleEnterChatButton = () => {
    setEnterChat(true);
  }

  return (
    <>
      <div className="h-screen w-[full] flex flex-col justify-center items-center">
        <div className={`${enterChat ? "h-[10vh]" : "h-[20vh] md:h-[10vh]"} text-center ${isAiTalking ? "hidden" : "block"}`}>
          <h1 className={`text-4xl`}>Hi! I'm Motto!</h1>
          <span className={`block opacity-60`}>Your virtual friend!</span>
        </div>
        <div className={`${enterChat ? "block" : "hidden"} ${isAiTalking ? "h-[30vh]" : "h-[25vh]"} flex items-center`}>
          <div className={`loader !h-[100px] mt-6 ${isAiTalking ? 'loader-animated' : ''}`}>

          </div>
        </div>
        <div className={`${isAiTalking ? "h-[50vh] mb-[15rem]" : "h-[40vh]"} mb-12 md:mb-[10rem] w-full md:w-[70%] flex items-center justify-center`}>
          {aiText}
        </div>
        <button
          className={`${enterChat ? "hidden" : "block"} absolute bottom-[17%] md:bottom-[24%]`}
          onClick={handleEnterChatButton}
        >
          <Dog customClassName={enterChat ? "hidden" : "block"}/>
        </button>
        <div className="absolute bottom-[2%] md:bottom-[5%] w-[95%] md:w-[80%] flex justify-center mt-10">
          <input
            ref={inputRef}
            onKeyDown={handleKeyDown}
            className={`${enterChat ? "block" : "hidden"} w-full md:w-[70%] h-[50px] bg-white bg-opacity-50 text-xl pl-6 rounded-3xl`}
            type="text"
            placeholder="Type here..."
            disabled={isAiTalking} />
        <span className={enterChat ? "hidden" : "block"}>Start by petting the dog</span>
        </div>
      </div>
      <Background />
    </>
  );
};