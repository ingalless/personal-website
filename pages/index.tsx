import Head from "next/head";
import Layout from "../components/layout";

export default function Home() {
  return (
    <Layout>
      <div className="font-mono">
        <h2 className="font-semibold uppercase font-mono">Projects:</h2>
        <ul className="list-disc list-inside">
          <li>
            <a
              href="https://qr.ingalless.com"
              className="underline text-purple-700"
            >
              qr.ingalless.com
            </a>
          </li>
        </ul>
      </div>
    </Layout>
  );
}
