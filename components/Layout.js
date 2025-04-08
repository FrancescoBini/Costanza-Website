import React from 'react';
import Header from './Header';
import Footer from './Footer';
import { useRouter } from 'next/router';

export default function Layout({ children }) {
  const router = useRouter();
  const isHomePage = router.pathname === '/';

  return (
    <div className="page-container">
      {!isHomePage && <Header />}
      {children}
      <Footer />
      <style jsx global>{`
        @media (max-width: 440px) {
          html, body {
            overflow-x: hidden;
            width: 100%;
            position: relative;
            margin: 0;
            padding: 0;
          }
        }
      `}</style>
      <style jsx>{`
        .page-container {
          display: flex;
          flex-direction: column;
          min-height: 100vh;
          background-image: url('/images/backgound veggies.jpeg');
          background-size: cover;
          background-position: center;
          background-repeat: no-repeat;
          position: relative;
        }

        .page-container::before {
          content: '';
          position: absolute;
          top: 0;
          left: 0;
          right: 0;
          bottom: 0;
          background-color: rgba(255, 255, 255, 0.85);
          z-index: 0;
        }

        .page-container > :global(*) {
          position: relative;
          z-index: 1;
        }

        @media (max-width: 440px) {
          .page-container {
            width: 100%;
            overflow-x: hidden;
            margin: 0;
            padding: 0;
          }
        }
      `}</style>
    </div>
  );
} 