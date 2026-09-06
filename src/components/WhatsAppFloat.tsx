import { MessageCircle } from 'lucide-react';
import { whatsappContactUrl } from '@/lib/whatsapp';

export default function WhatsAppFloat() {
  return (
    <a
      href={whatsappContactUrl()}
      target="_blank"
      rel="noopener noreferrer"
      className="fixed bottom-5 right-5 z-50 group"
      aria-label="Falar pelo WhatsApp"
    >
      <div className="relative">
        <div className="absolute inset-0 rounded-full bg-success-500 animate-ping opacity-20" />
        <div className="relative w-14 h-14 rounded-full bg-success-600 hover:bg-success-500 flex items-center justify-center shadow-xl shadow-success-600/30 transition-colors group-hover:scale-105 transform transition-transform">
          <MessageCircle className="w-7 h-7 text-white" />
        </div>
      </div>
    </a>
  );
}
