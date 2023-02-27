import { UserTokenData } from '@/hooks/useAuth';
import { atomWithReset } from 'jotai/utils';

export const ATOM_USER_DATA = atomWithReset<UserTokenData>({
  id: 0,
  userName: '',
  name: '',
  email: '',
  phoneNumber: '',
  iat: 0,
  exp: 0,
});

export const ATOM_USER_TOKEN = atomWithReset<string>('');
