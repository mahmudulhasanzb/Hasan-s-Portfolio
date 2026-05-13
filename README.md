# Mahmudul Hasan's Portfolio

A modern, high-performance portfolio website built with Next.js, React, and Tailwind CSS. This project showcases my work, blog posts, and professional journey.

## 🚀 Tech Stack

- **Framework:** [Next.js 15](https://nextjs.org/) (App Router)
- **Library:** [React 19](https://react.dev/)
- **Styling:** [Tailwind CSS v4](https://tailwindcss.com/)
- **Animations:** [Framer Motion](https://www.framer.com/motion/)
- **Icons:** [React Icons](https://react-icons.github.io/react-icons/)
- **Content Management:** [next-mdx-remote](https://github.com/hashicorp/next-mdx-remote) & [gray-matter](https://github.com/jonschlinkert/gray-matter)
- **Deployment:** [Vercel](https://vercel.com/)

## 📂 Project Structure

```text
mahmudul-portfolio-v3/
├── content/              # MDX files for blog posts
│   └── blog/             # Individual blog post files (.mdx)
├── public/               # Static assets (PDFs, SVGs)
├── src/                  # Main source code
│   ├── app/              # Next.js App Router
│   │   ├── blog/         # Blog listing and dynamic post pages
│   │   ├── contact/      # Contact page
│   │   ├── projects/     # Projects page
│   │   ├── globals.css   # Global styles (Tailwind v4)
│   │   ├── layout.js     # Root layout component
│   │   └── page.js       # Homepage (Main Sections)
│   ├── assets/           # Local assets (images, etc.)
│   ├── components/       # UI Components
│   │   ├── layout/       # Shared layout components (Navbar, Footer)
│   │   ├── sections/     # Page-specific sections
│   │   └── ui/           # Generic UI components
│   └── lib/              # Utility functions and data fetchers
│       ├── blog.js       # MDX processing logic
│       └── data.js       # Static data/constants
├── next.config.mjs       # Next.js configuration
├── package.json          # Dependencies and scripts
└── ...                   # Other config files (ESLint, Prettier, JSConfig)
```

## 🛠️ Features

- **Responsive Design:** Optimized for all screen sizes (Mobile, Tablet, Desktop).
- **Dark/Light Mode:** Seamless theme switching.
- **Dynamic Blog:** Built with MDX for flexible content creation.
- **Micro-interactions:** Smooth animations using Framer Motion.
- **SEO Optimized:** Meta tags and structured data for better search visibility.

## 🏁 Getting Started

### 1. Clone the repository

```bash
git clone https://github.com/mahmudulhasanzb/Hasan-s-Portfolio.git
cd mahmudul-portfolio-v3
```

### 2. Install dependencies

```bash
npm install
```

### 3. Run the development server

```bash
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

## 📜 License

This project is licensed under the MIT License.
