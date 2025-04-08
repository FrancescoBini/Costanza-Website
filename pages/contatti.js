import Layout from '../components/Layout'

export default function Contatti() {
  return (
    <Layout>
      <div className="contatti-container contatti-page">
        <div className="left-column">
          <div className="column-content">
            <h2>Recapiti</h2>
            <div className="contact-info">
              <p>
                Per qualsiasi informazione o per prenotare una visita, puoi contattarmi
                tramite mail, telefono o messaggio ai seguenti recapiti:
              </p>
              <p>
                <strong>cellulare:</strong> <a href="tel:+393420706109">+39 342 070 6109</a>
              </p>
              <p>
                <strong>mail:</strong> <a href="mailto:costanzanasta.nutrizionista@gmail.com">costanzanasta.nutrizionista@gmail.com</a>
              </p>
            </div>
          </div>
        </div>

        <div className="vertical-divider"></div>

        <div className="right-column">
          <div className="column-content">
            <h1>Dove trovarmi</h1>
            <div className="location-info">
              <p className="clinic-name">Ambulatorio Polimed</p>
              <p className="street-address">Via Giovanni Amendola 16, 40121 Bologna (BO)</p>
            </div>
            
            <div className="map-container">
              <iframe 
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d5690.971282575822!2d11.338595675987431!3d44.505205196911426!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x477fd49bf84903cd%3A0xa9c163272705b572!2sVia%20Giovanni%20Amendola%2C%2016%2C%2040121%20Bologna%20BO!5e0!3m2!1sen!2sit!4v1744028097983!5m2!1sen!2sit"
                width="600"
                height="450"
                style={{ border: 0 }}
                allowFullScreen=""
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
              />
            </div>
          </div>
        </div>

        <style jsx>{`
          .contatti-container {
            max-width: 1400px;
            margin: 0 auto;
            padding: 1.5rem;
            height: calc(100vh - 150px);
            display: flex;
            flex-direction: row;
            gap: 4rem;
            position: relative;
          }

          .vertical-divider {
            position: absolute;
            left: 50%;
            top: 2rem;
            bottom: 2rem;
            width: 2px;
            background-color: #ddd;
            transform: translateX(-50%);
          }

          .left-column, .right-column {
            flex: 1;
            display: flex;
            justify-content: center;
            padding: 0 1rem;
          }

          .left-column {
            align-items: center;
          }

          .column-content {
            max-width: 600px;
            width: 100%;
            display: flex;
            flex-direction: column;
            align-items: center;
          }

          h1, h2 {
            font-size: 1.75rem;
            text-align: center;
            margin-bottom: 2rem;
            color: #333;
            width: 100%;
          }

          .location-info {
            text-align: center;
            margin-bottom: 1.5rem;
            width: 100%;
          }

          .clinic-name {
            font-size: 1.3rem;
            color: #333;
            font-weight: 500;
            margin-bottom: 0.5rem;
          }

          .street-address {
            font-size: 1.2rem;
            color: #666;
          }

          .map-container {
            width: 600px;
            margin: 0 auto;
            border-radius: 8px;
            overflow: hidden;
            box-shadow: 0 2px 10px rgba(0, 0, 0, 0.1);
          }

          .contact-info {
            width: 100%;
            text-align: center;
          }

          .contact-info p {
            margin-bottom: 2rem;
            font-size: 1.1rem;
            line-height: 1.8;
            color: #666;
          }

          .contact-info p:first-child {
            margin-bottom: 3rem;
          }

          .contact-info p:last-child {
            margin-bottom: 0;
          }

          .contact-info a {
            color: #666;
            text-decoration: none;
            transition: color 0.3s ease;
          }

          .contact-info a:hover {
            color: #4CAF50;
          }

          @media (max-width: 768px) {
            .contatti-container {
              flex-direction: column;
              padding: 1rem;
              gap: 1.5rem;
              height: auto;
              min-height: calc(100vh - 150px);
            }

            .vertical-divider {
              display: none;
            }

            .left-column, .right-column {
              padding: 0 1rem;
            }

            .left-column {
              border-bottom: 1px solid #eee;
              padding-bottom: 1.5rem;
            }

            h1, h2 {
              font-size: 1.5rem;
            }

            .clinic-name {
              font-size: 1.2rem;
            }

            .street-address {
              font-size: 1rem;
            }

            .contact-info p {
              margin-bottom: 0.45rem;
            }

            .map-container {
              width: 100%;
              max-width: 600px;
              margin-bottom: 60px;
            }

            .map-container iframe {
              width: 100%;
              height: 300px;
            }
          }

          @media (max-width: 440px) {
            .contatti-container {
              padding: 0.5rem;
            }

            .left-column, .right-column {
              padding: 0 0.5rem;
            }

            .contact-info p {
              font-size: 0.95rem;
              line-height: 1.6;
              margin-bottom: 0.35rem;
            }

            .contact-info p:first-child {
              margin-bottom: 1.5rem;
            }

            .map-container {
              margin-bottom: 70px;
            }

            .map-container iframe {
              height: 250px;
            }

            h1, h2 {
              font-size: 1.3rem;
              margin-bottom: 1rem;
            }

            .clinic-name {
              font-size: 1.1rem;
            }

            .street-address {
              font-size: 0.95rem;
            }
          }
        `}</style>
      </div>
    </Layout>
  )
} 