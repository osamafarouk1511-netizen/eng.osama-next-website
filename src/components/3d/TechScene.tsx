"use client";

import { motion } from 'framer-motion';
import Image from 'next/image';

export default function TechScene() {
  return (
    <div className="w-full h-[600px] flex items-center justify-center">
      <div className="relative flex items-center justify-center">
        {/* soft dynamic shadow under the logo */}
        <motion.div
          className="absolute bottom-2 left-1/2 -translate-x-1/2 bg-black rounded-full blur-2xl"
          style={{ width: 220, height: 48, opacity: 0.35 }}
          initial={{ scale: 1, opacity: 0.35 }}
          animate={{
            scale: [1, 0.9, 1.02, 1],
            opacity: [0.35, 0.25, 0.4, 0.35]
          }}
          transition={{ duration: 4, repeat: Infinity, repeatType: 'mirror', ease: 'easeInOut' }}
        />

        <motion.div
          initial={{ y: 0, rotate: 0, scale: 1 }}
          animate={{
            y: [0, -18, -28, -18, 0],
            rotate: [0, -1.5, 0.8, -1, 0],
            scale: [1, 1.02, 1.035, 1.02, 1]
          }}
          transition={{ duration: 4.2, repeat: Infinity, repeatType: 'mirror', ease: [0.65, 0.05, 0.36, 1] }}
          style={{ willChange: 'transform' }}
          className="relative z-10"
        >
          <Image
            src="/b5e28d61-f2d1-469f-884d-f623c1498887-removebg-preview.png"
            alt="CSS Logo"
            width={420}
            height={420}
            className="w-[320px] h-auto md:w-[420px] md:h-auto drop-shadow-2xl"
            priority
          />
        </motion.div>
      </div>
    </div>
  );
}