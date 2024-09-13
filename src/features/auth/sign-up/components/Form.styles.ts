import styled from 'styled-components';

export const Form = styled.form`
  display: flex;
  flex-direction: column;
  gap: ${({ theme }) => theme.spacing.lg};
`;

export const FieldsGroup = styled.div`
  display: grid;
  grid-template-columns: auto;
  row-gap: ${({ theme }) => theme.spacing.md};
`;
