import React, { useState, useEffect, useRef } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { MessageCircle, X, Send, Loader2 } from 'lucide-react';
import { GoogleGenAI } from "@google/genai";

const FloatingChatbot = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [messages, setMessages] = useState([
    { text: "Hello! I'm Talent Tribe Assistant! How can I help you today?", isUser: false }
  ]);
  const [input, setInput] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const [isHovered, setIsHovered] = useState(false);

  // Physics State using refs for smooth high-frequency updates without re-renders
  const chatbotRef = useRef(null);
  const positionRef = useRef({ x: window.innerWidth / 2 - 32, y: window.innerHeight * 0.3 });
  const velocityRef = useRef({ vx: 1.8, vy: 1.5 });
  const animationIdRef = useRef(null);
  const scrollRef = useRef(null);

  // Zero Gravity Animation Loop
  useEffect(() => {
    const animate = () => {
      // If the chat is open, we stop the ball's movement
      if (isOpen) {
        animationIdRef.current = requestAnimationFrame(animate);
        return;
      }

      // Physics calculation
      // FIX: Changed multiplier from 0.2 to 0.5 so it doesn't "stop" when hovered
      const speedMultiplier = isHovered ? 0.5 : 1;
      
      positionRef.current.x += velocityRef.current.vx * speedMultiplier;
      positionRef.current.y += velocityRef.current.vy * speedMultiplier;

      const size = 64; // Icon size
      const width = window.innerWidth;
      const height = window.innerHeight;

      // Wall collisions with "bounce" logic
      if (positionRef.current.x <= 0) {
        velocityRef.current.vx = Math.abs(velocityRef.current.vx);
        positionRef.current.x = 0;
      } else if (positionRef.current.x >= width - size) {
        velocityRef.current.vx = -Math.abs(velocityRef.current.vx);
        positionRef.current.x = width - size;
      }

      if (positionRef.current.y <= 0) {
        velocityRef.current.vy = Math.abs(velocityRef.current.vy);
        positionRef.current.y = 0;
      } else if (positionRef.current.y >= height - size) {
        velocityRef.current.vy = -Math.abs(velocityRef.current.vy);
        positionRef.current.y = height - size;
      }

      // Direct DOM manipulation for high performance (60fps+)
      if (chatbotRef.current) {
        chatbotRef.current.style.transform = `translate3d(${positionRef.current.x}px, ${positionRef.current.y}px, 0)`;
      }

      animationIdRef.current = requestAnimationFrame(animate);
    };

    animationIdRef.current = requestAnimationFrame(animate);
    return () => {
      if (animationIdRef.current) cancelAnimationFrame(animationIdRef.current);
    };
  }, [isOpen, isHovered]);

  // Auto-scroll chat to most recent message
  useEffect(() => {
    if (scrollRef.current) {
      scrollRef.current.scrollTop = scrollRef.current.scrollHeight;
    }
  }, [messages, isLoading]);

  const callGeminiAPI = async (prompt: string) => {
    try {
      const ai = new GoogleGenAI({ apiKey: "AIzaSyCwLl9OBKkcSszMa7rmtFiPhKVh35GU8OY" });
      const response = await ai.models.generateContent({
        model: "models/gemini-1.5-flash",
        contents: prompt,
      });

      // Handle response safely - @google/genai response.text is often a getter or null
      return response.text || "I couldn't generate a response.";
    } catch (error) {
      console.error("Error calling Gemini API:", error);
      throw error;
    }
  };

  const handleSendMessage = async () => {
    if (!input.trim() || isLoading) return;
    const userMsg = input.trim();
    setMessages(prev => [...prev, { text: userMsg, isUser: true }]);
    setInput('');
    setIsLoading(true);

    try {
      const aiResponse = await callGeminiAPI(userMsg);
      setMessages(prev => [...prev, { text: aiResponse, isUser: false }]);
    } catch {
      setMessages(prev => [...prev, { text: "Connection lost in orbit. Please try again!", isUser: false }]);
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <>
      {/* Floating Ball Icon - always visible on top of pages */}
      <div
        ref={chatbotRef}
        className="fixed z-5 cursor-pointer touch-none"
        style={{ width: 64, height: 64, top: 0, left: 0, willChange: 'transform' }}
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={() => setIsHovered(false)}
        onClick={() => setIsOpen(!isOpen)}
      >
        <div className="relative group w-full h-full">
          {/* Outer glow */}
          <div className="absolute -inset-4 bg-blue-500 rounded-full blur-2xl opacity-10 group-hover:opacity-40 transition duration-500 animate-pulse"></div>

          <div className="relative bg-white w-full h-full rounded-full shadow-[0_0_30px_rgba(59,130,246,0.5)] flex items-center justify-center border-2 border-blue-400 group-active:scale-95 transition-transform">
            {isOpen ? <X size={28} className="text-blue-600" /> : <MessageCircle size={28} className="text-blue-600" />}

            {/* Glossy reflection to make it look like a floating sphere */}
            <div className="absolute top-2 left-3 w-5 h-3 bg-white/90 rounded-full blur-[1.5px] rotate-[-40deg]" />
            <div className="absolute bottom-2 right-4 w-2 h-2 bg-blue-100 rounded-full blur-[1px]" />
          </div>
        </div>
      </div>

      {/* Chat Modal */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 bg-black/50 z-[110] flex items-center justify-center"
            onClick={() => setIsOpen(false)}
          >
            <motion.div
              initial={{ scale: 0.9, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.9, opacity: 0 }}
              className="relative w-full max-w-4xl h-[80vh] bg-slate-950 rounded-2xl overflow-hidden font-sans mx-4"
              onClick={(e) => e.stopPropagation()}
            >
              {/* Visual background for the "Room" */}
              <div className="absolute inset-0 opacity-20 pointer-events-none">
                <div className="absolute inset-0 border-[40px] border-slate-900" />
                <div className="w-full h-full" style={{ backgroundImage: 'radial-gradient(circle, #334155 1px, transparent 1px)', backgroundSize: '60px 60px' }} />
              </div>

              {/* Floating Virtual Balls */}
              <motion.div
                className="absolute top-20 left-20 w-16 h-16 bg-gradient-to-br from-blue-500/20 to-cyan-500/20 rounded-full blur-sm"
                animate={{
                  y: [0, -30, 0],
                  rotateY: [0, 180, 360],
                  rotateX: [0, 45, 0],
                }}
                transition={{
                  duration: 8,
                  repeat: Infinity,
                  ease: "easeInOut"
                }}
                style={{ transformStyle: 'preserve-3d' }}
              />
              <motion.div
                className="absolute top-16 right-20 w-12 h-12 bg-gradient-to-br from-cyan-500/25 to-blue-500/25 rounded-full blur-sm"
                animate={{
                  y: [0, 25, 0],
                  rotateZ: [0, 270, 360],
                }}
                transition={{
                  duration: 6,
                  repeat: Infinity,
                  ease: "easeInOut",
                  delay: 1
                }}
                style={{ transformStyle: 'preserve-3d' }}
              />
              <motion.div
                className="absolute top-24 left-1/2 w-8 h-8 bg-gradient-to-br from-blue-500/30 to-cyan-500/30 rounded-full blur-sm"
                animate={{
                  x: [0, 30, 0],
                  rotateY: [360, 180, 0],
                }}
                transition={{
                  duration: 7,
                  repeat: Infinity,
                  ease: "easeInOut",
                  delay: 2
                }}
                style={{ transformStyle: 'preserve-3d' }}
              />
              <motion.div
                className="absolute bottom-32 right-16 w-12 h-12 bg-gradient-to-br from-cyan-500/20 to-blue-500/20 rounded-full blur-sm"
                animate={{
                  y: [0, 20, 0],
                  rotateY: [360, 180, 0],
                  rotateZ: [0, 90, 0],
                }}
                transition={{
                  duration: 6,
                  repeat: Infinity,
                  ease: "easeInOut",
                  delay: 2
                }}
                style={{ transformStyle: 'preserve-3d' }}
              />

              <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 text-center pointer-events-none select-none">
                <h1 className="text-4xl md:text-6xl font-black text-white/5 uppercase tracking-[0.4em]">TALENTTRIBE</h1>
                <p className="text-blue-400/20 mt-4 font-mono text-sm">PHYSICS SYSTEM: ACTIVE</p>
              </div>

              {/* Chat UI */}
              <motion.div
                initial={{ y: 30, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ delay: 0.2 }}
                className="absolute bottom-6 left-6 right-6 w-auto md:left-auto md:right-10 md:bottom-10 md:w-96 h-[520px] max-h-[70vh] bg-white rounded-[2rem] shadow-[0_30px_90px_rgba(0,0,0,0.4)] flex flex-col overflow-hidden border border-blue-100"
              >
                {/* Header */}
                <div className="bg-gradient-to-r from-blue-600 to-indigo-600 p-6 flex justify-between items-center text-white shrink-0">
                  <div className="flex items-center gap-4">
                    <div className="w-12 h-12 bg-white/20 rounded-2xl flex items-center justify-center backdrop-blur-md border border-white/20">
                      <MessageCircle size={24} />
                    </div>
                    <div>
                      <h2 className="font-bold text-base leading-tight">TalentTribe</h2>
                      <div className="flex items-center gap-1.5">
                        <span className="w-2 h-2 bg-green-400 rounded-full animate-pulse"></span>
                        <p className="text-[11px] text-blue-100 font-medium">Safe Mode Active</p>
                      </div>
                    </div>
                  </div>
                  <button onClick={() => setIsOpen(false)} className="bg-white/10 hover:bg-white/20 p-2.5 rounded-xl transition-colors">
                    <X size={20} />
                  </button>
                </div>

                {/* Messages */}
                <div ref={scrollRef} className="flex-1 p-5 overflow-y-auto space-y-4 bg-slate-50/50">
                  {messages.map((msg, i) => (
                    <div key={i} className={`flex ${msg.isUser ? 'justify-end' : 'justify-start'}`}>
                      <div className={`max-w-[85%] p-4 rounded-2xl text-sm leading-relaxed ${
                        msg.isUser
                          ? 'bg-blue-600 text-white rounded-tr-none shadow-lg'
                          : 'bg-white text-slate-700 shadow-sm border border-slate-200 rounded-tl-none'
                      }`}>
                        {msg.text}
                      </div>
                    </div>
                  ))}
                  {isLoading && (
                    <div className="flex justify-start">
                      <div className="bg-white p-3.5 rounded-2xl rounded-tl-none shadow-sm border border-slate-200 flex items-center gap-3">
                        <Loader2 size={16} className="animate-spin text-blue-600" />
                        <span className="text-[11px] text-slate-400 font-bold uppercase tracking-widest">Incoming...</span>
                      </div>
                    </div>
                  )}
                </div>

                {/* Input Area */}
                <div className="p-5 bg-white border-t border-slate-100 shrink-0">
                  <div className="flex gap-2">
                    <input
                      type="text"
                      value={input}
                      onChange={(e) => setInput(e.target.value)}
                      onKeyDown={(e) => e.key === 'Enter' && handleSendMessage()}
                      placeholder="Ask TalentTribe..."
                      className="flex-1 px-5 py-3.5 bg-slate-100 border-none rounded-2xl focus:ring-2 focus:ring-blue-500 outline-none text-sm text-slate-800 placeholder:text-slate-400"
                    />
                    <button
                      onClick={handleSendMessage}
                      disabled={!input.trim() || isLoading}
                      className="p-4 bg-blue-600 text-white rounded-2xl hover:bg-blue-700 disabled:bg-slate-200 disabled:text-slate-400 transition-all active:scale-95 shadow-lg flex items-center justify-center"
                    >
                      <Send size={20} />
                    </button>
                  </div>
                  <p className="text-center text-[9px] text-slate-300 mt-4 font-medium uppercase tracking-widest">
                    Protected Chat System
                  </p>
                </div>
              </motion.div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
};

export default FloatingChatbot;