import { Button, Input } from '@/components';
import { useFormSubmit } from '@/hooks/useFormSubmit';

import * as S from './SignUpForm.styles';

type SignUpFormData = {
  email: string;
  password: string;
};

const SignUpForm = () => {
  const handleSubmit = useFormSubmit(data => {
    const formData = data as SignUpFormData;
    // console.log(formData);
  });

  return (
    <S.Form onSubmit={handleSubmit} autoComplete="off">
      <S.FieldsGroup>
        <Input
          label="Name"
          type="text"
          placeholder="Enter your name"
          name="name"
        />
        <Input
          label="Email"
          type="email"
          placeholder="Enter your email"
          name="email"
        />
        <Input
          label="Password"
          type="password"
          placeholder="Enter your password"
          name="password"
        />
      </S.FieldsGroup>
      <Button type="submit" size="md">
        Sign Up
      </Button>
    </S.Form>
  );
};

export default SignUpForm;
