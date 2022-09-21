import styled from 'styled-components';
import { PrimaryButton, GroupedButton } from '../../components/Buttons';
import { TagIcon, MilestoneIcon, SearchIcon } from '@primer/octicons-react';

const Wrapper = styled.div`
  display: flex;
  margin-bottom: 20px;
`;

const Nav = styled.nav`
  display: flex;
  @media screen and (max-width: 768px) {
    flex-direction: column;
  }
`;

const SearchInputWrap = styled.div`
  position: relative;
  @media screen and (max-width: 768px) {
    margin-top: 16px;
  }
`;

const SearchInput = styled.input`
  width: 320px;
  height: 32px;
  border-radius: 6px;
  background-color: ${({ theme }) => theme.default};
  border: 1px solid ${({ theme }) => theme.border};
  padding: 5px 12px;
  padding-left: 32px;
`;

const SearchIconWrap = styled(SearchIcon)`
  position: absolute;
  left: 8px;
  top: 8px;
  color: ${({ theme }) => theme.text};
`;

const Button = styled(PrimaryButton)`
  margin-left: auto;
  @media screen and (max-width: 768px) {
    position: absolute;
    right: 16px;
    height: 32px;
  }
`;

const buttons = [
  {
    text: 'Labels',
    icon: <TagIcon />,
    active: true,
  },
  {
    text: 'Milestones',
    icon: <MilestoneIcon />,
  },
];

function Subnav() {
  return (
    <Wrapper>
      <Nav>
        <GroupedButton buttons={buttons} />
        <SearchInputWrap>
          <SearchInput placeholder="Search all labels" />
          <SearchIconWrap />
        </SearchInputWrap>
      </Nav>
      <Button>New label</Button>
    </Wrapper>
  );
}

export default Subnav;
