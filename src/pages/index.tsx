import { useEffect } from 'react';

import Head from 'next/head';
import Image from 'next/image';
import { useRouter } from 'next/router';
import { GetServerSidePropsContext } from 'next';

import Button from '@/components/Button';
import LogoTypography from '@/components/LogoTypography';
import DeveloperCreditsFooter from '@/components/DeveloperCreditsFooter';

import logo from '@/assets/images/tennis-bros-logo.png';
import { authPublic } from '@/utils/auth';

export default function IndexPage() {
  const router = useRouter();

  const handleRedirect = (): void => {
    router.push('/login');
  };

  useEffect(() => {
    handleRedirect();
  });

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
        </div>
      </main>
    </>
  );
}

export const getServerSideProps = (cx: GetServerSidePropsContext) => {
  return authPublic(cx);
};
