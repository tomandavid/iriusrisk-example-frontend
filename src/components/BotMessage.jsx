import React, { useState, useEffect } from "react";

export default function BotMessage({ fetchMessage }) {
  const [isLoading, setLoading] = useState(true);
  const [message, setMessage] = useState("");

  useEffect(() => {
    async function loadMessage() {
      const msg = await fetchMessage();
      setLoading(false);
      setMessage(msg);
    }
    loadMessage();
  }, [fetchMessage]);

  return (
    <div className="message-container">
      {isLoading 
        ? <div className="bot-message bot-message-loading">
            <img src="/loading.svg" alt="..." className="loading-animation" />
          </div>
        : <div className="bot-message">{message}</div>
      }
    </div>
  );
}
