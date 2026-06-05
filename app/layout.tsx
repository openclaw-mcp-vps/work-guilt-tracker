import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "WorkGuilt Tracker — Anonymous Productivity for Remote Devs",
  description: "Private dashboard tracking actual coding time vs reported hours with guilt-free analytics. No judgment, just insights."
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <head>
        <script defer src="https://umami.microtool.dev/script.js" data-website-id="bb20b955-2f31-44a1-b02b-44eb350576f8"></script>
      </head>
      <body className="bg-[#0d1117] text-[#c9d1d9] min-h-screen font-mono">
        {children}
      </body>
    </html>
  );
}
