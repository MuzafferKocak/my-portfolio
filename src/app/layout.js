import "./globals.css"
export const metadata = {
  title: "My Portfolio",
  description: "Portfolio website",
};

export default function RootLayout({ children }) {
  
  return (
    <html>
      <head>
        <link rel="icon" href="/favicon.ico" />
      </head>
      <body>{children}</body>
    </html>
  );
}
