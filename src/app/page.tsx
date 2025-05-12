'use client';

import { motion } from 'framer-motion';
import Link from 'next/link';
import Image from 'next/image'
import { useState } from 'react';

export default function Home() {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <main className="min-h-screen bg-bg-pink text-white flex flex-col justify-center items-center px-6">
      <div style={{ width: 200, height: 200, position: 'relative' }}>
      <Image
        src="/assets/images/me_graphic.png"
        alt="Cute graphic"
        fill
        style={{ objectFit: 'cover', borderRadius: '9999px' }}
      />
    </div>
      <motion.div 
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        className="text-center max-w-4xl"
      >
      <motion.h1 
        className="text-5xl font-DMSerifReg bg-gradient-to-r from-custom-purple to-custom-pink 
                  text-transparent bg-clip-text pb-4"
        animate={{
          backgroundPosition: ['0% 0%', '100% 0%', '0% 0%'],
          scale: [1, 1.05, 1],
          transition: {
            duration: 5,
            repeat: Infinity,
            ease: "easeInOut"
          }
        }}
        style={{
          backgroundSize: '200% 100%',
          backgroundPosition: '0% 0%'
        }}
      >
          Olivia Wang
      </motion.h1>
      <span className="font-DongleReg text-3xl text-[#63768a] bg-transparent">
        Software Engineer
      </span>

        <motion.div
          onHoverStart={() => setIsHovered(true)}
          onHoverEnd={() => setIsHovered(false)}
          className="mt-8 space-x-6"
        >
          <Link 
            href="/projects" 
            className="btn-primary font-DongleReg text-2xl"
          >
            View Projects
          </Link>
          <Link 
            href="/about" 
            className="btn-primary font-DongleReg text-2xl"
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