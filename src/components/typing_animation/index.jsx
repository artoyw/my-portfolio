'use client';

import { useEffect, useState } from 'react';

/**
 * @typedef {Object} TypingAnimationProps
 * @property {string} text - The text to animate.
 * @property {number} [speed=50] - Speed in ms per character.
 * @property {string} [className=''] - Additional class names.
 */

export function TypingAnimation({
  text,
  speed = 50,
  className = '',
}) {
  const [displayed, setDisplayed] = useState('');

  useEffect(() => {
    let i = 0;
    const interval = setInterval(() => {
      setDisplayed((prev) => prev + text[i]);
      i++;
      if (i >= text.length) clearInterval(interval);
    }, speed);

    return () => clearInterval(interval);
  }, [text, speed]);

  return <div className={`${className} whitespace-pre-wrap`}>{displayed}</div>;
}
