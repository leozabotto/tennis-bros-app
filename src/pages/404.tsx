import Head from 'next/head';
import { useRouter } from 'next/router';
import Image from 'next/image';

import Button from '@/components/Button';
import Link from '@/components/Link';
import LogoTypography from '@/components/LogoTypography';
import DeveloperCreditsFooter from '@/components/DeveloperCreditsFooter';

import logo from '@/assets/images/tennis-bros-logo.png';

export default function AppInvite() {
  const router = useRouter();

  const handleRedirect = (): void => {
    router.push('/');
  };

  return (
    <>
      <Head>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <title>404 | Tennis Bros</title>
      </Head>
      <main>
        <div className="flex flex-col items-center justify-center min-h-screen">
          <div className="w-full sm:4/5 md:w-3/5 lg:w-2/5 2xl:w-1/5 p-10 grow justify-center flex flex-col">
            <div className="mb-5 flex flex-col items-center justify-center">
              <Image
                src={logo}
                width={100}
                height={100}
                alt="Tennis Bros Logo"
                className="mb-5"
                priority={true}
              />
              <LogoTypography classes={''} />
            </div>

            <div className="flex flex-col gap-5 justify-center items-center text-center">
              <p>
                <span className="text-c-gray-300 font-bold">Ops!</span> Página
                não encontrada.
              </p>
            </div>

            <div className="w-full mt-20">
              <Button onClick={handleRedirect}>Voltar para o Início</Button>
            </div>
          </div>
          <DeveloperCreditsFooter classes="pb-10" />
        </div>
      </main>
    </>
  );
}
