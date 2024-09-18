import * as S from './Input.styles';

export type InputProps = React.InputHTMLAttributes<HTMLInputElement> & {
  label: string;
  name: string;
};

export const Input = ({ label, type, id, name, ...inputProps }: InputProps) => {
  return (
    <S.InputContainer>
      <S.Label htmlFor={id || name} aria-labelledby={id || name}>
        {label}
      </S.Label>
      <S.StyledInput id={id || name} type={type} name={name} {...inputProps} />
    </S.InputContainer>
  );
};
