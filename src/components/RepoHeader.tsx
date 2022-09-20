import styled from 'styled-components';
import {
  RepoIcon,
  CodeIcon,
  IssueOpenedIcon,
  PinIcon,
  EyeIcon,
  RepoForkedIcon,
  StarIcon,
} from '@primer/octicons-react';
import { Button } from './Buttons';

declare module 'react' {
  interface HTMLAttributes<T> extends AriaAttributes, DOMAttributes<T> {
    fw?: string;
    bb?: string;
  }
}

const Wrapper = styled.div`
  padding-top: 16px;
  padding-inline: 32px;
  background-color: ${({ theme }) => theme.default}; ;
`;

const Head = styled.div`
  display: flex;
  align-items: center;
  margin-bottom: 16px;
`;

const Title = styled.div``;

const Actions = styled.div`
  margin-left: auto;
  @media screen and (max-width: 1011px) {
    display: none;
  }
`;

const ActionButton = styled.span`
  margin-right: 8px;
`;
const User = styled.span`
  color: ${({ theme }) => theme.emphasis};
  margin-inline: 5px 2px;
`;

const Repo = styled.strong`
  color: ${({ theme }) => theme.emphasis};
  font-weight: 600;
  margin-inline: 2px 8px;
`;

const Label = styled.span`
  font-size: 12px;
  padding: 0 7px;
  border: 1px solid ${({ theme }) => theme.border};
  border-radius: 16px;
  color: ${({ theme }) => theme.text};
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
const List = styled.ul`
  display: flex;
`;

const Item = styled.li`
  font-size: 14px;
  padding: 10px 15px;
  display: flex;
  align-items: center;
  ${({ bb }) => bb && ' border-bottom: 2px solid #fd8c73'};
`;

const Text = styled.span`
  margin-left: 8px;
  font-weight: ${({ fw }) => fw}; ;
`;

const RepoHeader = () => {
  return (
    <Wrapper>
      <Head>
        <Title>
          <RepoIcon size={16} verticalAlign="middle" />
          <User>chloe7303</User>/<Repo>github-issues-section</Repo>
          <Label>Public</Label>
        </Title>
        <Actions>
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
        </Actions>
      </Head>
      <List>
        <Item>
          <CodeIcon size={16} fill="#57606a" />
          <Text>Code</Text>
        </Item>
        <Item bb="true">
          <IssueOpenedIcon size={16} fill="#57606a" />
          <Text fw="600">Issues</Text>
        </Item>
      </List>
    </Wrapper>
  );
};

export default RepoHeader;
