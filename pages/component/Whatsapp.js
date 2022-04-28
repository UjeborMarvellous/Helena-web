import React from "react";
import FloatingWhatsApp from "react-floating-whatsapp";

export default function App() {
  return (
    <div className="z-50 rounded-full block fixed">
      <FloatingWhatsApp
        phoneNumber="+2348103752860"
        accountName="health from Mavric"
        allowClickAway
        notification
        chatMessage="Hello there! 🤝 
How can we help? 
Do you want to order a product?"
        avatar="/CHI.jpg"
        styles={{ zIndex: 1000000 }}
      />
    </div>
  );
}
