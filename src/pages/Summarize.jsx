import React, { useState, useRef } from 'react';

const Summarize = () => {
  const [messages, setMessages] = useState([]);
  const [input, setInput] = useState('');
  const [loading, setLoading] = useState(false);
  const [file, setFile] = useState(null);
  const chatEndRef = useRef(null);

  const handleSend = async () => {
    if (input.trim() === '') return;

    // Add user message
    const userMessage = { text: input, sender: 'user' };
    setMessages((prev) => [...prev, userMessage]);

    setLoading(true);
    try {
      // Call Flask API
      const response = await fetch('http://127.0.0.1:5000/api/summarize', {
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

  const handleFileChange = (e) => {
    setFile(e.target.files[0]);
  };

  return (
    <div className="min-h-screen bg-gray-100 flex flex-col items-center justify-center p-6">
      <div className="bg-white rounded-lg shadow-md w-full max-w-3xl p-6">
        <h1 className="text-2xl font-bold mb-4 text-center">AI AGENT FOR  <b>SUMMARIZE</b> TEXT</h1>

        <div className="h-96 overflow-y-auto bg-gray-50 p-4 mb-4">
          {messages.length === 0 && (
            <p className="text-gray-400 text-center">Start the conversation...</p>
          )}

          {messages.map((msg, index) => (
            <div
              key={index}
              className={`flex ${msg.sender === 'user' ? 'justify-end' : 'justify-start'} mb-3`}
            >
              <div
                className={`inline-block p-3 max-w-xs rounded-lg ${
                  msg.sender === 'user' ? 'bg-blue-500 text-white' : 'bg-gray-200 text-black'
                }`}
              >
                {msg.text}
              </div>
            </div>
          ))}

          {loading && (
            <div className="flex justify-start mb-3">
              <div className="inline-block p-3 max-w-xs rounded-lg bg-gray-300 text-black animate-pulse">
                Typing...
              </div>
            </div>
          )}

          <div ref={chatEndRef} />
        </div>

        <div className="flex items-center gap-3 mb-4">
          <input
            type="text"
            className="flex-1 bg-gray-200 text-black border rounded-lg p-3 focus:outline-none focus:ring-2 focus:ring-blue-500"
            placeholder="Type a message..."
            value={input}
            onChange={(e) => setInput(e.target.value)}
            onKeyDown={(e) => e.key === 'Enter' && handleSend()}
            disabled={loading}
          />
          <button
            className="bg-blue-500 text-white px-4 py-2 rounded-lg hover:bg-blue-600 transition-colors"
            onClick={handleSend}
            disabled={loading}
          >
            {loading ? 'Sending...' : 'Send'}
          </button>

          {/* Attach File Button */}
          <label htmlFor="file-input" className="cursor-pointer">
            <span className="bg-gray-300 p-3 rounded-lg text-black hover:bg-gray-400">
              📎 Attach File
            </span>
          </label>
          <input
            id="file-input"
            type="file"
            className="hidden"
            onChange={handleFileChange}
          />
        </div>
      </div>
    </div>
  );
};

export default Summarize;
