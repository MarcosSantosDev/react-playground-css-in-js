import { motion } from 'framer-motion';
import styled, { css } from 'styled-components';

import { laptop } from '@/styles/breakpoints';

export const ContainerLayout = styled.div`
  width: 100vw;
  height: 100vh;
  max-width: 100%;
  max-height: 100%;
`;

export const Container = styled(motion.div)`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100vw;
  height: 100vh;
  max-width: 100%;
  max-height: 100%;
`;

export const ContentColumn = styled.div`
  width: 50%;
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const ContentLogoImg = styled.div`
  ${({ theme }) => css`
    display: flex;
    justify-content: center;
    place-items: center;
    flex-direction: column;
    background: ${theme.colors.surface};
    width: 50%;
    height: 100%;

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
