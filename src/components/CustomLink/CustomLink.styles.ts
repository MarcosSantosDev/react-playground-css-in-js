import { Link as RouterLink } from 'react-router-dom';
import styled from 'styled-components';

export const StyledLink = styled(RouterLink)`
  text-decoration: none;
  color: ${({ theme }) => theme.colors.text.link};
  font-size: inherit;
  font-weight: normal;
  padding: 0px;
  border: 2px solid transparent;
  border-radius: 4px;
  transition: all 0.3s ease;

  &:hover {
    filter: saturate(0.5);
    text-decoration: underline;
  }

  &:focus {
    outline: none;
    filter: saturate(0.5);
    text-decoration: underline;
  }
`;
