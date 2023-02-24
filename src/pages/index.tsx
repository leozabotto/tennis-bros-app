import Head from 'next/head';
import Image from 'next/image';
import { useRouter } from 'next/navigation';

import Button from '@/components/Button';
import LogoTypography from '@/components/LogoTypography';
import DeveloperCreditsFooter from '@/components/DeveloperCreditsFooter';

import logo from '@/assets/images/tennis-bros-logo.png';

export default function Home() {
  const router = useRouter();

  const handleRedirect = (): void => {
    router.push('/login');
  };

  return (
    <>
      <Head>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <title>Início | Tennis Bros</title>
      </Head>
      <main className="min-h-screen flex flex-col">
        <div className="flex flex-col gap-5 items-center justify-center grow">
          <Image
            src={logo}
            width={100}
            height={100}
            alt="Tennis Bros Logo"
            priority={true}
          />
          <LogoTypography />

          <p className="text-center w-8/12 lg:w-3/12 font-regular">
            A mais nova comunidade para jogadores de tênis!
          </p>

          <div className="w-10/12 md:w-6/12 lg:w-3/12 mt-5">
            <Button onClick={handleRedirect}>Acessar</Button>
          </div>
          <DeveloperCreditsFooter classes="pb-10" />
        </div>
      </main>
    </>
  );
}
