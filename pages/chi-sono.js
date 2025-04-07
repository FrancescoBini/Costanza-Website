import Image from 'next/image'
import Link from 'next/link'
import Layout from '../components/Layout'

export default function ChiSono() {
  return (
    <Layout>
      <div className="chi-sono-container">
        <div className="content-wrapper">
          <div className="profile-image-container">
            <Image
              src="/images/profilepic.jpeg"
              alt="Dott.ssa Costanza Nasta"
              fill
              sizes="(max-width: 768px) 280px, 340px"
              className="profile-image"
              priority
              style={{ 
                objectFit: 'cover',
                transform: 'translate(-1%, 2%)',
                scale: '1.05'
              }}
            />
          </div>
          <div className="text-content">
            <p>
              Nel 2022 ho conseguito la laurea triennale in Scienze della Nutrizione presso l'Università di Urbino
              e, successivamente, ho completato la Laurea Magistrale in Alimentazione e Nutrizione
              Umana presso l'Università di Milano. Dopo aver superato l'esame di stato nel
              novembre 2024, sono diventata Biologa Nutrizionista e mi sono iscritta all'Ordine dei
              Biologi (Sezione A, n. 5327) dell'Emilia-Romagna e delle Marche.
            </p>
            <p>
              Continuo a perfezionare la mia preparazione, partecipando a corsi di alta formazione
              per offrire consulenze basate su evidenze scientifiche. Il mio obiettivo è aiutarti a
              raggiungere il benessere e migliorare le tue performance, con un approccio pratico,
              sostenibile e, soprattutto, personalizzato.
            </p>
            <p>
              Ogni persona è unica, perciò il mio lavoro è creare piani nutrizionali che si adattino
              perfettamente al tuo stile di vita, alle tue preferenze e alle tue necessità.
            </p>
            <p>
              <Link href="/contatti" className="contact-link">
                <strong>Contattami</strong>
              </Link> per creare insieme un piano nutrizionale che si adatti alle tue
              esigenze.
            </p>
          </div>
        </div>

        <style jsx>{`
          .chi-sono-container {
            display: flex;
            flex-direction: column;
            flex: 1;
            padding: 0 2rem;
            max-width: 1200px;
            margin: 0 auto;
          }

          .content-wrapper {
            display: flex;
            gap: 3.2rem;
            align-items: center;
            height: calc(100vh - 140px);
            padding: 0;
          }

          .profile-image-container {
            flex-shrink: 0;
            width: 340px;
            height: 340px;
            position: relative;
            border-radius: 50%;
            overflow: hidden;
            margin-left: -20px;
          }

          .text-content {
            flex: 1;
            font-size: 1.2rem;
            line-height: 1.6;
            color: #333;
            max-height: 460px;
            padding-right: 0.7rem;
            margin-right: -8px;
          }

          .text-content p {
            margin-bottom: 1.5rem;
          }

          .text-content p:last-child {
            margin-bottom: 0;
          }

          .contact-link {
            color: inherit;
            text-decoration: none;
            transition: color 0.3s ease;
          }

          .contact-link:hover {
            color: #4CAF50;
          }

          /* Custom scrollbar for the text content */
          .text-content::-webkit-scrollbar {
            width: 6px;
          }

          .text-content::-webkit-scrollbar-track {
            background: #f1f1f1;
            border-radius: 3px;
          }

          .text-content::-webkit-scrollbar-thumb {
            background: #888;
            border-radius: 3px;
          }

          .text-content::-webkit-scrollbar-thumb:hover {
            background: #666;
          }

          @media (max-width: 768px) {
            .content-wrapper {
              flex-direction: column;
              gap: 1rem;
              height: calc(100vh - 120px);
              justify-content: center;
            }

            .profile-image-container {
              width: 240px;
              height: 240px;
            }

            .text-content {
              text-align: center;
              font-size: 0.95rem;
              max-height: calc(100vh - 400px);
              padding-right: 0.5rem;
            }
          }
        `}</style>
      </div>
    </Layout>
  )
}