import styled from 'styled-components';
import { PrimaryButton, GroupedButton } from '../../components/Buttons';
import { TagIcon, MilestoneIcon, SearchIcon } from '@primer/octicons-react';

const Wrapper = styled.div`
  display: flex;
  margin-bottom: 20px;
`;

const SearchInputWrap = styled.div`
  position: relative;
`;

const SearchInput = styled.input`
  width: 320px;
  border-radius: 6px;
  background-color: ${({ theme }) => theme.default};
  border: 1px solid ${({ theme }) => theme.border};
  padding: 5px 12px;
  padding-left: 32px;
`;

const SearchIconWrap = styled(SearchIcon)`
  position: absolute;
  left: 8px;
  top: 6px;
  color: ${({ theme }) => theme.text};
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
      <GroupedButton buttons={buttons} />
      <SearchInputWrap>
        <SearchInput placeholder="Search all labels" />
        <SearchIconWrap />
      </SearchInputWrap>
      <PrimaryButton ml="auto">New label</PrimaryButton>
    </Wrapper>
  );
}

export default Subnav;
