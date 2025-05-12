'use client';

import Link from 'next/link';
import Image from 'next/image'
import { useEffect, useRef, useState } from 'react';

interface TypingAnimationProps {
  text: string;
  speed?: number;
  className?: string;
  onComplete?: () => void;
}

export function TypingAnimation({
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
    } else {
      setDone(true);
      onComplete?.();
    }
  }, [currentIndex, text, speed, onComplete]);

  return (
    <div className={`${className} whitespace-pre-wrap`}>
      {displayedText}
      {!done && <span className="animate-pulse">|</span>}
    </div>
  );
}

export default function Home() {
  const [history, setHistory] = useState<{ text: string; isError?: boolean }[]>([]);
  const [input, setInput] = useState('');
  const [showTyping, setShowTyping] = useState(false);
  const [terminalLocked, setTerminalLocked] = useState(false);
  const [bootComplete, setBootComplete] = useState(false);


  const handleKeyDown = (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (e.key === 'Enter') {
      const trimmed = input.trim().toLowerCase();

      setHistory((prev) => [...prev, { text: `guest@oliviawang.com ~$ ${trimmed}` }]);

      const lower = trimmed.toLowerCase();

      switch (lower) {
        case 'help':
          setHistory((prev) => [
            ...prev,
            { text: `Commands Available:` },
            { text: `    help            accessing this help menu` },
            { text: `    start           access GUI` },
            { text: `    clear           clear the terminal` },
          ]);
          break;

        case 'clear':
          setHistory([]);
          break;

        case 'shutdown':
          setHistory((prev) => [...prev, { text: 'shutting down...' }]);
          break;

        case 'reboot':
          setHistory((prev) => [
            ...prev,
            { text: 'rebooting system...' },
            { text: '...' },
            { text: 'system ready.' },
          ]);
          break;

        case 'start':
          window.location.href = '/home';
          break;
       
        default:  
          setHistory((prev) => [
            ...prev,
            { text: `command not found: ${trimmed}`, isError: true },
            { text: "to see available commands, use 'help'", isError: true },
          ]);
      }

      setInput('');
    }
  };

  return (
    <main className="bg-black text-green-500 min-h-screen font-mono p-6 text-sm">
      <pre className="mb-6 leading-snug">
{String.raw`

██████╗ ██╗     ██╗██╗   ██╗██╗ █████╗ ███████╗    ██╗    ██╗ ██████╗ ██████╗ ██╗     ██████╗ 
██╔═══██╗██║     ██║██║   ██║██║██╔══██╗██╔════╝    ██║    ██║██╔═══██╗██╔══██╗██║     ██╔══██╗
██║   ██║██║     ██║██║   ██║██║███████║███████╗    ██║ █╗ ██║██║   ██║██████╔╝██║     ██║  ██║
██║   ██║██║     ██║╚██╗ ██╔╝██║██╔══██║╚════██║    ██║███╗██║██║   ██║██╔══██╗██║     ██║  ██║
╚██████╔╝███████╗██║ ╚████╔╝ ██║██║  ██║███████║    ╚███╔███╔╝╚██████╔╝██║  ██║███████╗██████╔╝
 ╚═════╝ ╚══════╝╚═╝  ╚═══╝  ╚═╝╚═╝  ╚═╝╚══════╝     ╚══╝╚══╝  ╚═════╝ ╚═╝  ╚═╝╚══════╝╚═════╝ 

                                                                                                                          
`}
      </pre>
    
        <TypingAnimation
          text={`Welcome to Olivia Wang's terminal.\nTo see available commands, type 'help' and hit enter.`}
          speed={40}
          className="text-green-500"
          onComplete={() => {
            setTimeout(() => {
              setBootComplete(true);
              setTerminalLocked(false);
            }, 300);
          }}
        />

      {bootComplete && (
        <>
          {history.map((line, i) => (
            <div
              key={i}
              className={`whitespace-pre-wrap ${line.isError ? 'text-red-400' : ''}`}
            >
              {line.text}
            </div>
          ))}

        {!terminalLocked && (
          <div className="flex items-center">
            <span className="text-green-400">guest@oliviawang.com</span>
            <span className="ml-2">~$</span>
            <input
              autoFocus
              type="text"
              value={input}
              onChange={(e) => setInput(e.target.value)}
              onKeyDown={handleKeyDown}
              className="bg-transparent border-none outline-none text-green-500 ml-2 w-full caret-green-400"
            />
          </div>
        )}
        </>
      )}
    </main>
  );
}