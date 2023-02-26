import { AxiosError } from 'axios';

export type DefaultResponseError = {
  code: number;
  message: string;
  status: string;
};

export const getResponseError = (err: any) => {
  const error = err as AxiosError;
  const errorData = error.response?.data as DefaultResponseError;

  return errorData;
};
