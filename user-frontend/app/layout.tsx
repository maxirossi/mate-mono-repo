// frontend/app/layout.tsx
import React from 'react';

export const metadata = {
  title: 'User FrontEnd',
  description: 'User',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body>
        {children}
      </body>
    </html>
  );
}
