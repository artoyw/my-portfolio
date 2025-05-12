'use client';

import { useEffect, useState } from 'react';

interface TypingAnimationProps {
  text: string;
  speed?: number;
  className?: string;
  onComplete?: () => void;
}

export default function TypingAnimation({
  text,
  speed = 40,
  className = '',
  onComplete,
}: TypingAnimationProps) {
  const [displayedText, setDisplayedText] = useState('');
  const [currentIndex, setCurrentIndex] = useState(0);
  const [done, setDone] = useState(false);

  useEffect(() => {
    if (currentIndex < text.length) {
      const timeout = setTimeout(() => {
        setDisplayedText(text.slice(0, currentIndex + 1));
        setCurrentIndex(currentIndex + 1);
      }, speed);
      return () => clearTimeout(timeout);
    } else if (!done) {
      setDone(true);
      onComplete?.();
    }
  }, [currentIndex, text, speed, onComplete, done]);

  return (
    <div className={`${className} whitespace-pre-wrap`}>
      {displayedText}
      {!done && <span className="animate-pulse">|</span>}
    </div>
  );
}
