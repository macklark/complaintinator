import Head from "next/head";

import { supabase } from "../utils/client";

export default function Home() {
  async function loginHandler() {
    try {
      await supabase.auth.signInWithOAuth({
        provider: "github",
      });
    } catch (err) {
      return err;
    }
  }

  return (
    <div className="flex flex-col min-h-screen">
      <Head>
        <title>Complaintinator | Home</title>
        <meta name="description" content="Complaintinator Home page" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main className="md:w-3/4 md:mx-auto mt-32">
        <h1 className="text-center font-bold text-4xl md:text-6xl bg-clip-text bg-gradient-to-r from-green-600 to-blue-600 text-transparent">
          Complaintinator
        </h1>
        <div className="flex justify-center mt-16">
          <button
            className="bg-blue-500 text-white font-medium rounded-lg px-5 py-3"
            onClick={loginHandler}
          >
            Sign In with GitHub
          </button>
        </div>
      </main>
    </div>
  );
}
