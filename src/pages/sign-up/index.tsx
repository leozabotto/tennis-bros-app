import { GetServerSidePropsContext } from 'next';
import Head from 'next/head';
import Image from 'next/image';
import { useRouter } from 'next/router';

import { useForm, useFormState } from 'react-hook-form';

import Button from '@/components/Button';
import Input from '@/components/Input';
import Link from '@/components/Link';
import LogoTypography from '@/components/LogoTypography';
import DeveloperCreditsFooter from '@/components/DeveloperCreditsFooter';

import { errorToaster, successToaster } from '@/utils/toaster';
import { getResponseError } from '@/utils/error';
import { emailRegExp } from '@/utils/regex';

import { createUser, getCreateUserError } from '@/repositories/userRepository';
import { authPublic } from '@/utils/auth';

import logo from '@/assets/images/tennis-bros-logo.png';

type FormDataCreateUser = {
  id: number;
  name: string;
  userName: string;
  email: string;
  phoneNumber: string;
  password: string;
  passwordConfirmation: string;
};

export default function SignUp() {
  const router = useRouter();

  const { register, handleSubmit, setError, control } =
    useForm<FormDataCreateUser>({
      defaultValues: {
        name: '',
        userName: '',
        email: '',
        phoneNumber: '',
        password: '',
        passwordConfirmation: '',
      },
      mode: 'onBlur',
      reValidateMode: 'onBlur',
    });

  const { errors } = useFormState({
    control,
  });

  const validateFormData = (data: FormDataCreateUser): boolean => {
    if (data.password !== data.passwordConfirmation) {
      setError('passwordConfirmation', {
        type: 'custom',
        message: 'passwords does not match',
      });
      return false;
    }

    if (data.phoneNumber.trim().length !== 11) {
      setError('phoneNumber', {
        type: 'custom',
        message: 'invalid phone number',
      });
      return false;
    }

    return true;
  };

  const onSubmit = async (data: FormDataCreateUser) => {
    const isValid = validateFormData(data);

    if (isValid) {
      try {
        await createUser(data);

        successToaster(
          'Usuário criado com sucesso! Você será redirecionado em 3 segundos.',
          3000
        );

        setTimeout(() => router.push('/login'), 3000);
      } catch (err) {
        const error = getResponseError(err);
        errorToaster(getCreateUserError((error?.code as number) || 0));
      }
    }

    return;
  };

  const handleUserKeyPress = (e: React.KeyboardEvent) => {
    if (e.key === 'Enter' && !e.shiftKey) {
      handleSubmit(onSubmit)();
    }
  };

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
                  id="input__name"
                  label="Nome Completo"
                  errorMessage="Preencha o nome"
                  hasError={errors.name ? true : false}
                  onKeyDown={handleUserKeyPress}
                  {...register('name', { required: true })}
                />
              </div>
              <div>
                <Input
                  type="text"
                  id="input__user"
                  label="Usuário"
                  required={true}
                  hasError={errors.userName ? true : false}
                  errorMessage={'Preencha o nome de usuário'}
                  onKeyDown={handleUserKeyPress}
                  {...register('userName', { required: true })}
                />
              </div>
              <div>
                <Input
                  type="text"
                  id="input__phone"
                  label="Celular"
                  hasError={errors.phoneNumber ? true : false}
                  errorMessage={'Preencha o celular'}
                  onKeyDown={handleUserKeyPress}
                  {...register('phoneNumber', { required: true })}
                />
              </div>
              <div>
                <Input
                  type="email"
                  id="input__email"
                  label="E-mail"
                  hasError={errors.email ? true : false}
                  errorMessage={'Preencha com um e-mail válido'}
                  onKeyDown={handleUserKeyPress}
                  {...register('email', {
                    required: true,
                    pattern: emailRegExp,
                  })}
                />
              </div>
              <div>
                <Input
                  type="password"
                  id="input__pwd"
                  label="Senha"
                  required={true}
                  hasError={errors.password ? true : false}
                  errorMessage={
                    'Preencha a senha (Min. 6 e Max. 12 caracteres)'
                  }
                  onKeyDown={handleUserKeyPress}
                  {...register('password', {
                    required: true,
                    minLength: 6,
                    maxLength: 12,
                  })}
                />
              </div>
              <div>
                <Input
                  type="password"
                  id="input__pwd-conf"
                  label="Confirmar Senha"
                  hasError={errors.passwordConfirmation ? true : false}
                  errorMessage="As senhas não conferem"
                  onKeyDown={handleUserKeyPress}
                  {...register('passwordConfirmation', { required: true })}
                />
              </div>
              <div className="w-full mt-5">
                <Button onClick={handleSubmit(onSubmit)}>Registrar</Button>
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

export const getServerSideProps = (cx: GetServerSidePropsContext) => {
  return authPublic(cx);
};
