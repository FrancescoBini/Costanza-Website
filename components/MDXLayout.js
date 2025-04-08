import Layout from './Layout'

export default function MDXLayout({ children }) {
  return (
    <Layout>
      <main>
        <div className="mdx-container">
          {children}
        </div>

        <style jsx>{`
          .mdx-container {
            display: flex;
            flex-direction: column;
            flex: 1;
            width: 100%;
            max-width: 800px;
            margin: 0 auto;
            padding: 2rem 0;
            min-height: calc(100vh - 10px - 140px); /* Reduced by 10px */
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

          @media (max-width: 768px) {
            .mdx-container {
              padding: 1rem 0;
            }
          }
        `}</style>
      </main>
    </Layout>
  )
} 