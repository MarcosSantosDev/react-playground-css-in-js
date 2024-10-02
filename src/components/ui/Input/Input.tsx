import * as React from 'react';

import { FieldError } from 'react-hook-form';

import * as S from './Input.styles';

export type InputProps = React.InputHTMLAttributes<HTMLInputElement> & {
  label: string;
  name: string;
  error?: FieldError | undefined;
};

export const Input = React.forwardRef<never, InputProps>(
  ({ label, id, name, error, ...inputProps }, ref) => (
    <S.InputContainer>
      <S.Label htmlFor={id || name} aria-labelledby={id || name}>
        {label}
      </S.Label>
      <S.InputField
        id={id || name}
        name={name}
        ref={ref}
        hasError={!!error}
        {...inputProps}
      />
      {error && <S.ErrorMessage>{error.message}</S.ErrorMessage>}
    </S.InputContainer>
  ),
);

Input.displayName = 'Input';
