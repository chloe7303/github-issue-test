import styled from 'styled-components';

declare module 'react' {
  interface HTMLAttributes<T> extends AriaAttributes, DOMAttributes<T> {
    ml?: string;
    active?: boolean;
    index?: number;
  }
}

const Button = styled.button`
  padding: 5px 16px;
  font-weight: 500;
  border-radius: 6px;
  background-color: ${({ theme }) => theme.default};
  color: #24292f;
  border: 1px solid ${({ theme }) => theme.border};
  margin-left: ${({ ml }) => ml && `${ml}px`};
  height: 32px;
  cursor: pointer;
`;

export const PrimaryButton = styled(Button)`
  background-color: ${({ theme }) => theme.primary};
  border: 1px solid ${({ theme }) => theme.primary};
  color: #fff;
`;

export default Button;
