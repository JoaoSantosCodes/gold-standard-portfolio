import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";

const BootSequence: React.FC<{ onComplete: () => void }> = ({ onComplete }) => {
  const [logs, setLogs] = useState<string[]>([]);
  const [progress, setProgress] = useState(0);

  const bootMessages = [
    "INITIALIZING GOLD_OS CORE...",
    "LOADING NEURAL NETWORKS...",
    "ESTABLISHING SECURE HANDSHAKE...",
    "SYNCING ARCHITECTURE NODES...",
    "CALIBRATING TACTICAL INTERFACE...",
    "SYSTEM NOMINAL. ACCESSING PORTFOLIO.",
  ];

  useEffect(() => {
    let currentLog = 0;
    const logInterval = setInterval(() => {
      if (currentLog < bootMessages.length) {
        setLogs((prev) => [...prev, bootMessages[currentLog]]);
        currentLog++;
      } else {
        clearInterval(logInterval);
      }
    }, 400);

    const progressInterval = setInterval(() => {
      setProgress((prev) => {
        if (prev >= 100) {
          clearInterval(progressInterval);
          setTimeout(onComplete, 800);
          return 100;
        }
        return prev + 2;
      });
    }, 40);

    return () => {
      clearInterval(logInterval);
      clearInterval(progressInterval);
    };
  }, [onComplete]);

  return (
    <motion.div
      initial={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      className="fixed inset-0 z-[100] bg-background flex flex-col items-center justify-center p-6 overflow-hidden"
    >
      <div className="absolute inset-0 cyber-grid opacity-[0.05]" />
      
      <div className="w-full max-w-md space-y-8 relative z-10">
        <motion.div 
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          className="flex justify-between items-end mb-2"
        >
          <span className="text-[10px] uppercase tracking-[0.3em] text-primary">System Boot</span>
          <span className="text-[10px] font-mono text-primary/60">{progress}%</span>
        </motion.div>
        
        <div className="h-1 w-full bg-white/5 rounded-full overflow-hidden relative">
          <motion.div 
            className="h-full bg-primary"
            initial={{ width: 0 }}
            animate={{ width: `${progress}%` }}
          />
        </div>

        <div className="h-40 font-mono text-[10px] text-muted-foreground overflow-hidden space-y-2">
          <AnimatePresence>
            {logs.map((log, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, x: -10 }}
                animate={{ opacity: 1, x: 0 }}
                className="flex gap-4"
              >
                <span className="text-primary/40">[{new Date().toLocaleTimeString()}]</span>
                <span className={i === logs.length - 1 ? "text-primary" : ""}>{log}</span>
              </motion.div>
            ))}
          </AnimatePresence>
        </div>
      </div>

      <div className="absolute bottom-12 text-center">
        <motion.p
          animate={{ opacity: [0.3, 1, 0.3] }}
          transition={{ duration: 2, repeat: Infinity }}
          className="text-[10px] uppercase tracking-[0.5em] text-primary/40"
        >
          Jonh C. Architecture // Gold Edition
        </motion.p>
      </div>
    </motion.div>
  );
};

export default BootSequence;
