import Head from 'next/head';
import { Nunito, Roboto } from 'next/font/google';
import { ResponsiveNav } from '@/app/components/nav';
import { Footer } from '@/app/components/footer';
import './globals.css';

const nunitoSans = Nunito({
   variable: '--font-nunito-sans',
   subsets: ['latin']
});

const robotoSans = Roboto({
   variable: '--font-roboto-sans',
   subsets: ['latin']
});

export const metadata = {
   title: 'Ben Brooks Dev',
   description:
      'Ben Brooks Dev is a personal portfolio site for Ben Brooks, a full-stack web developer.'
};

export default function RootLayout({ children }) {
   return (
      <html lang='en'>
         <Head>
            <link rel='icon' type='image/svg+xml' href='/icon.svg' sizes='any' />
         </Head>
         <body className={`${nunitoSans.variable} ${robotoSans.variable} theme-storm`}>
            <ResponsiveNav />
            <main>{children}</main>
            {/* <Footer /> */}
         </body>
      </html>
   );
}
