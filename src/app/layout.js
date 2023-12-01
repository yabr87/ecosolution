import './globals.css';

export const metadata = {
  title: 'EcoSolution',
  description: 'A renewable energy company for any task',
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
