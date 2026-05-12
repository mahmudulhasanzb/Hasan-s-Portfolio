// import profile from "@/assets/pp.jpg"
import bookBuddyImg from '@/assets/images/book-buddy.png';
import pixVaultImg from '@/assets/images/pix-vault.png';
import portfolioImg from '@/assets/images/portfolio.png';

export const siteConfig = {
  name: 'Mahmudul Hasan',
  role: 'MERN Stack Developer',
  tagline: 'Building MERN-stack products that feel inevitable.',
  bio1: "I'm a MERN stack developer from Sylhet, Bangladesh who loves turning ideas into polished, production-ready web applications. I work across the entire stack — from pixel-perfect UIs in Next.js to robust APIs in Node.js.",
  bio2: "What sets me apart? I automate workflows with n8n — a skill most devs don't have. I believe great software isn't just functional, it's inevitable: every interaction feels like it couldn't have been designed any other way.",
  journey:
    'My programming journey started with pure curiosity — I wanted to understand how the websites I used every day actually worked. I began with HTML and CSS, then progressively learned JavaScript, React, and eventually the MERN stack. Every project taught me something new, and shipping real products to real users became my biggest motivation.',
  workEnjoy:
    "I love building things that solve real problems — applications where the user experience feels so natural it's almost invisible. I enjoy the challenge of making complex backend logic feel effortless on the frontend. Full stack development gives me the freedom to own a product end to end, and that ownership is what drives me.",
  hobbies: [
    {
      icon: '📚',
      title: 'Reading',
      desc: 'Tech blogs, self-improvement books and anything about systems thinking.',
    },
    {
      icon: '🎮',
      title: 'Gaming',
      desc: 'Strategy and puzzle games — they sharpen problem-solving instincts.',
    },
    {
      icon: '🌐',
      title: 'Exploring Tech',
      desc: 'Always tinkering with new tools, frameworks and automation ideas.',
    },
    {
      icon: '🎵',
      title: 'Music',
      desc: 'Background lo-fi while coding is non-negotiable.',
    },
    {
      icon: '🏃',
      title: 'Walking & Sports',
      desc: 'Clearing my head with a good walk or friendly cricket match.',
    },
    {
      icon: '✍️',
      title: 'Writing',
      desc: 'Documenting learnings and writing about projects I build.',
    },
  ],
  location: 'Sylhet, Bangladesh',
  email: 'mahmudulhasankk9@gmail.com',
  phone: '+880 1756-324260',
  whatsapp: '+8801756324260',
  github: 'https://github.com/mahmudulhasanzb',
  linkedin: 'https://linkedin.com/in/mahmudulhasanzb',
  twitter: 'https://twitter.com/mahmudulhasanzb',
  facebook: 'https://facebook.com/mahmudulhasanzb',
  openToWork: true,
  photo: null, //'/images/profile.jpg',
  stats: [
    { value: '3', label: 'Projects Shipped' },
    { value: '10+', label: 'Technologies' },
    { value: '100%', label: 'Passion Driven' },
    { value: '∞', label: 'Curiosity' },
  ],
};

export const education = [
  {
    institution: 'Nabiganj Government College',
    degree: 'Higher Secondary Certificate (HSC)',
    field: 'Humanities',
    period: '2024 – 2025',
    result: 'GPA 2.42',
    status: 'completed',
  },
];

export const experience = []; // empty — show "seeking first role" card

