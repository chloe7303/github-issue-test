import styled, { css } from 'styled-components';

const Tabs = styled.div`
  margin-right: 8px;
`;

const activeStyle = css`
  background-color: ${({ theme }) => theme.emphasis};
  border: 1px solid ${({ theme }) => theme.emphasis};
  color: #fff;
`;

type TabProp = {
  active: boolean;
};
const Tab = styled.button<TabProp>`
  padding: 5px 16px;
  font-weight: 500;
  border-radius: 6px;
  background-color: ${({ theme }) => theme.default};
  color: #24292f;
  border: 1px solid ${({ theme }) => theme.border};
  height: 32px;
  cursor: pointer;
  :hover {
    background-color: #f3f4f6;
  }
  background-color: ${({ theme }) => theme.light};
  ${({ active }) => active && activeStyle};
  border-radius: ${({ index }) =>
    index === 0 ? '6px 0 0 6px' : '0 6px 6px 0'};
`;

const Text = styled.span`
  margin-left: 5px;
  line-height: 20px;
`;

const ButtonGroup = ({ buttons }) => {
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

export default ButtonGroup;
