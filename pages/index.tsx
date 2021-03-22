import Head from "next/head";
import Layout from "../components/layout";

export default function Home() {
  return (
    <Layout>
      <div className="font-mono w-full">
        <ul className="bg-gray-50 border border-gray-300 rounded p-4 font-semibold group">
          <h2 className="hidden uppercase font-mono">Projects</h2>
          <p className="opacity-100 group-hover:opacity-70 transition-opacity">
            <span className="text-green-700">foreach</span> (
            <span className="text-green-500">$projects</span> as{" "}
            <span className="text-green-500">$project</span>):
          </p>
          <li className="ml-2">
            <a
              href="https://qr.ingalless.com"
              className="underline text-purple-700"
            >
              qr.ingalless.com
            </a>
          </li>
          <li className="ml-2">
            <a href="https://foveal.dev" className="underline text-purple-700">
              foveal.dev
            </a>
          </li>
          <p className="opacity-100 group-hover:opacity-70 transition-opacity">
            <span className="text-green-700">endforeach;</span>
          </p>
        </ul>
      </div>
    </Layout>
  );
}
