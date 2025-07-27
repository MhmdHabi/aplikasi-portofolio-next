"use client";

import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

interface ChatModalProps {
  isOpen: boolean;
  onClose: () => void;
}

interface ChatMessage {
  role: "user" | "assistant";
  content: string;
}

export default function ChatModal({ isOpen, onClose }: ChatModalProps) {
  const [input, setInput] = useState("");
  const [messages, setMessages] = useState<ChatMessage[]>([
    {
      role: "assistant",
      content: "👋 Hi! How can I help you today?",
    },
  ]);
  const [isTyping, setIsTyping] = useState(false);

  const sendMessage = async () => {
    if (!input.trim()) return;

    const userMessage: ChatMessage = { role: "user", content: input };
    const updatedMessages = [...messages, userMessage];
    setMessages(updatedMessages);
    setInput("");
    setIsTyping(true);

    try {
      const response = await fetch("https://api.groq.com/openai/v1/chat/completions", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${process.env.NEXT_PUBLIC_GROQ_API_KEY}`,
        },
        body: JSON.stringify({
          model: "llama3-8b-8192",
          messages: updatedMessages.map((m) => ({
            role: m.role,
            content: m.content,
          })),
        }),
      });

      const data = await response.json();
      console.log("🛠️ GROQ response data:", data);

      if (!response.ok) {
        console.error("❌ GROQ API responded with status", response.status, data);
        throw new Error(data.error?.message || "Unknown error from GROQ");
      }

      const aiContent = data.choices?.[0]?.message?.content;
      if (typeof aiContent === "string" && aiContent.trim()) {
        setMessages((prev) => [...updatedMessages, { role: "assistant", content: aiContent.trim() }]);
      } else {
        console.warn("⚠️ No valid content in data.choices:", data);
        setMessages((prev) => [
          ...updatedMessages,
          {
            role: "assistant",
            content: "Maaf, respons tidak tersedia saat ini.",
          },
        ]);
      }
    } catch (err) {
      console.error("🚨 Error fetching AI reply:", err);
      setMessages((prev) => [
        ...updatedMessages,
        {
          role: "assistant",
          content: "⚠️ Maaf, terjadi kesalahan. Silakan coba lagi nanti.",
        },
      ]);
    } finally {
      setIsTyping(false);
    }
  };

  return (
    <AnimatePresence>
      {isOpen && (
        <motion.div initial={{ opacity: 0, y: 50, scale: 0.95 }} animate={{ opacity: 1, y: 0, scale: 1 }} exit={{ opacity: 0, y: 50, scale: 0.95 }} transition={{ duration: 0.3 }} className="fixed bottom-20 right-6 z-50 w-[90%] max-w-md">
          <div className="bg-black text-white rounded-2xl shadow-2xl border border-neutral-800 flex flex-col h-[400px]">
            <div className="bg-neutral-900 px-4 py-3 flex justify-between items-center rounded-t-2xl border-b border-neutral-800">
              <h2 className="font-semibold text-lg">💬 AI Assistant</h2>
              <button onClick={onClose} className="hover:text-red-400 text-lg transition">
                ✖
              </button>
            </div>
            <div className="flex-1 overflow-y-auto px-4 py-4 bg-black text-sm text-gray-200 space-y-3">
              {messages.map((msg, i) => (
                <div key={i} className={`px-4 py-2 rounded-lg max-w-[85%] w-fit ${msg.role === "user" ? "bg-indigo-600 self-end text-white ml-auto" : "bg-neutral-800 text-white"}`}>
                  {msg.content}
                </div>
              ))}
              {isTyping && <div className="text-gray-400 italic text-sm">Typing...</div>}
            </div>
            <div className="flex items-center border-t border-neutral-800 px-3 py-4 bg-black">
              <input
                type="text"
                value={input}
                onChange={(e) => setInput(e.target.value)}
                placeholder="Ask me anything..."
                className="flex-1 px-4 py-2 text-sm bg-neutral-900 text-white placeholder-gray-400 rounded-full border border-neutral-700 focus:outline-none focus:ring-2 focus:ring-white"
                onKeyDown={(e) => e.key === "Enter" && sendMessage()}
              />
              <button disabled={isTyping} onClick={sendMessage} className="ml-3 bg-white text-black hover:bg-gray-200 px-5 py-2 rounded-full text-sm font-semibold transition disabled:opacity-50">
                Send
              </button>
            </div>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
