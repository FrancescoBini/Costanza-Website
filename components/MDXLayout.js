import Layout from './Layout'

export default function MDXLayout({ children }) {
  return (
    <Layout>
      <div className="mdx-container">
        {children}
        <footer className="footer">
          <div className="footer-line"></div>
          <p className="copyright">© 2025 Costanza Nasta — All Rights Reserved</p>
        </footer>

        <style jsx>{`
          .mdx-container {
            display: flex;
            flex-direction: column;
            min-height: 100vh;
            max-width: 800px;
            margin: 0 auto;
            padding: 2rem;
          }

          .mdx-container :global(h1) {
            font-size: 2.5rem;
            color: #333;
            margin-bottom: 2rem;
            text-align: center;
          }

          .mdx-container :global(p) {
            font-size: 1.1rem;
            line-height: 1.6;
            color: #4a5568;
            margin-bottom: 1.5rem;
          }

          .footer {
            display: flex;
            flex-direction: column;
            align-items: center;
            margin-top: auto;
            padding-top: 2rem;
          }

          .footer-line {
            width: 200px;
            height: 1px;
            background-color: #333;
            margin-bottom: 1rem;
          }

          .copyright {
            font-size: 0.875rem;
            color: #666;
            text-align: center;
          }

          @media (max-width: 768px) {
            .mdx-container {
              padding: 1rem;
            }
          }
        `}</style>
      </div>
    </Layout>
  )
} 