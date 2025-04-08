import React from 'react';

export default function Footer() {
  return (
    <footer className="footer">
      <div className="footer-content">
        <div className="footer-line"></div>
        <div className="footer-info">
          <p className="copyright">
            © 2025 Costanza Nasta — All Rights Reserved
            <span className="contact-icons">
              <a href="tel:+393420706109" className="icon-link" title="Chiama">
                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"></path>
                </svg>
              </a>
              <a href="mailto:costanzanasta.nutrizionista@gmail.com" className="icon-link" title="Invia Email">
                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"></path>
                  <polyline points="22,6 12,13 2,6"></polyline>
                </svg>
              </a>
            </span>
          </p>
        </div>
      </div>

      <style jsx>{`
        .footer {
          display: flex;
          flex-direction: column;
          align-items: center;
          padding: 1rem 0;
          margin-top: auto;
        }

        .footer-content {
          display: flex;
          flex-direction: column;
          align-items: center;
          width: 100%;
        }

        .footer-line {
          width: 400px;
          height: 1px;
          background-color: #333;
          margin-bottom: 1rem;
        }

        .footer-info {
          display: flex;
          align-items: center;
          justify-content: center;
        }

        .copyright {
          font-size: 0.875rem;
          color: #666;
          text-align: center;
          display: flex;
          align-items: center;
          gap: 1rem;
        }

        .contact-icons {
          display: flex;
          gap: 0.5rem;
          margin-left: 1rem;
        }

        .icon-link {
          color: #666;
          transition: color 0.3s ease;
          display: flex;
          align-items: center;
          justify-content: center;
          padding: 0.25rem;
          border-radius: 50%;
          background-color: rgba(255, 255, 255, 0.1);
        }

        .icon-link:hover {
          color: #4CAF50;
        }

        @media (max-width: 640px) {
          .copyright {
            flex-direction: column;
            gap: 0.5rem;
          }

          .contact-icons {
            margin-left: 0;
          }

          .footer-line {
            width: 300px;
          }
        }

        @media (max-width: 440px) {
          .footer {
            padding: 0.5rem 0;
            height: 50px;
          }

          .footer-content {
            height: 100%;
            justify-content: center;
          }

          .footer-line {
            width: 200px;
            margin-bottom: 0.5rem;
          }

          .copyright {
            flex-direction: row;
            font-size: 0.75rem;
            gap: 0.5rem;
            white-space: nowrap;
          }

          .contact-icons {
            margin-left: 0.5rem;
          }

          .icon-link svg {
            width: 14px;
            height: 14px;
          }
        }
      `}</style>
    </footer>
  );
} 