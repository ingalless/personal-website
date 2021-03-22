import Head from "next/head";

interface LayoutProps {
  title?: string | React.ReactNode;
}
const Layout: React.FC<LayoutProps> = ({ title = "Jonny", children }) => (
  <div className="flex flex-col items-center justify-center min-h-screen py-2">
    <Head>
      <title>{title}</title>
      <link rel="icon" href="/favicon.ico" />
    </Head>

    <main className="flex flex-col items-center justify-center flex-1 px-20 w-full max-w-2xl">
      <h1 className="text-6xl font-bold font-mono text-center mb-4">{title}</h1>
      {children}
    </main>

    <footer className="flex items-center justify-center w-full h-24 border-t">
      <a
        className="flex items-center justify-center"
        href="https://vercel.com?utm_source=create-next-app&utm_medium=default-template&utm_campaign=create-next-app"
        target="_blank"
        rel="noopener noreferrer"
      >
        Powered by{" "}
        <img src="/vercel.svg" alt="Vercel Logo" className="h-4 ml-2" />
      </a>
    </footer>
  </div>
);

export default Layout;
