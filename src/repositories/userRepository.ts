import api from '@/services/api';

export interface IUser {
  id?: number;
  name?: string;
  userName?: string;
  email?: string;
  phoneNumber?: string;
  password?: string;
}

export interface IRequestCreateUser {
  name: string;
  userName: string;
  email: string;
  phoneNumber: string;
  password: string;
}

export interface IRequestAuthUser {
  user: string;
  password: string;
}

export const getCreateUserError = (code: number | undefined): string => {
  switch (code) {
    case 100:
      return 'Preencha o nome';
    case 101:
      return 'Preencha o email';
    case 102:
      return 'E-mail inválido';
    case 103:
      return 'Preencha a senha';
    case 104:
      return 'A senha deve ter entre 6 e 12 caracteres';
    case 105:
      return 'Preencha o nome de usuário';
    case 106:
      return 'Preencha o celular';
    case 107:
      return 'E-mail já está em uso. Por favor, escolha outro';
    case 108:
      return 'Usuário já está em uso. Por favor, escolha outro.';
    case 109:
      return 'Celular já está em uso. Por favor, escolha outro.';
    default:
      return 'Ocorreu um erro ao cadastrar. Tente novamente!';
  }
};

export const createUser = async (data: IRequestCreateUser): Promise<IUser> => {
  return await api.post('/user', data);
};

export const authUser = async (data: IRequestAuthUser): Promise<IUser> => {
  return await api.post('/user/auth', data);
};

const userRepository = {
  createUser,
  authUser,
};

export default userRepository;
