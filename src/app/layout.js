import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import { ThemeProvider } from 'next-themes'


const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata = {
  title: "Elixir",
  icons: {
    icon: [
      { url: '/assets/img/e-logo.png', sizes: '32x32' },
      { url: '/assets/img/e-logo.png', sizes: '180x180', type: 'image/png', rel: 'apple-touch-icon' }
    ]
  }
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        <ThemeProvider attribute="class">
          {children}
        </ThemeProvider> 
        {/* {children} */}
      </body>
    </html>
  );
}
