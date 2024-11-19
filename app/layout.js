import localFont from "next/font/local";
import "./globals.css";
import { Poppins } from 'next/font/google'

export const metadata = {
  title: "Create Next App",
  description: "Generated by create next app",
};

export const poppins = Poppins({
  weight:['100','200','300','400','500','600','700','800','900'],
  subsets:['latin']
})

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body
        className={`${poppins.className}`}
      >
        {children}
      </body>
    </html>
  );
}
