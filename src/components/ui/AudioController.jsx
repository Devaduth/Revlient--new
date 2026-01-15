import React, { useState, useRef, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Volume2, VolumeX } from 'lucide-react';
import bgMusic from '../../assets/audio/bgMusic.mp3';

const AudioController = () => {
  const [isPlaying, setIsPlaying] = useState(false);
  const [isMuted, setIsMuted] = useState(true);
  const audioRef = useRef(null);

  // Toggle Mute/Unmute
  const toggleAudio = () => {
    if (!audioRef.current) return;

    if (isMuted) {
      // Unmute: Set volume to 0, play, then fade in
      audioRef.current.volume = 0;
      audioRef.current.muted = false;
      audioRef.current.play().catch(e => console.log("Audio playback failed:", e));
      fadeVolume(0, 0.02, 1000); // Target volume 0.4
      setIsMuted(false);
      setIsPlaying(true);
    } else {
      // Mute: Fade out, then pause
      fadeVolume(audioRef.current.volume, 0, 1000, () => {
        if(audioRef.current) {
            audioRef.current.muted = true;
            audioRef.current.pause();
        }
      });
      setIsMuted(true);
      setIsPlaying(false);
    }
  };

  // Volume Fade Helper
  const fadeVolume = (start, end, duration, callback) => {
    const stepTime = 50;
    const steps = duration / stepTime;
    const stepValue = (end - start) / steps;
    let currentVolume = start;
    let stepCount = 0;

    const timer = setInterval(() => {
      if (!audioRef.current) {
        clearInterval(timer);
        return;
      }

      stepCount++;
      currentVolume += stepValue;
      
      // Clamp volume between 0 and 1
      if (currentVolume > 1) currentVolume = 1;
      if (currentVolume < 0) currentVolume = 0;
      
      audioRef.current.volume = currentVolume;

      if (stepCount >= steps) {
        clearInterval(timer);
        if (callback) callback();
      }
    }, stepTime);
  };

  return (
    <div className="fixed bottom-8 left-8 z-50 flex items-center gap-4">
      <audio 
        ref={audioRef} 
        loop 
        preload="auto"
        src={bgMusic} 
      />

      <motion.button
        onClick={toggleAudio}
        className="relative group w-12 h-12 flex items-center justify-center rounded-full bg-white/5 backdrop-blur-md border border-white/10 overflow-hidden shadow-lg hover:bg-white/10 transition-colors"
        whileHover={{ scale: 1.05 }}
        whileTap={{ scale: 0.95 }}
      >
        {/* Visualizer Bars (Only visible when playing) */}
        <AnimatePresence>
            {!isMuted && (
                <div className="absolute inset-0 flex items-center justify-center gap-[2px] opacity-30">
                    {[1, 2, 3, 4].map((i) => (
                        <motion.div
                            key={i}
                            className="w-1 bg-white rounded-full"
                            animate={{
                                height: [8, 16 + Math.random() * 10, 8],
                            }}
                            transition={{
                                duration: 0.5 + Math.random() * 0.5,
                                repeat: Infinity,
                                ease: "easeInOut",
                                delay: i * 0.1,
                            }}
                        />
                    ))}
                </div>
            )}
        </AnimatePresence>

        {/* Icons */}
        <div className="relative z-10 text-white/80 group-hover:text-white transition-colors">
            {isMuted ? <VolumeX size={18} /> : <Volume2 size={18} />}
        </div>
      </motion.button>
      
      <AnimatePresence>
        {!isPlaying && (
            <motion.span 
                initial={{ opacity: 0, x: -10 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: -10 }}
                className="text-xs font-mono text-white/40 uppercase tracking-widest hidden md:block"
            >
                Sound On
            </motion.span>
        )}
      </AnimatePresence>
    </div>
  );
};

export default AudioController;
