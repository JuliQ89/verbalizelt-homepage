import "./globals.css";

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="de">
      <head>
        <meta name="description" content="description" />
        <meta name="apple-mobile-web-app-title" content="Verbalizelt" />
        <title>Verbalizelt</title>
      </head>
      <body>{children}</body>
    </html>
  );
}
