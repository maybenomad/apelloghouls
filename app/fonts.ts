import localFont from 'next/font/local';
import { Barlow } from 'next/font/google';

const headhunter = localFont({
  src: '../public/Headhunter.ttf',
});

const barlow = Barlow({
  variable: '--font-barlow',
  subsets: ['latin'],
  weight: '600',
});

const barlowLight = Barlow({
  variable: '--font-barlow',
  subsets: ['latin'],
  weight: '400',
});

export default {
  headhunter,
  barlow,
  barlowLight,
};
