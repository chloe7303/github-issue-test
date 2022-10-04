import styled, { css } from 'styled-components';

const Wrapper = styled.div`
  margin-right: 8px;
  font-size: 14px;
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
        <Tab
          key={index}
          active={button.active}
          index={index}
          onClick={() => button.onClick && button.onClick()}
        >
          {button.icon}
          <Text>{button.text}</Text>
          <span className="ml-1 px-1.5 bg-[#eff1f3] border border-solid border-[#eff1f3] rounded-full text-xs text-text text-center hidden md:inline-block">
            7
          </span>
        </Tab>
      ))}
    </Wrapper>
  );
};

export default Tabs;
