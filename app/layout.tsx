import './globals.css';

export const metadata = {
  title: 'Sales Dashboard',
  description: 'Atomic sales dashboard demo'
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
