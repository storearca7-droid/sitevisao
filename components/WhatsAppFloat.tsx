import React from 'react';
import { MessageCircle } from 'lucide-react';

export const WhatsAppFloat = () => {
  return (
    <a
      href="https://wa.me/5571983032979"
      target="_blank"
      rel="noopener noreferrer"
      className="fixed bottom-6 right-6 z-50 bg-green-500 hover:bg-green-600 text-white p-4 rounded-full shadow-2xl transition-all duration-300 hover:scale-110 flex items-center justify-center group"
      aria-label="Contato WhatsApp"
    >
      <MessageCircle size={32} />
      <span className="absolute right-full mr-4 bg-white text-gray-800 px-3 py-1 rounded shadow-lg opacity-0 group-hover:opacity-100 transition-opacity whitespace-nowrap text-sm font-semibold pointer-events-none">
        Fale Conosco
      </span>
    </a>
  );
};