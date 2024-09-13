import styled from 'styled-components';

export const Container = styled.div`
  display: grid;
  grid-template-rows: auto auto;
  row-gap: ${({ theme }) => theme.spacing.lg};
`;

export const ConditionWrapper = styled.div`
  display: flex;
  justify-content: space-around;
  align-items: center;
  gap: ${({ theme }) => theme.spacing.sm};
`;

export const Line = styled.div`
  width: 100%;
  height: 2px;
  background-color: ${({ theme }) => theme.colors.surface};
`;

export const Or = styled.span`
  color: ${({ theme }) => theme.colors.text.secondary};
  font-size: ${({ theme }) => theme.fontSizes.md};
  font-weight: normal;
  white-space: nowrap;
`;

export const OAuthWrapper = styled.div`
  display: grid;
  grid-template-rows: auto auto;
  row-gap: ${({ theme }) => theme.spacing.md};
`;

export const ButtonContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 10px;
  width: 100%;
  max-width: 300px;
  margin: 0 auto;
`;

export const SocialButton = styled.button<{ bgColor: string }>`
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 10px 20px;
  background-color: ${props => props.bgColor};
  color: #fff;
  border: none;
  border-radius: 5px;
  cursor: pointer;
  font-size: 16px;
  transition: background-color 0.3s;

  &:hover {
    opacity: 0.9;
  }
`;

export const ButtonText = styled.span`
  margin-left: 10px;
`;
