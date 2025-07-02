"use client";

export default function ChatBubble() {
  return (
    <div
      style={{
        position: "fixed",
        zIndex: 2147483647,
        pointerEvents: "none",
      }}
    >
      <issueiq-bubble
        sender-text-color="#000000"
        bot-text-color="#fb7185cc"
        chatbot-id="8b933d3a-532f-4778-b578-322c8405d85a"
        display-name="Adesuwa Aiwerioghene"
        style={{ pointerEvents: "auto" }}
      ></issueiq-bubble>
    </div>
  );
}
