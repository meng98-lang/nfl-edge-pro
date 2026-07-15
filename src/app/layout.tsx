import './globals.css';
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'NFL EDGE PRO',
  description: 'High-fidelity NFL betting UI prototype',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <head>
        <style>{`
          body { background-color: #0b0e11 !important; color: white !important; }
        `}</style>
      </head>
      <body className="bg-[#0b0e11] text-white">{children}</body>
    </html>
  );
}
