import Image from 'next/image'
import Link from 'next/link'
import Layout from '../components/Layout'

export default function Servizi() {
  return (
    <Layout>
      <main>
        <div className="servizi-container">
          <div className="content-wrapper">
            <div className="left-section">
              <div className="section-content">
                <h2>PRIMA VISITA</h2>
                <p>
                  La prima visita è un momento fondamentale per conoscerci e iniziare
                  insieme il tuo percorso verso il benessere. Durante questo incontro, della durata di
                  circa un'ora, raccoglierò informazioni dettagliate sulle tue abitudini alimentari, il tuo
                  stile di vita, eventuali patologie e la tua storia clinica.
                </p>
                <p>
                  Effettuerò inoltre misurazioni antropometriche (peso, altezza, circonferenze, plicometria) 
                  per avere un quadro completo della tua situazione. L'obiettivo è creare un piano nutrizionale
                  personalizzato, basato sulle tue esigenze e obiettivi, che ti permetta di raggiungere e
                  mantenere uno stato di salute ottimale.
                </p>
                <p>
                  Sarà un colloquio aperto e accogliente, dove potrai sentirti a tuo agio nel condividere 
                  le tue esperienze e aspettative.
                </p>
                <p className="pricing">
                  Tariffa prima visita: 100€
                </p>
                <Link href="/contatti" className="service-link">
                  Contattami →
                </Link>
              </div>
            </div>
            <div className="right-section">
              <div className="section-content">
                <h2>VISITA DI CONTROLLO</h2>
                <p>
                  Le visite di controllo sono fondamentali per monitorare i progressi, valutare l'efficacia del
                  piano nutrizionale e apportare eventuali modifiche necessarie. Durante queste visite,
                  che hanno una durata di circa 30 minuti, discuteremo dei risultati ottenuti, delle
                  eventuali difficoltà incontrate e delle tue sensazioni.
                </p>
                <p>
                  Effettuerò nuovamente le misurazioni antropometriche per confrontarle con quelle iniziali 
                  e valuteremo insieme i cambiamenti avvenuti. Sarà un momento per rafforzare la motivazione, 
                  rispondere alle tue domande e fornirti ulteriori consigli e strategie per raggiungere i tuoi 
                  obiettivi di benessere.
                </p>
                <p className="pricing">
                  Tariffa visita di controllo: 50€
                </p>
                <Link href="/contatti" className="service-link">
                  Contattami →
                </Link>
              </div>
            </div>
          </div>
        </div>

        <style jsx>{`
          .servizi-container {
            display: flex;
            flex-direction: column;
            flex: 1;
            width: 100%;
            max-width: 1800px;
            margin: 0 auto;
          }

          .content-wrapper {
            display: flex;
            justify-content: space-between;
            align-items: flex-start;
            gap: 4rem;
            padding: 2rem 0;
            min-height: fit-content;
          }

          .left-section,
          .right-section {
            flex: 1;
            display: flex;
            justify-content: center;
            padding: 2rem;
            position: relative;
            border-radius: 20px;
            min-height: fit-content;
            overflow: auto;
          }

          .left-section {
            background-color: rgba(149, 202, 34, 0.15);
          }

          .right-section {
            background-color: rgba(115, 191, 54, 0.15);
          }

          .section-content {
            max-width: 700px;
            display: flex;
            flex-direction: column;
            width: 100%;
          }

          .section-content h2 {
            font-size: 1.4rem;
            margin-bottom: 1rem;
            color: #333;
            text-transform: uppercase;
            text-align: center;
            width: 100%;
            position: relative;
            height: 2rem;
            display: flex;
            align-items: center;
            justify-content: center;
          }

          .section-content p {
            font-size: 1rem;
            line-height: 1.4;
            color: #4a5568;
            margin-bottom: 1rem;
            text-align: left;
          }

          .section-content p:last-of-type {
            margin-bottom: 1rem;
          }

          .section-content p.pricing {
            font-weight: 600;
            margin-top: auto;
          }

          .service-link {
            display: inline-block;
            color: #333;
            text-decoration: none;
            font-weight: 500;
            transition: color 0.3s ease;
            margin-top: 0.5rem;
          }

          .service-link:hover {
            color: #4CAF50;
          }

          /* Custom scrollbar */
          .left-section::-webkit-scrollbar,
          .right-section::-webkit-scrollbar {
            width: 6px;
          }

          .left-section::-webkit-scrollbar-track,
          .right-section::-webkit-scrollbar-track {
            background: #f1f1f1;
            border-radius: 3px;
          }

          .left-section::-webkit-scrollbar-thumb,
          .right-section::-webkit-scrollbar-thumb {
            background: #888;
            border-radius: 3px;
          }

          .left-section::-webkit-scrollbar-thumb:hover,
          .right-section::-webkit-scrollbar-thumb:hover {
            background: #666;
          }

          @media (max-width: 1024px) {
            .content-wrapper {
              flex-direction: column;
              gap: 1rem;
              padding: 1rem 0;
              overflow-y: auto;
            }

            .left-section,
            .right-section {
              height: auto;
              min-height: fit-content;
              padding: 1.5rem;
            }

            .section-content h2 {
              font-size: 1.3rem;
              height: 1.8rem;
              margin-bottom: 0.8rem;
            }

            .section-content p {
              font-size: 0.95rem;
            }
          }

          @media (max-width: 440px) {
            .servizi-container {
              padding: 0.5rem;
            }

            .content-wrapper {
              padding: 0.5rem;
            }

            .left-section,
            .right-section {
              margin: 0 0.8rem;
              padding: 1.2rem;
              border-radius: 12px;
            }

            .section-content h2 {
              font-size: 1.2rem;
              height: 1.6rem;
              margin-bottom: 0.7rem;
            }

            .section-content p {
              font-size: 0.9rem;
              line-height: 1.35;
            }

            .section-content p.pricing {
              margin-top: 0.8rem;
            }

            .service-link {
              margin-top: 0.3rem;
              font-size: 0.9rem;
            }
          }
        `}</style>
      </main>
    </Layout>
  )
} 