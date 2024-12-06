export default function RootLayout({ children }) {
  return (
    <html lang="fa" dir="rtl">
      <body>
        <main>{children}</main>
      </body>
    </html>
  );
}
