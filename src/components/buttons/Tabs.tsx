import styled, { css } from 'styled-components';

const Wrapper = styled.div`
  margin-right: 8px;
`;

const activeStyle = css`
  background-color: #0969da;
  border: 1px solid #0969da;
  color: #fff;
`;

type TabProp = {
  active: boolean;
};
const Tab = styled.button<TabProp>`
  padding: 5px 16px;
  font-weight: 500;
  border-radius: 6px;
  background-color: #f6f8fa;
  color: #24292f;
  border: 1px solid #d0d7de;
  height: 32px;
  cursor: pointer;
  :hover {
    background-color: #f3f4f6;
  }
  background-color: #fff;
  ${({ active }) => active && activeStyle};
  border-radius: ${({ index }) =>
    index === 0 ? '6px 0 0 6px' : '0 6px 6px 0'};
`;

const Text = styled.span`
  margin-left: 5px;
  line-height: 20px;
`;

const Tabs = ({ buttons }) => {
  return (
    <Wrapper>
      {buttons.map((button, index) => (
        <Tab key={index} active={button.active} index={index}>
          {button.icon}
          <Text>{button.text}</Text>
        </Tab>
      ))}
    </Wrapper>
  );
};

export default Tabs;
