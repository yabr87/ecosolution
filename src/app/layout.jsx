import './styles/globals.css';

export const metadata = {
  title: 'EcoSolution',
  description: 'A renewable energy company for any task',
};

const RootLayout = ({ children }) => {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
};

export default RootLayout;
