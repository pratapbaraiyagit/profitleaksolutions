import "./globals.css";

export const metadata = {
  title: "Profit Leak Solutions | Business Profit Optimization & Operational Analysis",
  description: "Take Control and Stop Losing Money You Already Earned! Request a Business Health Diagnostic today.",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
        {children}
      </body>
    </html>
  );
}
