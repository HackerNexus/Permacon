export default function FloatingWhatsapp() {
  return (
    <a
      href="https://wa.me/254728590996"
      target="_blank"
      rel="noreferrer"
      className="fixed bottom-6 right-6 bg-green-500 p-4 rounded-full shadow-2xl hover:scale-110 transition z-50 flex items-center justify-center"
      aria-label="WhatsApp Chat"
    >
      <img
        src="https://cdn.jsdelivr.net/gh/simple-icons/simple-icons/icons/whatsapp.svg"
        alt="WhatsApp"
        className="w-8 h-8 invert"
      />
    </a>
  );
}  