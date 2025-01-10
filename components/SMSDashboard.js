import React, { useState } from 'react';

const SMSDashboard = () => {
  const [message, setMessage] = useState('');
  const [phoneNumber, setPhoneNumber] = useState('');
  const [status, setStatus] = useState('');

  const sendMessage = async () => {
    try {
      setStatus('Sending...');
      const response = await fetch('/api/send-sms', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          message,
          phoneNumber,
        }),
      });

      const data = await response.json();
      setStatus(data.success ? 'Message sent!' : 'Failed to send message');
    } catch (error) {
      setStatus('Error sending message');
    }
  };

  return (
    <div className="p-4 max-w-lg mx-auto">
      <h1 className="text-2xl font-bold mb-4">Shitta-Ogha Community SMS</h1>
      
      <div className="space-y-4">
        <div>
          <label className="block mb-2">Phone Number:</label>
          <input
            type="tel"
            value={phoneNumber}
            onChange={(e) => setPhoneNumber(e.target.value)}
            className="w-full p-2 border rounded"
            placeholder="Enter phone number"
          />
        </div>

        <div>
          <label className="block mb-2">Message:</label>
          <textarea
            value={message}
            onChange={(e) => setMessage(e.target.value)}
            className="w-full p-2 border rounded"
            rows="4"
            placeholder="Type your message"
          />
        </div>

        <button
          onClick={sendMessage}
          className="w-full bg-blue-500 text-white p-2 rounded hover:bg-blue-600"
        >
          Send Message
        </button>

        {status && (
          <div className="mt-4 p-2 bg-gray-100 rounded">
            Status: {status}
          </div>
        )}
      </div>
    </div>
  );
};

export default SMSDashboard;