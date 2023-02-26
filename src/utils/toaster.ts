import { toast } from 'react-toastify';

export const successToaster = (message: string, time: number = 5000) => {
  toast(message, { autoClose: time, type: 'success' });
};

export const errorToaster = (message: string, time: number = 5000) => {
  toast(message, { autoClose: time, type: 'error' });
};
