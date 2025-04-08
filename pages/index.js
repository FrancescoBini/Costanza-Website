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
        
        <nav className="navigation home-navigation">
          <Link href="/chi-sono" className="nav-link">Chi sono</Link>
          <Link href="/servizi" className="nav-link">Servizi</Link>
          <Link href="/contatti" className="nav-link">Contatti</Link>
        </nav>
      </div>

      <Footer />

      <style jsx global>{`
        @media (max-width: 440px) {
          .nav-link {
            font-size: 1.75rem !important;
            color: #333 !important;
            text-decoration: none !important;
            transition: color 0.3s ease !important;
            font-weight: 600 !important;
            letter-spacing: 0.02em !important;
            font-family: 'Poppins', sans-serif !important;
          }
        }

        @media (min-width: 441px) {
          .nav-link {
            font-size: 3rem !important;
            color: #333 !important;
            text-decoration: none !important;
            transition: color 0.3s ease !important;
            font-weight: 600 !important;
            letter-spacing: 0.02em !important;
            font-family: 'Poppins', sans-serif !important;
          }
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
          height: 100vh;
          background-image: url('/images/backgound veggies.jpeg');
          background-size: cover;
          background-position: center;
          background-repeat: no-repeat;
          position: relative;
          overflow: hidden;
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
          justify-content: space-between;
          padding: 2rem;
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

        @media (max-width: 440px) {
          .home-container {
            height: 100vh;
            padding: 0;
          }

          .main-content {
            padding: 1.5rem 0;
            height: calc(100vh - 50px);
            display: grid;
            grid-template-rows: auto 1fr auto;
            gap: 0;
          }

          .logo-container {
            margin: 0;
            transform: scale(0.65);
            flex-shrink: 0;
          }

          .navigation {
            gap: 1.2rem;
            margin: 0;
            padding: 0;
            align-self: center;
            justify-self: center;
          }

          :global(.footer) {
            height: 50px;
            display: flex;
            align-items: center;
            justify-content: center;
            background: transparent;
            margin: 0;
            padding: 0;
            position: fixed;
            bottom: 0;
            left: 0;
            right: 0;
          }
        }
      `}</style>
    </div>
  )
}