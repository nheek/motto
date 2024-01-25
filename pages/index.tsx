import { useState, useEffect, useRef } from 'react';
import fetchChatGPT from './api/open-ai';
import TypingAnimation from '../components/typing-animation';

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
  // Reference to the input element for focusing
  const inputRef = useRef<HTMLInputElement | null>(null);
  
  // State to manage AI responses and conversation history
  const [aiText, setAiText] = useState(<TypingAnimation text={""} speed={0}/>);
  const [isAiTalking, setIsAiTalking] = useState(false);
  const [conversationHistory, setConversationHistory] = useState(() => {
    // Load conversation history from local storage or use initial guidelines
    if (typeof window !== 'undefined') {
      const savedConvo = window.localStorage.getItem('conversation');
      const storedHistory = JSON.parse(savedConvo ?? "{}");
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
  const commsToAi = async (content) => {
    try {
      // Update conversation history with the user's input
      setConversationHistory((prevHistory) => [
        ...prevHistory,
        { role: 'user', content },
      ]);

      // Fetch AI response based on the updated conversation history
      const updatedHistory = [...conversationHistory, { role: 'user', content }];
      let response = await fetchChatGPT(updatedHistory);

      // Update conversation history with the AI's response
      setConversationHistory((prevHistory) => [
        ...prevHistory,
        response,
      ]);

      // Set AI talking state to trigger animations
      setIsAiTalking(true);

      // Display AI response with typing animation
      response = response ?? {role: "", content: ""};
      let aiTyping = <TypingAnimation text={response.content} speed={talkingTypingSpeed} />;
      setAiText(aiTyping);

      // Disable AI talking state after the response animation
      setTimeout(() => {
        setIsAiTalking(false);

        // Focus on the input after a brief delay
        // The delay is needed, if not, it won't work because
        // it will read the input as still disabled
        setTimeout(() => {
          if (inputRef.current) {
            inputRef.current.focus();
          }
        }, 10);
      }, response.content.length * talkingTypingSpeed);
    } catch (error) {
      // Log and handle errors during AI communication
      console.error('Error in commsToAi:', error);
      // No additional error handling for now
    }
  };

  // Function to handle user input on pressing Enter
  const handleKeyDown = (event) => {
    if (event.key === 'Enter') {
      const userText = event.target.value;
      // Communicate user input to the AI
      commsToAi(userText);
      // Clear the input field after sending the message
      event.target.value = '';
    }
  };

  return (
    <section className="h-screen w-[full] bg-blue-800 flex flex-col justify-center items-center">
      <div className="h-[10vh] text-center">
        <h1 className={`text-4xl ${isAiTalking ? "hidden": "block"}`}>Hi! I'm Motto!</h1>
        <span className={`block opacity-60 ${isAiTalking ? "hidden": "block"}`}>Ask me about anything!</span>
      </div>
      <div className={`h-[25vh] ${isAiTalking ? "mb-20": ""}`}>
        <div className={`loader !h-[100px] mt-6 ${isAiTalking ? 'loader-animated' : ''}`}>
        
        </div>
      </div>
      <div className="w-[70%] h-[30vh] mt-4 flex items-center">
          {aiText}
      </div>
      <div className="absolute bottom-[5%] w-[80%] flex justify-center mt-10">
        <input 
          ref={inputRef}
          onKeyDown={handleKeyDown}
          className="w-[70%] h-[50px] text-xl text-blue-950 pl-6 rounded-3xl"
          type="text" 
          placeholder="Type here..."
          disabled={isAiTalking}
        />
      </div>
    </section>
  );
};