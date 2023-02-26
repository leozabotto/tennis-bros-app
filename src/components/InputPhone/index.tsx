import React from 'react';
import { Controller } from 'react-hook-form';
import { Control } from 'react-hook-form/dist/types';
import InputMask from 'react-input-mask';
import Input from '../Input';

// TODO: implement a input mask with a new lib

type InputProps = {
  name: string;
  hasError: boolean;
  control: Control;
  defaultValue: string;
};

const InputPhoneHookForm = React.forwardRef<
  HTMLInputElement,
  InputProps & React.HTMLAttributes<HTMLInputElement>
>(({ name, control, defaultValue, hasError, ...rest }, ref) => {
  return (
    <Controller
      name={name}
      control={control}
      defaultValue={defaultValue}
      {...rest}
      render={({ field }) => {
        return <></>;
      }}
    />
  );
});

InputPhoneHookForm.displayName = 'InputPhoneHookForm';

export { InputPhoneHookForm };
