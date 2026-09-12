import "./globals.css";

export const metadata = {
  title: "Profit Leak Solutions | Business Profit Optimization & Operational Analysis",
  description: "Take Control and Stop Losing Money You Already Earned! Request a Business Health Diagnostic today.",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
        <div style={{ overflowX: 'clip', width: '100%', maxWidth: '100vw', position: 'relative', contain: 'paint' }}>
          {children}
        </div>
      </body>
    </html>
  );
}
