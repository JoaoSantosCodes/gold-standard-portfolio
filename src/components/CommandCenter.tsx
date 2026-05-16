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
          <h2 className="text-[10px] uppercase tracking-[0.5em] text-primary/60 font-mono mb-4">Tactical_Interface_v4.0</h2>
          <h2 className="text-4xl md:text-5xl font-serif font-medium text-gold-gradient">
            Command <span className="text-primary">Center</span>
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto mt-6">
            Visão em tempo real dos sistemas e infraestruturas sob gestão técnica.
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
              <div className="absolute top-0 right-0 p-2 opacity-5 group-hover:opacity-10 transition-opacity">
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

        {/* Tactical Map & Live Logs */}
        <div className="mt-12 grid lg:grid-cols-3 gap-6">
          {/* Tactical Map */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="lg:col-span-2 glass-tactical rounded-sm p-8 relative overflow-hidden"
          >
            <div className="absolute inset-0 cyber-grid opacity-[0.05]" />
            <div className="flex items-center gap-4 mb-6">
              <Activity className="text-primary animate-pulse" />
              <h3 className="text-xl font-serif">Infrastructure_Topology</h3>
            </div>
            <div className="h-64 rounded-sm border border-primary/10 bg-black/40 flex items-center justify-center relative overflow-hidden">
              <div className="absolute inset-0 opacity-20">
                 <Network className="w-full h-full p-12 text-primary" />
              </div>
              <div className="text-center space-y-2 z-10">
                <p className="text-xs text-primary/60 uppercase tracking-[0.2em]">Neural Node Mapping Active</p>
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
          </motion.div>

          {/* Live System Logs */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="glass-tactical p-6 rounded-sm border-primary/10 relative overflow-hidden h-[400px] flex flex-col"
          >
            <div className="flex justify-between items-center mb-4">
              <h3 className="text-[10px] uppercase tracking-[0.3em] text-primary/60 font-mono">System_Activity_Log</h3>
              <div className="flex gap-1">
                 <div className="w-1 h-1 bg-primary animate-pulse" />
                 <div className="w-1 h-1 bg-primary/40" />
                 <div className="w-1 h-1 bg-primary/20" />
              </div>
            </div>
            
            <div className="flex-1 font-mono text-[9px] space-y-2 overflow-hidden relative">
               <div className="absolute inset-x-0 bottom-0 h-20 bg-gradient-to-t from-background/80 to-transparent z-10" />
               <motion.div 
                 animate={{ y: [0, -600] }}
                 transition={{ duration: 30, repeat: Infinity, ease: "linear" }}
                 className="space-y-2"
               >
                 {[...Array(40)].map((_, i) => (
                   <div key={i} className="flex gap-3 opacity-60 hover:opacity-100 transition-opacity">
                      <span className="text-primary/40">[{new Date().toLocaleTimeString()}]</span>
                      <span className="text-white/80">
                        {i % 4 === 0 ? "NETWORK: Latency check completed in sector 7-G" : 
                         i % 4 === 1 ? "SECURITY: Encrypted handshake successful" :
                         i % 4 === 2 ? "CORE: Synchronizing neural mapping nodes" :
                         "SYSTEM: Maintenance protocol 44.0.1 initialized"}
                      </span>
                      <span className="ml-auto text-primary/20 italic">0x{Math.floor(Math.random()*1000).toString(16)}</span>
                   </div>
                 ))}
               </motion.div>
            </div>
            
            <button className="mt-4 w-full py-2 border border-primary/20 text-[9px] uppercase tracking-widest text-primary hover:bg-primary hover:text-black transition-all duration-300">
               Open Tactical Terminal
            </button>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default CommandCenter;
