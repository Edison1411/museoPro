import React from 'react';
import Navbar from './common/navBar';
import Footer from './common/footer';

interface LayoutProps {
  children: React.ReactNode;
}

const layout: React.FC<LayoutProps> = ({ children }) => {
  return (
    <div className="flex flex-col min-h-screen">
      <Navbar />
      <main className="flex-grow">{children}</main>
      <Footer />
    </div>
  );
};

export default layout;