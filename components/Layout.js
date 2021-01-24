import Head from "next/head";

export default function Layout({ children }) {
  return (
    <div
      style={{
        fontFamily: "Inter",
        minHeight: "100vh",
        margin: "0",
        padding: "0",
      }}
    >
      <Head>
        <link rel="preconnect" href="https://fonts.gstatic.com" />
        <link
          href="https://fonts.googleapis.com/css2?family=Inter:wght@200;300;400;500;600;700;800;900&display=swap"
          rel="stylesheet"
        />
        <link
          rel="stylesheet"
          href="https://cdn.jsdelivr.net/npm/@shoelace-style/shoelace@2.0.0-beta.26/dist/shoelace/shoelace.css"
        />
        <script
          type="module"
          src="https://cdn.jsdelivr.net/npm/@shoelace-style/shoelace@2.0.0-beta.26/dist/shoelace/shoelace.esm.js"
        ></script>
      </Head>
      <header className="w-full text-gray-100 bg-gray-900 shadow body-font">
        <div className="container flex flex-col flex-wrap items-center p-5 mx-auto md:flex-row">
          <nav className="flex flex-wrap items-center text-base lg:w-2/5 md:ml-auto">
            <a className="mr-5 border-b border-transparent cursor-pointer hover:text-gray-900 hover:border-indigo-600">
              About
            </a>
            <a className="mr-5 border-b border-transparent cursor-pointer hover:text-gray-900 hover:border-indigo-600">
              Products
            </a>
            <a className="mr-5 border-b border-transparent cursor-pointer hover:text-gray-900 hover:border-indigo-600">
              Investor Relations
            </a>
            <a className="border-b border-transparent cursor-pointer hover:text-gray-900 hover:border-indigo-600">
              Contact
            </a>
          </nav>
          <div className="inline-flex ml-5 lg:w-2/5 lg:justify-end lg:ml-0">
            <a
              href="https://www.buymeacoffee.com/pazlydev"
              className="px-3 py-2 ml-4 text-white bg-indigo-700 rounded-lg hover:bg-indigo-500"
            >
              Donate
            </a>
          </div>
        </div>
      </header>
      {children}
    </div>
  );
}
