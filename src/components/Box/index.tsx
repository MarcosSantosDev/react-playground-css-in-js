import * as React from 'react';

import * as S from './Box.styled';

type BoxProps = S.BoxStyledProps & {
  children: React.ReactNode;
};

export const Box = ({ children, ...restBoxProps }: BoxProps) => {
  return <S.Box {...restBoxProps}>{children}</S.Box>;
};
