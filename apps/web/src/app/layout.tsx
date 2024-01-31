import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Navbarr from "../components/navbar/Navbarr";
import Providers from "./Providers";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Create Next App",
  description: "Generated by create next app",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className='max-w-[1440px] mx-auto'>
        <div>
        

          <div className=''>
            <div className= 'sticky top-0  md:bg-white bg-grey-800 '>
              <Navbarr/>
            </div>
          </div>
        </div>
        <div className='md:pl-[256px]'>
          <div className='md:px-8'>
            <Providers>
              <div className='px-3 md:px-0 pb-24'>
                {children}
              </div>
            </Providers>
          </div>
        </div>
      </body>
    </html>
  );
}
