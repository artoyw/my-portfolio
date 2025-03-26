'use client';

import { motion } from 'framer-motion';
import Link from 'next/link';
import { useState } from 'react';

export default function Home() {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <main className="min-h-screen bg-black text-white flex flex-col justify-center items-center px-6">
      <motion.div 
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        className="text-center max-w-4xl"
      >
        <h1 className="text-5xl md:text-7xl font-bold mb-4 leading-tight">
          Olivia Wang
          <span className="block text-2xl md:text-3xl text-gray-400 mt-2">
            Software Engineer
          </span>
        </h1>

        <motion.div
          onHoverStart={() => setIsHovered(true)}
          onHoverEnd={() => setIsHovered(false)}
          className="mt-8 space-x-6"
        >
          <Link 
            href="/projects" 
            className="inline-block px-6 py-3 border border-white 
            hover:bg-white hover:text-black transition-all duration-300"
          >
            View Projects
          </Link>
          <Link 
            href="/about" 
            className="inline-block px-6 py-3 border border-white 
            hover:bg-white hover:text-black transition-all duration-300"
          >
            About Me
          </Link>
        </motion.div>

        {/* Animated Background Elements */}
        {isHovered && (
          <motion.div 
            initial={{ opacity: 0 }}
            animate={{ opacity: 0.3 }}
            className="fixed inset-0 pointer-events-none bg-gradient-to-br 
            from-purple-600 via-blue-500 to-pink-500 
            mix-blend-overlay z-[-1]"
          />
        )}
      </motion.div>
    </main>
  );
}