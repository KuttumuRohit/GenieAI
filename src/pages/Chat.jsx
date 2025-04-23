import React, { useState } from 'react';

const Chat = () => {
  const [messages, setMessages] = useState([]);
  const [input, setInput] = useState('');
  const [loading, setLoading] = useState(false);

  const handleSend = async () => {
    if (input.trim() === '') return;
  
    // Add user message
    const userMessage = { text: input, sender: 'user' };
    setMessages((prev) => [...prev, userMessage]);
  
    setLoading(true);
    try {
      // Call Flask API
      const response = await fetch('http://127.0.0.1:5000/api/script', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ message: input }),
      });
  
      const data = await response.json();
  
      // Add assistant response
      const botMessage = { text: data.script, sender: 'assistant' };
      setMessages((prev) => [...prev, botMessage]);
    } catch (error) {
      console.error('Error:', error);
      setMessages((prev) => [
        ...prev,
        { text: 'Failed to fetch response.', sender: 'assistant' },
      ]);
    } finally {
      setInput('');
      setLoading(false);
    }
  };
  

  return (
    <div className="min-h-screen bg-gray-100 flex flex-col items-center justify-center p-4">
      <div className="bg-white rounded-lg shadow-md w-full max-w-xl p-6">
        <h1 className="text-2xl font-bold mb-4">AI Script Writer</h1>

        <div className="h-64 overflow-y-auto border rounded p-3 mb-4 bg-gray-50">
          {messages.length === 0 && (
            <p className="text-gray-400">No messages yet...</p>
          )}
          {messages.map((msg, index) => (
            <div key={index} className="mb-2">
              <span
                className={`font-semibold ${
                  msg.sender === 'user' ? 'text-blue-600' : 'text-green-600'
                }`}
              >
                {msg.sender}:
              </span>{' '}
              {msg.text}
            </div>
          ))}
        </div>

        <div className="flex gap-2">
          <input
            type="text"
            className="flex-1 border rounded p-2"
            placeholder="Type a message..."
            value={input}
            onChange={(e) => setInput(e.target.value)}
            onKeyDown={(e) => e.key === 'Enter' && handleSend()}
            disabled={loading}
          />
          <button
            className="bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700"
            onClick={handleSend}
            disabled={loading}
          >
            {loading ? 'Sending...' : 'Send'}
          </button>
        </div>
      </div>
    </div>  
  );
};

export default Chat;
