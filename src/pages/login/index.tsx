import Head from 'next/head';
import Image from 'next/image';
import { useRouter } from 'next/router';

import Button from '@/components/Button';
import Input from '@/components/Input';
import Link from '@/components/Link';
import LogoTypography from '@/components/LogoTypography';
import DeveloperCreditsFooter from '@/components/DeveloperCreditsFooter';

import logo from '@/assets/images/tennis-bros-logo.png';

export default function Home() {
  const router = useRouter();

  const handleRedirect = (): void => {
    router.push('/home');
  };

  return (
    <>
      <Head>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <title>Login | Tennis Bros</title>
      </Head>
      <main>
        <div className="flex flex-col items-center justify-center min-h-screen">
          <div className="w-full sm:4/5 md:w-3/5 lg:w-2/5 2xl:w-1/5 p-10 grow justify-center flex flex-col">
            <div className="mb-5 flex flex-col md:items-center md:justify-center">
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

            <form action="#" className="flex flex-col gap-3">
              <div>
                <Input
                  type="text"
                  name="user"
                  id="input__user"
                  label="E-mail ou Usuário"
                />
              </div>
              <div>
                <Input
                  type="password"
                  name="pwd"
                  id="input__pwd"
                  label="Senha"
                />
              </div>
              <div className="w-full mt-5">
                <Button onClick={handleRedirect}>Entrar</Button>
              </div>
              <div>
                <p className="text-center text-gray-600 font-medium">
                  Ainda não é membro? <Link href="sign-up">Cadastre-se</Link>
                </p>
              </div>
            </form>
          </div>
          <DeveloperCreditsFooter classes="pb-10" />
        </div>
      </main>
    </>
  );
}
