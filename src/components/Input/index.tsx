import * as S from './Input.styles';

type InputProps = React.InputHTMLAttributes<HTMLInputElement> & {
  label: string;
  name: string;
};

const Input = ({ label, type, ...inputProps }: InputProps) => {
  return (
    <S.InputContainer>
      <S.Label>{label}</S.Label>
      <S.StyledInput type={type} {...inputProps} />
    </S.InputContainer>
  );
};

export default Input;
