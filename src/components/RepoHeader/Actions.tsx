import styled from 'styled-components';
import {
  PinIcon,
  EyeIcon,
  RepoForkedIcon,
  StarIcon,
} from '@primer/octicons-react';

declare module 'react' {
  interface HTMLAttributes<T> extends AriaAttributes, DOMAttributes<T> {
    count?: boolean;
  }
}

const Wrapper = styled.div`
  margin-left: auto;
  @media screen and (max-width: 1011px) {
    display: none;
  }
`;

const ActionButton = styled.button`
  margin-right: 8px;
  ${({ count }) => (count ? 'padding: 3px 12px' : 'padding: 5px 12px')};
  ${({ count }) => !count && 'vertical-align: bottom'};
  border-radius: 6px;
  background-color: transparent;
  color: #24292f;
  border: 1px solid ${({ theme }) => theme.border};
`;

const Text = styled.span`
  margin-left: 8px;
`;

const Counter = styled.span`
  display: inline-block;
  width: 20px;
  height: 20px;
  background-color: rgba(27, 31, 36, 0.08);
  border-radius: 50%;
  margin-inline: 5px;
  padding: 1px 6px;
  font-size: 12px;
  line-height: 18px;
`;

const DropdownCaret = styled.span`
  display: inline-block;
  width: 0;
  height: 0;
  margin-left: 4px;
  vertical-align: middle;
  content: '';
  border-style: solid;
  border-width: 4px 4px 0;
  border-right-color: transparent;
  border-bottom-color: transparent;
  border-left-color: transparent;
`;

const Actions = () => {
  return (
    <Wrapper>
      <ActionButton>
        <PinIcon />
        <Text>Pin</Text>
      </ActionButton>
      <ActionButton count={true}>
        <EyeIcon />
        <Text>Unwatch</Text>
        <Counter>1</Counter>
        <DropdownCaret />
      </ActionButton>
      <ActionButton count={true}>
        <RepoForkedIcon />
        <Text>Fork</Text>
        <Counter>0</Counter>
        <DropdownCaret />
      </ActionButton>
      <ActionButton count={true}>
        <StarIcon />
        <Text>Star</Text>
        <Counter>o</Counter>
        <DropdownCaret />
      </ActionButton>
    </Wrapper>
  );
};

export default Actions;
