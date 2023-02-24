import Head from 'next/head';
import Image from 'next/image';

import Button from '@/components/Button';
import Input from '@/components/Input';
import Link from '@/components/Link';
import LogoTypography from '@/components/LogoTypography';
import DeveloperCreditsFooter from '@/components/DeveloperCreditsFooter';

import logo from '@/assets/images/tennis-bros-logo.png';

export default function SignUp() {
  return (
    <>
      <Head>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <title>Cadastro | Tennis Bros</title>
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
                  name="name"
                  id="input__name"
                  label="Nome Completo"
                />
              </div>
              <div>
                <Input
                  type="text"
                  name="name"
                  id="input__user"
                  label="Usuário"
                />
              </div>
              <div>
                <Input
                  type="text"
                  name="phone"
                  id="input__phone"
                  label="Celular"
                />
              </div>
              <div>
                <Input
                  type="email"
                  name="email"
                  id="input__email"
                  label="E-mail"
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
              <div>
                <Input
                  type="password"
                  name="pwd-conf"
                  id="input__pwd-conf"
                  label="Confirmar Senha"
                />
              </div>
              <div className="w-full mt-5">
                <Button onClick={() => null}>Registrar</Button>
              </div>
              <div>
                <p className="text-center text-gray-600 font-medium">
                  Já é membro? <Link href="login">Entrar</Link>
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
