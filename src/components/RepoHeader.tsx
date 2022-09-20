import styled from 'styled-components';
import { RepoIcon, CodeIcon, IssueOpenedIcon } from '@primer/octicons-react';

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

const Title = styled.div`
  margin-bottom: 16px;
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
      <Title>
        <RepoIcon size={16} verticalAlign="middle" />
        <User>chloe7303</User>/<Repo>github-issues-section</Repo>
        <Label>Public</Label>
      </Title>
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
