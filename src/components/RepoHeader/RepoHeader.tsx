import styled from 'styled-components';
import { RepoIcon } from '@primer/octicons-react';
import NavList from './NavList';
import Actions from './Actions';

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
  margin-bottom: 26px;
`;

const Title = styled.div`
  font-size: 20px;
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
  font-weight: 500;
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
        <Actions />
      </Head>
      <NavList />
    </Wrapper>
  );
};

export default RepoHeader;
