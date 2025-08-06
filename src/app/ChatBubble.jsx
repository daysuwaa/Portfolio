"use client";
import { useEffect } from "react";

export default function ChatBubble() {
  useEffect(() => {
    const script = document.createElement("script");
    script.src = "https://cdn.jsdelivr.net/npm/issueiq@1.0.5/dist/loader.js";
    script.defer = true;
    document.body.appendChild(script);

    return () => {
      document.body.removeChild(script); // clean up
    };
  }, []);

  return (
    <div
      style={{ position: "fixed", zIndex: 2147483647, pointerEvents: "none" }}
    >
      <issueiq-bubble
        display-name="Adesuwa Aiwerioghene"
        sender-text-color="#000000"
        bot-text-color="#ffffff"
        chatbot-id="f10e488f-ff26-48bf-8942-3fc80d5676ff"
        style={{ pointerEvents: "auto" }}
      ></issueiq-bubble>
    </div>
  );
}
