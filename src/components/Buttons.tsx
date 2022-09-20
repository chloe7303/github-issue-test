import styled from 'styled-components';

declare module 'react' {
  interface HTMLAttributes<T> extends AriaAttributes, DOMAttributes<T> {
    ml?: string;
  }
}

export const Button = styled.button`
  padding: 5px 16px;
  font-weight: 500;
  border-radius: 6px;
  background-color: ${({ theme }) => theme.default};
  color: #24292f;
  border: 1px solid rgba(27, 31, 36, 0.15);
  margin-left: ${({ ml }) => ml};
`;

export const PrimaryButton = styled(Button)`
  background-color: ${({ theme }) => theme.primary};
  color: #fff;
`;
