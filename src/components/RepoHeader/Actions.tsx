import styled from 'styled-components';
import { Button } from '../Buttons';
import {
  PinIcon,
  EyeIcon,
  RepoForkedIcon,
  StarIcon,
} from '@primer/octicons-react';

const Wrapper = styled.div`
  margin-left: auto;
  @media screen and (max-width: 1011px) {
    display: none;
  }
`;

const ActionButton = styled.span`
  margin-right: 8px;
`;

const ButtonText = styled.span`
  margin-left: 5px;
`;

const HalfButton = styled(Button)`
  border-radius: 6px 0 0 6px;
`;

const DropdownButton = styled(Button)`
  border-radius: 0 6px 6px 0;
  border-left: 0;
  padding-inline: 8px;
`;

const Counter = styled.span`
  display: inline-block;
  width: 15px;
  height: 15px;
  background-color: rgba(27, 31, 36, 0.08);
  border-radius: 50%;
  margin-left: 5px;
  padding: 0 6px;
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
        <Button>
          <PinIcon />
          <ButtonText>Pin</ButtonText>
        </Button>
      </ActionButton>
      <ActionButton>
        <Button>
          <EyeIcon />
          <ButtonText>Unwatch</ButtonText>
          <Counter>1</Counter>
          <DropdownCaret />
        </Button>
      </ActionButton>

      <ActionButton>
        <HalfButton>
          <RepoForkedIcon />
          <ButtonText>Fork</ButtonText>
          <Counter>1</Counter>
        </HalfButton>
        <DropdownButton>
          <DropdownCaret />
        </DropdownButton>
      </ActionButton>
      <ActionButton>
        <HalfButton>
          <StarIcon />
          <ButtonText>Star</ButtonText>
          <Counter>1</Counter>
        </HalfButton>
        <DropdownButton>
          <DropdownCaret />
        </DropdownButton>
      </ActionButton>
    </Wrapper>
  );
};

export default Actions;
