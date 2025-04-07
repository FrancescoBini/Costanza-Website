import Image from 'next/image'
import Link from 'next/link'
import Footer from '../components/Footer'

export default function HomePage() {
  return (
    <div className="home-container">
      <div className="main-content">
        <div className="logo-container">
          <Image 
            src="/images/transparent_1744017677_1781.svg"
            alt="Dott.ssa Costanza Nasta Logo"
            width={500}
            height={250}
            priority
          />
        </div>
        
        <nav className="navigation">
          <Link href="/chi-sono" className="nav-link">Chi sono</Link>
          <Link href="/servizi" className="nav-link">Servizi</Link>
          <Link href="/contatti" className="nav-link">Contatti</Link>
        </nav>
      </div>

      <Footer />

      <style jsx global>{`
        .nav-link {
          font-size: 3rem !important;
          color: #333 !important;
          text-decoration: none !important;
          transition: color 0.3s ease !important;
          font-weight: 600 !important;
          letter-spacing: 0.02em !important;
        }

        .nav-link:hover {
          color: #4CAF50 !important;
        }
      `}</style>

      <style jsx>{`
        .home-container {
          display: flex;
          flex-direction: column;
          min-height: 100vh;
          background-image: url('/images/backgound veggies.jpeg');
          background-size: cover;
          background-position: center;
          background-repeat: no-repeat;
          position: relative;
        }

        .home-container::before {
          content: '';
          position: absolute;
          top: 0;
          left: 0;
          right: 0;
          bottom: 0;
          background-color: rgba(255, 255, 255, 0.85);
          z-index: 0;
        }

        .main-content {
          flex: 1;
          display: flex;
          flex-direction: column;
          align-items: center;
          justify-content: flex-start;
          padding: 4rem 2rem;
          position: relative;
          z-index: 1;
        }

        .logo-container {
          margin-bottom: 5rem;
          margin-top: -2rem;
        }

        .navigation {
          display: flex;
          flex-direction: column;
          align-items: center;
          gap: 2.5rem;
          margin-bottom: 4rem;
        }

        :global(.footer) {
          position: relative;
          z-index: 1;
        }
      `}</style>
    </div>
  )
}