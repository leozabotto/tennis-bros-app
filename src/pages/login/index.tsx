import { useState } from 'react';

import Head from 'next/head';
import Image from 'next/image';
import { useRouter } from 'next/router';
import { GetServerSidePropsContext } from 'next';

import { useForm, useFormState } from 'react-hook-form';

import Button from '@/components/Button';
import Input from '@/components/Input';
import Link from '@/components/Link';
import LogoTypography from '@/components/LogoTypography';
import DeveloperCreditsFooter from '@/components/DeveloperCreditsFooter';

import logo from '@/assets/images/tennis-bros-logo.png';
import { getResponseError } from '@/utils/error';
import { errorToaster } from '@/utils/toaster';

import useAuth from '@/hooks/useAuth';
import { authPublic } from '@/utils/auth';

import { authUser, getAuthUserError } from '@/repositories/userRepository';

type FormDataAuthUser = {
  user: string;
  password: string;
};

export default function Login() {
  const router = useRouter();
  const [isLoading, setIsLoading] = useState(false);

  const { handleSignIn } = useAuth();

  const { register, handleSubmit, setError, control } =
    useForm<FormDataAuthUser>({
      defaultValues: {
        user: '',
        password: '',
      },
      mode: 'onBlur',
      reValidateMode: 'onBlur',
    });

  const { errors } = useFormState({
    control,
  });

  const handleUserKeyPress = (e: React.KeyboardEvent) => {
    if (e.key === 'Enter' && !e.shiftKey) {
      handleSubmit(onSubmit)();
    }
  };

  const onSubmit = async (data: FormDataAuthUser) => {
    setIsLoading(true);
    try {
      const res = await authUser(data);
      handleSignIn(res.token);
    } catch (err) {
      const error = getResponseError(err);
      errorToaster(getAuthUserError(error?.code || 0));
    }
    setIsLoading(false);
  };

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

            <form className="flex flex-col gap-3">
              <div>
                <Input
                  type="text"
                  id="input__user"
                  label="E-mail ou Usuário"
                  errorMessage="Informe seu e-mail ou usuário"
                  hasError={errors.user ? true : false}
                  onKeyDown={handleUserKeyPress}
                  {...register('user', { required: true })}
                />
              </div>
              <div>
                <Input
                  type="password"
                  id="input__pwd"
                  label="Senha"
                  errorMessage="Informe sua senha"
                  hasError={errors.password ? true : false}
                  onKeyDown={handleUserKeyPress}
                  {...register('password', { required: true })}
                />
              </div>
              <div className="w-full mt-5">
                <Button onClick={handleSubmit(onSubmit)} disabled={isLoading}>
                  Entrar
                </Button>
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

export const getServerSideProps = (cx: GetServerSidePropsContext) => {
  return authPublic(cx);
};
