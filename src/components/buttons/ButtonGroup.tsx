import styled, { css } from 'styled-components';
import Button from './Button';

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
