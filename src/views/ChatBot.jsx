import React, { useState, useEffect } from "react";

import BotMessage from "../components/BotMessage";
import UserMessage from "../components/UserMessage";
import Messages from "../components/Messages";
import Input from "../components/Input";
import Header from "../components/Header";

import { api } from "../api/service.js";

import "../styles.css";

const WELCOME_MESSAGE = async () => {
  return new Promise(resolve => {
    setTimeout(() => {
      resolve(`Hello! 👋 I'm your system scenario generator bot. Please provide a description of your system, and I'll help you brainstorm potential thread scenarios.
      \n
      For example, you can tell me something like: "Our system is a web application running on AWS, using React.js for the frontend and FastAPI for the backend."
      \n
      Based on your description, I'll generate a few possible thread scenarios that you might encounter. Just type your system's description, and let's get started! 🚀`);
    }, 1000);
  });
};

export default function Chatbot() {
  const [messages, setMessages] = useState([]);

  useEffect(() => {
    async function loadWelcomeMessage() {
      setMessages([
        <BotMessage
          key="0"
          fetchMessage={WELCOME_MESSAGE}
        />
      ]);
    }
    loadWelcomeMessage();
  }, []);

  const send = async text => {
    const newMessages = messages.concat(
      <UserMessage key={messages.length + 1} text={text} />,
      <BotMessage
        key={messages.length + 2}
        fetchMessage={async () => await api.getChatbotResponse(text)}
      />
    );
    setMessages(newMessages);
  };

  return (
    <div className="chatbot">
      <Header />
      <Messages messages={messages} />
      <Input onSend={send} />
    </div>
  );
}
