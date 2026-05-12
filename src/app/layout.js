import './globals.css';
import Navbar from '@/components/layout/Navbar';
import Footer from '@/components/layout/Footer';

export const metadata = {
  title: {
    default: 'Mahmudul Hasan — MERN Stack Developer',
    template: '%s | Mahmudul Hasan',
  },
  description:
    'MERN Stack Developer building modern web applications with Next.js, React, Node.js and MongoDB. Based in Sylhet, Bangladesh.',
  keywords: [
    'MERN Stack Developer',
    'Next.js',
    'React',
    'Node.js',
    'MongoDB',
    'Bangladesh',
  ],
  authors: [{ name: 'Mahmudul Hasan' }],
  openGraph: {
    type: 'website',
    title: 'Mahmudul Hasan — MERN Stack Developer',
    description: 'MERN Stack Developer building modern web applications.',
  },
  robots: { index: true, follow: true },
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
        <Navbar />
        <main style={{ position: 'relative', zIndex: 1 }}>{children}</main>
        <Footer />
      </body>
    </html>
  );
}
