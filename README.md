# Akshay Kakatkar Portfolio

A modern, responsive portfolio website built with Next.js, Tailwind CSS, and ShadCN.

## Features

- **Modern Design**: Clean, professional design with smooth animations and transitions
- **Responsive Layout**: Optimized for all device sizes
- **Dark/Light Mode**: Theme toggle with system preference detection
- **Component-Based Structure**: Organized and maintainable code architecture
- **Performance Optimized**: Fast loading times and smooth interactions
- **SEO Friendly**: Semantic HTML and proper metadata
- **Working Contact Form**: Email functionality using Resend

## Tech Stack

- **Framework**: [Next.js](https://nextjs.org/)
- **Styling**: [Tailwind CSS](https://tailwindcss.com/)
- **UI Components**: [ShadCN](https://ui.shadcn.com/)
- **Animations**: [Framer Motion](https://www.framer.com/motion/)
- **Icons**: [Lucide React](https://lucide.dev/)
- **Email Service**: [Resend](https://resend.com)
- **Theme Support**: [next-themes](https://github.com/pacocoursey/next-themes)

## Getting Started

### Prerequisites

- Node.js 18+ and npm/pnpm/yarn

### Installation

1. Clone the repository

   ```bash
   git clone https://github.com/yourusername/portfolio.git
   cd portfolio
   ```

2. Install dependencies

   ```bash
   pnpm install
   # or
   npm install
   ```

3. Run the development server

   ```bash
   pnpm dev
   # or
   npm run dev
   ```

4. Open [http://localhost:3000](http://localhost:3000) in your browser

### Set up Email Functionality

1. Sign up for a free [Resend](https://resend.com) account
2. Create an API key in the Resend dashboard
3. Copy the `.env.local.example` file to `.env.local`
   ```bash
   cp .env.local.example .env.local
   ```
4. Update the `RESEND_API_KEY` value in `.env.local` with your Resend API key
5. Optional: Update the recipient email in `src/app/api/send-email/route.ts`

## Project Structure

```
/
├── public/              # Static assets
├── src/
│   ├── app/             # Next.js App Router
│   │   ├── layout.tsx   # Root layout
│   │   ├── page.tsx     # Home page
│   │   └── ...          # Other pages
│   ├── components/      # React components
│   │   ├── ui/          # UI components
│   │   ├── sections/    # Page sections
│   │   └── ...          # Other components
│   ├── lib/             # Utility functions
│   └── styles/          # Global styles
├── tailwind.config.js   # Tailwind configuration
└── ...                  # Config files
```

## Customization

- **Colors**: Edit theme colors in `tailwind.config.js` and `src/styles/globals.css`
- **Content**: Update personal information in section components under `src/components/sections/`
- **Styling**: Modify component styling using Tailwind classes

## Deployment

The site can be deployed on any platform that supports Next.js, such as:

- [Vercel](https://vercel.com/) (recommended)
- [Netlify](https://www.netlify.com/)
- [AWS Amplify](https://aws.amazon.com/amplify/)

## License

MIT
