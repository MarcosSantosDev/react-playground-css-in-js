import styled, { css } from 'styled-components';

import { laptop } from '@/styles/breakpoints';

export const Container = styled.div`
  display: flex;
  height: 100vh;
  width: 100vw;
`;

export const ContentColumn = styled.div`
  flex: 1;
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const ContentLogoImg = styled.div`
  ${({ theme }) => css`
    flex: 1;
    display: flex;
    justify-content: center;
    place-items: center;
    flex-direction: column;
    background: ${theme.colors.surface};

    > img {
      width: 80%;
    }

    ${laptop({
      style: css`
        display: none;
      `,
    })}
  `}
`;

interface ImageColumnProps {
  imageSrc: string;
}

export const ImageColumn = styled.div<ImageColumnProps>`
  flex: 1;
  background: url(${({ imageSrc }) => imageSrc}) center/cover no-repeat;
  position: relative;

  &:after {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    background-color: rgba(0, 0, 0, 0.4);
  }
`;
