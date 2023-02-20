import Head from 'next/head';
import Button from '@/components/Button';
import Image from 'next/image';
import Input from '@/components/Input';
import Link from '@/components/Link';

import logo from '../../assets/images/tennis-bros-logo.png';
import LogoTypography from '@/components/LogoTypography';

export default function Home() {
  return (
    <>
      <Head>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <title>Login | Tennis Bros</title>
      </Head>
      <main>
        <div className="flex flex-col gap-5 items-center justify-center h-screen">
          <div>
            <div className="mb-5">
              <Image
                src={logo}
                width={100}
                height={100}
                alt="Tennis Bros Logo"
                className="mb-2"
              />
              <LogoTypography classes={''} />
            </div>

            <div>
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
                <div className="w-12/12">
                  <Button onClick={() => null}>Entrar</Button>
                </div>
                <div>
                  <p className="text-center text-gray-600">
                    Ainda não é membro? <Link href="sign-up">Cadastre-se</Link>
                  </p>
                </div>
              </form>
            </div>
          </div>
        </div>
      </main>
    </>
  );
}
