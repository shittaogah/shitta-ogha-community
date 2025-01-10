// pages/api/send-sms.js
import axios from 'axios';

export default async function handler(req, res) {
  if (req.method !== 'POST') {
    return res.status(405).json({ message: 'Method not allowed' });
  }

  const { message, phoneNumber } = req.body;
  
  // Validate inputs
  if (!message || !phoneNumber) {
    return res.status(400).json({ 
      success: false, 
      message: 'Message and phone number are required' 
    });
  }

  try {
    // Replace 'YOUR_API_TOKEN' with your actual SmartSMSSolutions API token
    const API_TOKEN = process.env.SMARTSMS_API_TOKEN;
    
    const response = await axios.post('https://smartsmssolutions.com/api/json.php', {
      token: API_TOKEN,
      to: phoneNumber,
      message: message,
      routing: 3, // Using the best available route
      type: 0, // Plain text message
      sender: 'Shitta-Ogha' // Replace with your sender ID
    });

    if (response.data.successful) {
      return res.status(200).json({ 
        success: true, 
        message: 'SMS sent successfully' 
      });
    } else {
      return res.status(400).json({ 
        success: false, 
        message: response.data.message || 'Failed to send SMS' 
      });
    }
  } catch (error) {
    console.error('SMS sending error:', error);
    return res.status(500).json({ 
      success: false, 
      message: 'Error sending SMS' 
    });
  }
}