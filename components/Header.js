import React from 'react';
import Link from 'next/link';
import { useRouter } from 'next/router';

export default function Header() {
  const router = useRouter();
  
  return (
    <header className="header">
      <div className="header-content">
        <nav className="nav-links">
          <Link href="/" className={router.pathname === "/" ? "active" : ""}>
            Home
          </Link>
          <Link href="/chi-sono" className={router.pathname === "/chi-sono" ? "active" : ""}>
            Chi Sono
          </Link>
          <Link href="/servizi" className={router.pathname === "/servizi" ? "active" : ""}>
            Servizi
          </Link>
          <Link href="/contatti" className={router.pathname === "/contatti" ? "active" : ""}>
            Contatti
          </Link>
        </nav>
        <div className="header-line"></div>
      </div>

      <style jsx>{`
        .header {
          display: flex;
          flex-direction: column;
          align-items: center;
          padding: 1rem 0;
        }

        .header-content {
          display: flex;
          flex-direction: column;
          align-items: center;
          width: 100%;
        }

        .nav-links {
          display: flex;
          gap: 2rem;
          margin-bottom: 1rem;
        }

        .nav-links a {
          color: #666;
          text-decoration: none;
          font-size: 0.95rem;
          transition: color 0.3s ease;
        }

        .nav-links a:hover {
          color: #4CAF50;
        }

        .nav-links a.active {
          color: #4CAF50;
          font-weight: 500;
        }

        .header-line {
          width: 400px;
          height: 1px;
          background-color: #333;
        }

        @media (max-width: 640px) {
          .nav-links {
            gap: 1rem;
            flex-wrap: wrap;
            justify-content: center;
          }

          .header-line {
            width: 300px;
          }
        }
      `}</style>
    </header>
  );
} 