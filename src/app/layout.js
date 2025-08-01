import './globals.css';
import { Geist, Geist_Mono } from 'next/font/google';
import ClientLayout from './ClientLayout'; // ⬅️ NEW

const geistSans = Geist({ variable: '--font-geist-sans', subsets: ['latin'] });
const geistMono = Geist_Mono({ variable: '--font-geist-mono', subsets: ['latin'] });

export const metadata = {
  title: 'Mritunjay Chaudhary | Full Stack Developer',
  description:
    'Portfolio of Mritunjay Chaudhary — Full Stack Developer with expertise in React, Node.js, Express, and PostgreSQL.',
 
 
};
export default function RootLayout({ children }) {
  return (
    <html lang="en">
     
      <body
        suppressHydrationWarning
      className={`${geistSans.variable} ${geistMono.variable} antialiased`}>
        <ClientLayout>{children}</ClientLayout>
      </body>
    </html>
  );
}
