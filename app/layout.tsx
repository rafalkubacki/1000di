import './globals.css';

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="scroll-smooth focus:scroll-auto">
      <body className="text-pretty bg-stone-900 text-stone-100">{children}</body>
    </html>
  );
}