export const projects = [
  {
    id: 'book-buddy',
    title: 'Book Buddy',
    tagline: 'A seamless digital library experience.',
    description:
      'Book Buddy digitizes the traditional library experience. Users can explore a vast collection of books, filter by categories, and borrow books digitally — eliminating the friction of physical library checkout entirely.',
    problem:
      'Traditional library systems are slow, opaque, and geographically limited. Borrowers have no visibility into availability, and the checkout process requires a physical visit, a form, and a librarian.',
    approach:
      'Built a full-stack web app with a clean browse/filter UX, a real-time borrowing state machine using MongoDB transactions, and a secure auth system via Better-Auth. Designed the borrow flow to be self-evident — zero learning curve.',
    result:
      'A fully functional digital library platform with book browsing, category filtering, user authentication, and a digital borrow/return system with due date tracking.',
    challenges:
      'The trickiest part was building an atomic borrow system — preventing two users from borrowing the same last copy simultaneously. I solved it with MongoDB transactions and an optimistic locking pattern on the book status field.',
    futurePlans:
      'Add real-time availability notifications via WebSockets, a recommendation engine based on borrow history, and a mobile app using React Native.',
    tech: [
      'Next.js 15',
      'React 19',
      'JavaScript',
      'Tailwind CSS 4',
      'HeroUI',
      'Better-Auth',
      'MongoDB',
    ],
    github: 'https://github.com/mahmudulhasanzb/A08-Book-Buddy.git',
    live: 'https://book-budy.vercel.app/',
    image: bookBuddyImg,
    color: '#3B82F6',
    colorDim: 'rgba(59,130,246,0.1)',
  },
  {
    id: 'pix-vault',
    title: 'Pix Vault',
    tagline: 'The missing prompt library for AI image generation.',
    description:
      'Pix Vault is a high-performance curation and inspiration platform for AI image generation. Instead of generating images itself, it serves as a curated vault where users find and save the perfect prompts for their creative projects.',
    problem:
      'AI image tools are powerful, but prompt discovery is broken. Great prompts are scattered across Discord servers, Reddit threads, and private notes — with no organized, searchable, curated home.',
    approach:
      'Built a curated prompt library with fast full-text search, tag-based filtering, and a personal collection system. Focused on performance and content quality over feature quantity.',
    result:
      'A clean, fast prompt discovery platform with search, tags, user collections, and a curated submission pipeline that keeps quality high.',
    challenges:
      'Designing a search system that felt instant even with thousands of prompts was the core challenge. I used MongoDB Atlas Search with debounced queries on the frontend to keep it snappy without hammering the database.',
    futurePlans:
      'Implement vector similarity search so users can find prompts by describing what they want in plain English. Also plan a browser extension for saving prompts from anywhere on the web.',
    tech: [
      'Next.js 15',
      'React 19',
      'JavaScript',
      'Tailwind CSS 4',
      'HeroUI',
      'Better-Auth',
      'MongoDB',
    ],
    github: 'https://github.com/mahmudulhasanzb/Pix-Vault.git',
    live: 'https://pix-vault-ai.vercel.app/',
    image: pixVaultImg,
    color: '#7C3AED',
    colorDim: 'rgba(124,58,237,0.1)',
  },
  {
    id: 'dev-portfolio',
    title: 'Dev Portfolio',
    tagline:
      'A high-performance personal portfolio with deep-space aesthetics.',
    description:
      'This very portfolio — built as a project in its own right. A production-grade Next.js site featuring glassmorphism UI, Framer Motion animations, MDX blog, and a full contact system.',
    problem:
      'Most developer portfolios look the same — generic templates with no personality. I wanted a portfolio that felt like a product, not a resume dump.',
    approach:
      'Designed the entire UI from scratch with a deep-space dark theme, electric-purple accent system, dot-grid backgrounds, and scroll-triggered animations. Every section was planned and iterated.',
    result:
      'A fast, accessible, fully responsive portfolio with 10 routes, MDX blog, case study pages, and a contact form — all built with Next.js App Router.',
    challenges:
      'Balancing visual richness with performance was tricky. CSS-based glows and dot grids were used instead of canvas/WebGL to keep load times fast. Getting the glassmorphism navbar to look right across browsers required multiple iterations.',
    futurePlans:
      'Add a dark/light mode toggle, an interactive terminal easter egg, and connect the contact form to Resend for real email delivery.',
    tech: [
      'Next.js 15',
      'React 19',
      'JavaScript',
      'Tailwind CSS 4',
      'Framer Motion',
      'MDX',
      'Vercel',
    ],
    github: 'https://github.com/mahmudulhasanzb',
    live: '/',
    image: portfolioImg,
    color: '#10B981',
    colorDim: 'rgba(16,185,129,0.1)',
  },
];

export const skillGroups = [
  {
    category: 'Frontend',
    color: '#3B82F6',
    skills: [
      'HTML5',
      'CSS3',
      'JavaScript',
      'React.js',
      'Next.js',
      'Tailwind CSS',
      'HeroUI',
      'Figma',
    ],
  },
  {
    category: 'Backend',
    color: '#10B981',
    skills: ['Node.js', 'Express.js', 'Better-Auth', 'REST APIs'],
  },
  { category: 'Database', color: '#8B5CF6', skills: ['MongoDB', 'Mongoose'] },
  {
    category: 'Tools & DevOps',
    color: '#F59E0B',
    skills: ['Git', 'GitHub', 'Docker', 'Vercel'],
  },
  { category: 'Automation', color: '#EF4444', skills: ['n8n'], rare: true },
];

export const journey = [
  {
    phase: 'Foundation',
    desc: 'Started with HTML, CSS and vanilla JavaScript. Built static sites and understood the web from first principles.',
    current: false,
  },
  {
    phase: 'React & Next.js',
    desc: 'Learned React, fell in love with the App Router. Went deep on component architecture and server components.',
    current: false,
  },
  {
    phase: 'MERN Stack',
    desc: 'Added Node.js, Express, and MongoDB. Built complete applications end-to-end for the first time — it changed everything.',
    current: false,
  },
  {
    phase: 'Production Mindset',
    desc: 'Learning Docker, Git workflows, CI/CD and deployment. Now thinking in systems, not just features.',
    current: true,
  },
];
