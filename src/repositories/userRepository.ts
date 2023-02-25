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

export const createUser = async (data: IRequestCreateUser): Promise<IUser> => {
  return await api.post('/user', { data });
};

export const authUser = async (data: IRequestAuthUser): Promise<IUser> => {
  return await api.post('/user/auth', { data });
};

const userRepository = {
  createUser,
  authUser,
};

export default userRepository;
