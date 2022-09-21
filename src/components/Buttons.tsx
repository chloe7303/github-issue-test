import styled, { css } from 'styled-components';

declare module 'react' {
  interface HTMLAttributes<T> extends AriaAttributes, DOMAttributes<T> {
    ml?: string;
    active?: boolean;
    index?: number;
  }
}

export const Button = styled.button`
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

// GroupedButton
const Tabs = styled.div`
  margin-right: 8px;
`;

const activeStyle = css`
  background-color: ${({ theme }) => theme.emphasis};
  border: 1px solid ${({ theme }) => theme.emphasis};
  color: #fff;
`;

const Tab = styled(Button)`
  background-color: ${({ theme }) => theme.light};
  ${({ active }) => active && activeStyle};
  border-radius: ${({ index }) =>
    index === 0 ? '6px 0 0 6px' : '0 6px 6px 0'};
`;

const Text = styled.span`
  margin-left: 5px;
  line-height: 20px;
`;

export const GroupedButton = ({ buttons }) => {
  return (
    <Tabs>
      {buttons.map((button, index) => (
        <Tab key={index} active={button.active} index={index}>
          {button.icon}
          <Text>{button.text}</Text>
        </Tab>
      ))}
    </Tabs>
  );
};
