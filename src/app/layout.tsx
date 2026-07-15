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
      <body className="bg-[#0b0e11]">{children}</body>
    </html>
  );
}
