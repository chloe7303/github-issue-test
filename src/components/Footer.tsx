import styled from 'styled-components';
import { MarkGithubIcon } from '@primer/octicons-react';

const Wrapper = styled.footer`
  max-width: 1280px;
  margin-inline: auto;
  padding-inline: 16px;
  @media screen and (max-width: 1011px) {
    padding-inline: 40px;
  }
  @media screen and (max-width: 544px) {
    padding-inline: 16px;
  }
`;

const InnerWrapper = styled.div`
  margin-top: 40px;
  padding-top: 40px;
  font-size: 12px;
  color: ${({ theme }) => theme.text};
  display: flex;
  border-top: 1px solid ${({ theme }) => theme.border};
  @media screen and (max-width: 1011px) {
    flex-direction: column-reverse;
    align-items: center;
  }
`;
const CopyRight = styled.div`
  display: flex;
  align-items: center;
  width: 16.6%;
  @media screen and (max-width: 1011px) {
    width: 145px;
  }
`;

const Text = styled.span`
  margin-left: 8px;
`;

const List = styled.ul`
  display: flex;
  align-items: center;
  color: ${({ theme }) => theme.emphasis};
  width: 66.6%;
  justify-content: space-between;

  @media screen and (max-width: 1011px) {
    width: 100%;
    margin-bottom: 20px;
    justify-content: center;
    flex-wrap: wrap;
  }
`;

const Item = styled.li`
  @media screen and (max-width: 1011px) {
    margin-right: 16px;
    margin-bottom: 8px;
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
      <InnerWrapper>
        <CopyRight>
          <MarkGithubIcon size={24} fill="#57606a" />
          <Text>© 2022 GitHub, Inc.</Text>
        </CopyRight>
        <List>
          {list.map((item, index) => (
            <Item key={index}>{item}</Item>
          ))}
        </List>
      </InnerWrapper>
    </Wrapper>
  );
};

export default Footer;
