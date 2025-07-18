# Setting Up Telegram Bot for Contact Form

This document explains how to set up a Telegram bot to receive contact form submissions directly to your Telegram account.

## Step 1: Create a Telegram Bot

1. Open Telegram and search for "BotFather" (@BotFather)
2. Start a chat with BotFather and send the command `/newbot`
3. Follow the instructions to name your bot
4. Once created, BotFather will provide you with a bot token. It looks like this: `123456789:ABCdefGhIJKlmNoPQRsTUVwxyZ`
5. Save this token - you'll need it later

## Step 2: Get Your Chat ID

1. Start a chat with your new bot
2. Send a message to your bot
3. Open this URL in your browser (replace YOUR_BOT_TOKEN with the token from step 1):
   ```
   https://api.telegram.org/botYOUR_BOT_TOKEN/getUpdates
   ```
4. Look for the "chat" object in the response and find the "id" field. This is your chat ID.
5. Save this chat ID - you'll need it later

## Step 3: Update Environment Variables

1. Open the `.env` file in the root of your project
2. Replace the values with your actual bot token and chat ID:

```
VITE_TELEGRAM_BOT_TOKEN=123456789:ABCdefGhIJKlmNoPQRsTUVwxyZ
VITE_TELEGRAM_CHAT_ID=987654321
```

**Important:** Never commit your `.env` file to version control. It's already added to `.gitignore`.

## Step 4: Test the Form

1. Start your development server
2. Fill out the contact form and submit
3. You should receive the message in your Telegram chat

## Security Notes

- The bot token is now stored in environment variables for better security
- For production deployment:
  - Netlify: Add environment variables in Site settings > Build & deploy > Environment (use VITE_ prefix)
  - Vercel: Add environment variables in Project settings > Environment Variables (use VITE_ prefix)
  - GitHub Pages: Use a serverless function since GitHub Pages doesn't support environment variables
- Consider implementing rate limiting to prevent spam
- You may want to add CAPTCHA to your form for additional security