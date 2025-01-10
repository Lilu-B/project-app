
// import React from 'react';  /* in tsconfig.json -->  "jsx": "react-jsx",    */
import { useEffect, useState } from 'react';
import { app, addMessage, fetchMessages, analytics } from '../firebase/firebase';

const App: React.FC = () => {
  const [messages, setMessages] = useState<{ id: string; text: string }[]>([]);
  const [newMessage, setNewMessage] = useState('');

  useEffect(() => {
    const loadMessages = async () => {
      const data = await fetchMessages(); // Получаем сообщения
      setMessages(data);
    };

    loadMessages();
  }, []);

  const handleAddMessage = async () => {
    if (newMessage.trim()) {
      try {
        await addMessage(newMessage);
        setNewMessage('');
        const data = await fetchMessages();
        setMessages(data);
      } catch (error) {
        console.error('Error adding message:', error);
      }
    }
  };

  return (
    <div>
      <h1>Messages from Firebase</h1>
      <ul>
        {messages.map(msg => (
          <li key={msg.id}>{msg.text}</li>
        ))}
      </ul>

      <input
        type="text"
        value={newMessage}
        onChange={e => setNewMessage(e.target.value)}
        placeholder="Enter a new message"
      />
      <button onClick={handleAddMessage}>Add Message</button>
    </div>
  );
};

export default App;
