import Head from 'next/head';
import Image from 'next/image';

import logo from '../assets/images/tennis-bros-logo.png';

export default function Home() {
  return (
    <>
      <Head>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <title>Tennis Bros</title>
      </Head>
      <main>
        <div className="flex flex-col gap-5 font-semibold items-center justify-center h-screen">
          <Image src={logo} width={100} height={100} alt="Tennis Bros Logo" />
          <h1 className="text-gray-600 font-bold text-xl">Tennis Bros</h1>
        </div>
      </main>
    </>
  );
}
