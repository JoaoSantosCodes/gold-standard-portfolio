import React from "react";
import { motion } from "framer-motion";
import { Server, Activity, Shield, Cpu, Database, Network } from "lucide-react";

const systems = [
  { name: "Core Infrastructure", status: "Operational", icon: Server, color: "text-green-500" },
  { name: "Security Protocols", status: "Shield Active", icon: Shield, color: "text-blue-500" },
  { name: "Automation Matrix", status: "Processing", icon: Cpu, color: "text-primary" },
  { name: "Knowledge Base", status: "Synced", icon: Database, color: "text-amber-500" },
];

const CommandCenter = () => {
  return (
    <section id="command-center" className="py-24 relative overflow-hidden">
      <div className="container mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-4xl font-serif mb-4">Command <span className="text-primary">Center</span></h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            Visão em tempo real dos sistemas e infraestruturas sob gestão.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {systems.map((system, index) => (
            <motion.div
              key={system.name}
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ delay: index * 0.1 }}
              viewport={{ once: true }}
              className="glass-tactical p-6 rounded-sm relative group overflow-hidden"
            >
              <div className="absolute top-0 right-0 p-2 opacity-10 group-hover:opacity-20 transition-opacity">
                <system.icon size={48} />
              </div>
              <div className="flex items-center gap-4 mb-4">
                <div className={`p-2 rounded-sm bg-primary/10 ${system.color}`}>
                  <system.icon size={20} />
                </div>
                <div>
                  <h3 className="text-sm font-medium uppercase tracking-wider">{system.name}</h3>
                  <div className="flex items-center gap-2">
                    <span className="relative flex h-2 w-2">
                      <span className={`animate-ping absolute inline-flex h-full w-full rounded-full opacity-75 ${system.color === 'text-primary' ? 'bg-primary' : system.color.replace('text-', 'bg-')}`}></span>
                      <span className={`relative inline-flex rounded-full h-2 w-2 ${system.color === 'text-primary' ? 'bg-primary' : system.color.replace('text-', 'bg-')}`}></span>
                    </span>
                    <span className="text-[10px] text-muted-foreground uppercase">{system.status}</span>
                  </div>
                </div>
              </div>
              <div className="space-y-2">
                <div className="h-1 w-full bg-white/5 rounded-full overflow-hidden">
                  <motion.div
                    initial={{ width: 0 }}
                    whileInView={{ width: "70%" }}
                    className="h-full bg-primary/40"
                  />
                </div>
                <div className="flex justify-between text-[10px] text-muted-foreground">
                  <span>LOAD: 42%</span>
                  <span>UPTIME: 99.9%</span>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Large Tactical Map / Grid Section */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mt-12 glass-tactical rounded-sm p-8 relative overflow-hidden"
        >
          <div className="absolute inset-0 cyber-grid opacity-[0.05]" />
          <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-transparent via-primary/50 to-transparent" />
          
          <div className="relative z-10 grid lg:grid-cols-3 gap-8">
            <div className="lg:col-span-2">
              <div className="flex items-center gap-4 mb-6">
                <Activity className="text-primary animate-pulse" />
                <h3 className="text-xl font-serif">Global Infrastructure Map</h3>
              </div>
              <div className="h-64 rounded-sm border border-primary/10 bg-black/40 flex items-center justify-center relative overflow-hidden">
                {/* Simulated Map Visual */}
                <div className="absolute inset-0 opacity-20">
                   <Network className="w-full h-full p-12 text-primary" />
                </div>
                <div className="text-center space-y-2">
                  <p className="text-xs text-primary/60 uppercase tracking-[0.2em]">Synchronizing data nodes...</p>
                  <div className="flex gap-1 justify-center">
                    {[1,2,3,4,5].map(i => (
                      <motion.div
                        key={i}
                        animate={{ height: [4, 12, 4] }}
                        transition={{ repeat: Infinity, duration: 1, delay: i * 0.1 }}
                        className="w-1 bg-primary/40"
                      />
                    ))}
                  </div>
                </div>
              </div>
            </div>
            <div className="space-y-6">
              <h3 className="text-lg font-serif">System Logs</h3>
              <div className="space-y-4 font-mono text-[10px]">
                {[
                  { time: "14:22:01", msg: "Initializing kernel modules..." },
                  { time: "14:22:05", msg: "Establishing secure handshake." },
                  { time: "14:22:12", msg: "Neural network synced." },
                  { time: "14:22:30", msg: "Infrastructure nominal." },
                ].map((log, i) => (
                  <div key={i} className="flex gap-4 border-l border-primary/20 pl-4 py-1">
                    <span className="text-primary/60">{log.time}</span>
                    <span className="text-muted-foreground">{log.msg}</span>
                  </div>
                ))}
              </div>
              <button className="w-full py-3 border border-primary/30 text-[10px] uppercase tracking-widest hover:bg-primary/5 transition-colors">
                Access Full Terminal
              </button>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default CommandCenter;
