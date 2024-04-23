import { useState, useEffect, useRef } from 'react';

export default function TypingAnimation ({ text, speed }) {
  const [displayText, setDisplayText] = useState('');
  const containerRef = useRef<HTMLParagraphElement>(null);

  useEffect(() => {
    let index = 0;
    let intervalId;

    const animateText = () => {
      setDisplayText('');

      intervalId = setInterval(() => {
        setDisplayText((prevText) => {
          if (index < text.length) {
            return prevText + text[index++];
          } else {
            clearInterval(intervalId);
            return prevText;
          }
        });

        // Check if the containerRef has a current property before accessing its properties
        const container = containerRef.current;
        if (container) {
          if (container.scrollHeight > container.clientHeight) {
            container.classList.add('overflow-y-scroll');
          } else {
            container.classList.remove('overflow-y-scroll');
          }
        }
      }, speed);
    };

    animateText(); // Initial animation

    return () => {
      clearInterval(intervalId);
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
};