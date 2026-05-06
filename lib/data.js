export const siteConfig = {
  name: 'Mahmudul Hasan',
  role: 'MERN Stack Developer',
  tagline: 'Building MERN Stack products that feel inevitable.',
  bio1: "I'm a MERN stack developer from Sylhet, Bangladesh who loves turning ideas into polished, production-ready web applications. I work across the entire stack — from pixel-perfect UIs in Next.js to robust APIs in Node.js.",
  bio2: "What sets me apart? I automate workflows with n8n — a skill most devs don't have. I believe great software isn't just functional, it's inevitable: every interaction feels like it couldn't have been designed any other way.",
  location: 'Sylhet, Bangladesh',
  email: 'mahmudulhasankk9@gmail.com',
  github: 'https://github.com/mahmudulhasanzb',
  linkedin: 'https://linkedin.com/in/mahmudulhasanzb',
  openToWork: true,
  stats: [
    { value: '2', label: 'Projects Shipped' },
    { value: '10+', label: 'Technologies' },
    { value: '100%', label: 'Passion Driven' },
    { value: '∞', label: 'Curiosity' },
  ],
};

export const projects = [
  {
    slug: 'book-buddy',
    title: 'Book Buddy',
    tagline: 'A seamless digital library experience.',
    description:
      'Book Buddy digitizes the traditional library experience. Users can explore a vast collection of books, filter by categories, and borrow books digitally — eliminating the friction of physical library checkout entirely.',
    problem:
      'Traditional library systems are slow, opaque, and geographically limited. Borrowers have no visibility into availability, and the checkout process requires a physical visit, a form, and a librarian.',
    approach:
      'Built a MERN-stack web app with a clean browse/filter UX, a real-time borrowing state machine using MongoDB transactions, and a secure auth system via Better-Auth. Designed the borrow flow to be self-evident — zero learning curve.',
    result:
      'A fully functional digital library platform with book browsing, category filtering, user authentication, and a digital borrow/return system with due date tracking.',
    retrospective:
      "I'd add real-time availability notifications via WebSockets and a recommendation engine based on borrow history — two features that would make it genuinely compete with existing library apps.",
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
    color: '#3B82F6',
    colorDim: 'rgba(59,130,246,0.1)',
  },
  {
    slug: 'pix-vault',
    title: 'Pix Vault',
    tagline: 'The missing prompt library for AI image generation.',
    description:
      'Pix Vault is a high-performance curation and inspiration platform for AI image generation. Instead of generating images itself, it serves as a curated vault where users find and save the perfect prompts for their creative projects.',
    problem:
      'AI image tools are powerful, but prompt discovery is broken. Great prompts are scattered across Discord servers, Reddit threads, and private notes — with no organized, searchable, curated home.',
    approach:
      'Built a curated prompt library with fast full-text search, tag-based filtering, and a personal collection system. Focused on performance and content quality over feature quantity. MongoDB Atlas Search powers the instant search.',
    result:
      'A clean, fast prompt discovery platform with search, tags, user collections, and a curated submission pipeline that keeps quality high.',
    retrospective:
      "I'd implement vector similarity search so users can find prompts by describing what they want in plain English — making the discovery experience feel truly intelligent.",
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
    color: '#7C3AED',
    colorDim: 'rgba(124,58,237,0.1)',
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
