import Head from "next/head";

export default function Home() {
  return (
    <div className="h-full">
      <Head>
        <title>Home</title>
      </Head>
      <main className="flex items-center justify-center w-screen bg-PersianGreen">
        <div className="w-8/12">
          <sl-image-comparer
            position="5"
            style={{
              "--divider-width": "5px",
              "--handle-size": "50px",
              maxWidth: "100vw",
              maxHeight: "100vh",
            }}
          >
            <img
              slot="before"
              src="/1.png"
              alt="A person sitting on bricks wearing untied boots."
              className="w-full"
            />
            <img
              slot="after"
              src="/2.png"
              alt="A person sitting on a yellow curb tying shoelaces on a boot."
              className="w-full"
            />
          </sl-image-comparer>
        </div>
      </main>
    </div>
  );
}
