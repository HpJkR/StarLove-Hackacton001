import './Chat.scss';
import React, { useState, useEffect } from 'react';

const Chat = () => {
  const [messages, setMessages] = useState([]);
  const [inputValue, setInputValue] = useState('');
  const [isOpen, setIsOpen] = useState(false);

  const handleInputChange = (e) => {
    setInputValue(e.target.value);
  };

  const handleSendMessage = () => {
    if (inputValue.trim() !== '') {
      const newMessage = {
        id: messages.length + 1,
        text: inputValue,
        isUser: true,
      };

      setMessages([...messages, newMessage]);
      setInputValue('');
    }
  };

  const handleToggleMenu = () => {
    setIsOpen(!isOpen);
  };

  const handleCloseMenu = () => {
    setIsOpen(false);
  };

  const handleKeyDown = (e) => {
    if (e.keyCode === 13) {
      handleSendMessage();
    }
  };

  useEffect(() => {
    const initialMessage = {
      id: 1,
      text: "Bienvenue à toi jeune Padawan, un traducteur est appliqué pour faciliter les échanges intergalactiques. Et surtout, n'oublie pas de rester courtois !", 
      isUser: false, 
    };

    setMessages([initialMessage]);
  }, []);

  return (
    <>
      <div className='chatGlobal'>
        <div className="menuGeneral">
          <div className={`menu-icon ${isOpen ? 'open' : ''}`} onClick={handleToggleMenu}>
            {isOpen ? (
              <img src="../src/assets/img/x-red.png" alt="close icon" />
            ) : (
              <img src="../src/assets/img/chat-white.png" alt="chat icon" />
            )}
          </div>
        </div>
        {isOpen && <div onClick={handleCloseMenu}></div>}
        <div className={`chatbox ${isOpen ? 'open' : ''}`}>
          <div className="chat-container">
            <div className="message-container">
              <div className="messages">
                {messages.map((message) => (
                  <div
                    key={message.id}
                    className={`message ${message.isUser ? 'user-message' : 'other-message'}`}
                  >
                    {message.text}
                  </div>
                ))}
              </div>
            </div>
            <div className="input-container">
              <input
                type="text"
                value={inputValue}
                onChange={handleInputChange}
                onKeyDown={handleKeyDown}
                placeholder="Type your message..."
              />
              <button className='send' onClick={handleSendMessage}>Send</button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Chat;
