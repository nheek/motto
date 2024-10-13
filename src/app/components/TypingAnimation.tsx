import { useState, useEffect, useRef } from 'react';

interface TypingAnimationProps {
  text: string;
  speed: number;
}

export default function TypingAnimation({ text, speed }: TypingAnimationProps) {
  const [displayText, setDisplayText] = useState('');
  const containerRef = useRef<HTMLParagraphElement>(null);
  
  useEffect(() => {
    let index = 0; // Reset index on text change
    let intervalId: NodeJS.Timeout | null = null;

    const animateText = () => {
      setDisplayText(''); // Clear previous text

      intervalId = setInterval(() => {
        setDisplayText((prevText) => {
          if (index < text.length) {
            return prevText + text[index++];
          } else {
            clearInterval(intervalId!); // Stop the interval when done
            return prevText;
          }
        });

        // Scroll handling
        const container = containerRef.current;
        if (container) {
          container.scrollTop = container.scrollHeight; // Scroll to the bottom
        }
      }, speed);
    };

    animateText(); // Start animation

    return () => {
      if (intervalId) clearInterval(intervalId); // Cleanup on component unmount
    };
  }, [text, speed]);

  return (
    <p
      ref={containerRef}
      className='inline-block w-[90%] md:w-[80%] h-max max-h-full text-xl text-center overflow-hidden break-words'
    >
      {displayText}
    </p>
  );
}
