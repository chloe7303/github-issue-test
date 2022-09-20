import styled from 'styled-components';
import { MarkGithubIcon } from '@primer/octicons-react';

const Wrapper = styled.div`
  padding: 40px 16px;
  font-size: 12px;
  color: ${({ theme }) => theme.text};
  display: flex;
  max-width: 1280px;
  margin-inline: auto;
  border-top: 1px solid ${({ theme }) => theme.border};

  @media screen and (max-width: 1011px) {
    flex-direction: column-reverse;
    align-items: center;
  }
`;

const CopyRight = styled.div`
  width: 16.6%;
`;

const Text = styled.span`
  margin-left: 8px;
`;

const List = styled.ul`
  display: flex;
  color: ${({ theme }) => theme.emphasis};
  width: 66.6%;
  justify-content: space-between;

  @media screen and (max-width: 1011px) {
    width: 100%;
    margin-bottom: 20px;
    justify-content: center;
  }
`;

const Item = styled.li`
  @media screen and (max-width: 1011px) {
    margin-right: 16px;
  }
`;

const list = [
  'Terms',
  'Privacy',
  'Security',
  'Docs',
  'Contact GitHub',
  'Pricing',
  'API',
  'Training',
  'Blog',
  'About',
];
const Footer = () => {
  return (
    <Wrapper>
      <CopyRight>
        <MarkGithubIcon fill="#57606a" />
        <Text>© 2022 GitHub, Inc.</Text>
      </CopyRight>
      <List>
        {list.map((item, index) => (
          <Item key={index}>{item}</Item>
        ))}
      </List>
    </Wrapper>
  );
};

export default Footer;
