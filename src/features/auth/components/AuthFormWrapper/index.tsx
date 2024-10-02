import React from 'react';

import { CustomLink } from '@/components/ui';

import OAuth from '../OAuth';
import * as S from './AuthFormWrapper.styles';

type AuthFormWrapperProps = {
  children?: React.ReactNode;
  title: string;
  subTitleDescription?: string;
  subTitleLink?: {
    text: string;
    to: string;
  };
};

const AuthFormWrapper = ({
  children,
  title,
  subTitleDescription,
  subTitleLink,
}: AuthFormWrapperProps) => {
  return (
    <S.Container>
      <S.HeaderWrapper>
        <S.HeaderTitle>{title}</S.HeaderTitle>
        <S.HeaderContentSubTitle>
          <S.HeaderDescription>{subTitleDescription}</S.HeaderDescription>
          {subTitleLink && (
            <CustomLink to={subTitleLink.to}>{subTitleLink.text}</CustomLink>
          )}
        </S.HeaderContentSubTitle>
      </S.HeaderWrapper>
      <S.Content>{children}</S.Content>
      <S.OAuthContent>
        <OAuth />
      </S.OAuthContent>
    </S.Container>
  );
};

export default AuthFormWrapper;
