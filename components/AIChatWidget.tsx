import React, { useState, useRef, useEffect } from 'react';
import { MessageSquare, X, Send, Sparkles, Loader2 } from 'lucide-react';
import { createChatSession, sendMessageStream } from '../services/geminiService';
import { ChatMessage } from '../types';

export const AIChatWidget: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [messages, setMessages] = useState<ChatMessage[]>([
    { role: 'model', text: 'Hi! I\'m your FiStudy AI Tutor. Need help finding a course or studying?' }
  ]);
  const [inputText, setInputText] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const chatSessionRef = useRef<any>(null);
  const messagesEndRef = useRef<HTMLDivElement>(null);

  // Initialize chat session once when component mounts
  useEffect(() => {
    chatSessionRef.current = createChatSession();
  }, []);

  // Auto-scroll to bottom of chat
  useEffect(() => {
    messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' });
  }, [messages, isOpen]);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!inputText.trim() || isLoading) return;

    const userMessage = inputText.trim();
    setInputText('');
    setMessages(prev => [...prev, { role: 'user', text: userMessage }]);
    setIsLoading(true);

    try {
      // Create a placeholder for the model response
      setMessages(prev => [...prev, { role: 'model', text: '' }]);

      const stream = await sendMessageStream(chatSessionRef.current, userMessage);
      
      let fullText = '';
      for await (const chunk of stream) {
        const chunkText = chunk.text;
        if (chunkText) {
          fullText += chunkText;
          
          // Update the last message with the accumulating text
          setMessages(prev => {
            const newMessages = [...prev];
            newMessages[newMessages.length - 1] = { role: 'model', text: fullText };
            return newMessages;
          });
        }
      }
    } catch (error) {
      console.error('Chat error', error);
      setMessages(prev => [...prev, { role: 'model', text: 'Sorry, I encountered an error. Please try again.', isError: true }]);
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <>
      {/* Trigger Button */}
      <button
        onClick={() => setIsOpen(true)}
        className={`fixed bottom-6 right-6 z-40 bg-primary-600 text-white p-4 rounded-full shadow-lg hover:bg-primary-700 transition-all duration-300 hover:scale-110 flex items-center justify-center ${isOpen ? 'opacity-0 pointer-events-none scale-0' : 'opacity-100 scale-100'}`}
      >
        <MessageSquare size={24} />
      </button>

      {/* Chat Window */}
      <div 
        className={`fixed bottom-6 right-6 z-50 w-full sm:w-96 bg-white rounded-2xl shadow-2xl border border-gray-200 overflow-hidden flex flex-col transition-all duration-300 origin-bottom-right ${isOpen ? 'scale-100 opacity-100' : 'scale-0 opacity-0 pointer-events-none'}`}
        style={{ height: '500px', maxHeight: '80vh' }}
      >
        {/* Header */}
        <div className="bg-primary-600 p-4 flex justify-between items-center text-white">
          <div className="flex items-center gap-2">
            <div className="bg-white/20 p-1.5 rounded-lg">
                <Sparkles size={18} />
            </div>
            <div>
              <h3 className="font-bold text-sm">FiStudy AI Tutor</h3>
              <p className="text-xs text-primary-100">Powered by Gemini</p>
            </div>
          </div>
          <button 
            onClick={() => setIsOpen(false)}
            className="p-1 hover:bg-white/20 rounded-full transition-colors"
          >
            <X size={20} />
          </button>
        </div>

        {/* Messages */}
        <div className="flex-1 overflow-y-auto p-4 bg-gray-50 space-y-4">
          {messages.map((msg, index) => (
            <div 
              key={index} 
              className={`flex ${msg.role === 'user' ? 'justify-end' : 'justify-start'}`}
            >
              <div 
                className={`max-w-[85%] rounded-2xl px-4 py-3 text-sm leading-relaxed ${
                  msg.role === 'user' 
                    ? 'bg-primary-600 text-white rounded-br-none' 
                    : msg.isError 
                        ? 'bg-red-100 text-red-700 rounded-bl-none'
                        : 'bg-white text-gray-800 shadow-sm border border-gray-100 rounded-bl-none'
                }`}
              >
                {msg.text}
              </div>
            </div>
          ))}
          {isLoading && messages[messages.length - 1].role === 'user' && (
             <div className="flex justify-start">
               <div className="bg-white px-4 py-3 rounded-2xl rounded-bl-none shadow-sm border border-gray-100 flex items-center gap-2">
                  <Loader2 size={16} className="animate-spin text-primary-600" />
                  <span className="text-xs text-gray-400">Thinking...</span>
               </div>
             </div>
          )}
          <div ref={messagesEndRef} />
        </div>

        {/* Input */}
        <form onSubmit={handleSubmit} className="p-4 bg-white border-t border-gray-100">
          <div className="relative flex items-center">
            <input
              type="text"
              value={inputText}
              onChange={(e) => setInputText(e.target.value)}
              placeholder="Ask for study tips..."
              className="w-full pl-4 pr-12 py-3 bg-gray-50 border border-gray-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-primary-500 focus:bg-white transition-all text-sm"
            />
            <button 
              type="submit"
              disabled={!inputText.trim() || isLoading}
              className="absolute right-2 p-2 bg-primary-600 text-white rounded-lg hover:bg-primary-700 disabled:opacity-50 disabled:cursor-not-allowed transition-colors"
            >
              <Send size={16} />
            </button>
          </div>
        </form>
      </div>
    </>
  );
};