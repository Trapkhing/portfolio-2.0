# Modern Portfolio Website

A clean, responsive portfolio website built with React and styled with a combination of Tailwind CSS and custom CSS variables. Features dark mode, smooth animations, a blog powered by Sanity CMS, and a contact form that sends messages directly to Telegram.

## 📋 Features

- Responsive design that works on all devices
- Dark/Light mode toggle
- Project showcase with filterable categories
- Blog section powered by Sanity CMS
- Recent posts carousel on homepage
- Skills section with visual representation
- Contact form connected to Telegram
- SEO optimized with React Helmet

## 🚀 Quick Start

### Prerequisites

- Node.js (v14 or later)
- npm or yarn
- Sanity account (for blog functionality)

### Installation

1. Clone the repository
   ```
   git clone https://github.com/Trapkhing/portfolio-2.0.git
   cd portfolio-2.0
   ```

2. Install dependencies
   ```
   npm install
   ```

3. Set up environment variables
   - Copy `.env.example` to `.env`
   ```
   cp .env.example .env
   ```
   - Edit `.env` with your own values (see setup sections below)

4. Start the development server
   ```
   npm run dev
   ```

## 🤖 Telegram Contact Form Setup

To receive contact form submissions in Telegram:

1. Create a Telegram bot via BotFather (@BotFather in Telegram)
2. Get your bot token and chat ID (see TELEGRAM_SETUP.md for detailed instructions)
3. Add these to your `.env` file:
   ```
   VITE_TELEGRAM_BOT_TOKEN=your_bot_token
   VITE_TELEGRAM_CHAT_ID=your_chat_id
   ```

## 📝 Sanity CMS Setup

To use the blog functionality:

1. Create a Sanity account at [sanity.io](https://www.sanity.io/)
2. Create a new project
3. Install Sanity CLI: `npm install -g @sanity/cli`
4. Initialize Sanity in the sanity directory: `cd sanity && sanity init`
5. Deploy the Sanity Studio: `sanity deploy`
6. Add your Sanity project ID and dataset to your `.env` file:
   ```
   VITE_SANITY_PROJECT_ID=your_project_id
   VITE_SANITY_DATASET=production
   ```

## 🎨 Customization

### Content

Edit the data in the following files to customize your portfolio:

- `src/pages/HomeSection.jsx` - Hero section content
- `src/pages/AboutSection.jsx` - About me and skills
- `src/pages/ProjectsSection.jsx` - Project showcase
- `src/pages/ContactSection.jsx` - Contact information
- `src/pages/RecentPostsSection.jsx` - Blog posts carousel

### Styling

- Main color scheme: Edit CSS variables in `src/index.css`
- Component-specific styling: Each component has its own styles

## 📦 Deployment

### Vercel (Recommended)

1. Push your code to GitHub
2. Import your repository in Vercel
3. Add environment variables in Vercel project settings
4. Deploy!

### Netlify

1. Push your code to GitHub
2. Import your repository in Netlify
3. Add environment variables in Netlify site settings
4. Deploy!

## 📄 License

This project is open source and available under the [MIT License](LICENSE).

## 🙏 Acknowledgments

- Icons: [React Icons](https://react-icons.github.io/react-icons/)
- Font: [Inter](https://fonts.google.com/specimen/Inter)
- Original design inspiration: [Evans](https://github.com/Trapkhing)
