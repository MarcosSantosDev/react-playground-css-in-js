import React from 'react';

import { CustomLink } from '@/components';

import OAuth from '../OAuth';
import * as S from './AuthFormWrapper.styles';

type AuthFormWrapperProps = {
  children?: React.ReactNode;
  title: string;
  subTitleDecription?: string;
  subTitleLink?: {
    text: string;
    to: string;
  };
};

const AuthFormWrapper = ({
  children,
  title,
  subTitleDecription,
  subTitleLink,
}: AuthFormWrapperProps) => {
  return (
    <S.Container>
      <S.HeaderWrapper>
        <S.HeaderTitle>{title}</S.HeaderTitle>
        <S.HeaderContentSubTitle>
          <S.HeaderDescription>{subTitleDecription}</S.HeaderDescription>
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
