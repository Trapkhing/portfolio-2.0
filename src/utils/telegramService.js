/**
 * Sends a message to a Telegram chat via a bot
 * @param {string} message - The message to send
 * @returns {Promise} - The fetch promise
 */
export const sendToTelegram = async (message) => {
  // Use environment variables
  const BOT_TOKEN = process.env.REACT_APP_TELEGRAM_BOT_TOKEN;
  const CHAT_ID = process.env.REACT_APP_TELEGRAM_CHAT_ID;
  
  if (!BOT_TOKEN || !CHAT_ID) {
    throw new Error('Telegram bot token or chat ID not configured');
  }
  
  const url = `https://api.telegram.org/bot${BOT_TOKEN}/sendMessage`;
  
  try {
    const response = await fetch(url, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        chat_id: CHAT_ID,
        text: message,
        parse_mode: 'HTML'
      }),
    });
    
    const data = await response.json();
    return data;
  } catch (error) {
    console.error('Error sending message to Telegram:', error);
    throw error;
  }
};