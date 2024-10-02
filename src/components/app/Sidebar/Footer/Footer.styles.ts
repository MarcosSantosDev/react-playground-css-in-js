import styled from 'styled-components';

export const FooterContainer = styled.div`
  max-width: 100%;
  display: flex;
  flex-direction: column;
  justify-items: flex-end;
  padding: ${({ theme }) => theme.spacing.md} 0px;
  border-top: 1px solid ${({ theme }) => theme.colors.border.secondary};
`;

type FooterContentStyledProps = {
  panelIsOpened: boolean;
};

export const FooterContent = styled.div<FooterContentStyledProps>`
  display: grid;
  grid-template-columns: ${({ panelIsOpened }) =>
    panelIsOpened ? '1fr 44px' : '44px'};
  grid-template-rows: ${({ panelIsOpened }) =>
    panelIsOpened ? 'auto' : 'auto auto'};
  justify-content: space-between;
  gap: ${({ theme }) => theme.spacing.lg};
`;

export const UserContainer = styled.div`
  display: flex;
  height: 44px;
  gap: ${({ theme }) => theme.spacing.lg};
  color: ${({ theme }) => theme.colors.text.tertiary};
  opacity: 0.8;
  user-select: none;
  pointer-events: none;

  > picture img {
    width: 44px;
    height: 44px;
    border: none;
    border-radius: ${({ theme }) => theme.borderRadius.md};
    object-fit: cover;
  }
`;

export const UserInfo = styled.div`
  max-width: 115px;
  display: flex;
  flex-direction: column;
  gap: ${({ theme }) => theme.spacing.xs};
`;

export const UserName = styled.span`
  font-size: ${({ theme }) => theme.fontSizes.md};
  font-weight: 500;
  color: ${({ theme }) => theme.colors.text.primary};
`;

export const UserSubInfo = styled.span`
  font-size: ${({ theme }) => theme.fontSizes.sm};
  font-weight: 400;
  color: ${({ theme }) => theme.colors.text.tertiary};
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
`;
