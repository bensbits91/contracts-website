import Head from 'next/head';
import { Geist, Geist_Mono } from 'next/font/google';
import { ResponsiveNav } from '@/app/components/nav';
import { Footer } from '@/app/components/footer';
import './globals.css';

const geistSans = Geist({
   variable: '--font-geist-sans',
   subsets: ['latin']
});

const geistMono = Geist_Mono({
   variable: '--font-geist-mono',
   subsets: ['latin']
});

export const metadata = {
   title: 'Bennett Brooks Consulting',
   description: 'Public website for Bennett Brooks Consulting'
};

export default function RootLayout({ children }) {
   return (
      <html lang='en'>
         <Head>
            <link rel='icon' type='image/svg+xml' href='/icon.svg' sizes='any' />
         </Head>
         <body className={`${geistSans.variable} ${geistMono.variable} theme-storm`}>
            <ResponsiveNav />
            <main>{children}</main>
            <Footer />
         </body>
      </html>
   );
}
