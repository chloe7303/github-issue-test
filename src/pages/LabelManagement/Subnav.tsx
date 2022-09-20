import styled from 'styled-components';
import { Button, PrimaryButton } from '../../components/Buttons';
import { TagIcon, MilestoneIcon, SearchIcon } from '@primer/octicons-react';

const Wrapper = styled.div`
  display: flex;
  margin-bottom: 20px;
`;

const Tabs = styled.div`
  margin-right: 8px;
`;

const Label = styled(Button)`
  background-color: ${({ theme }) => theme.emphasis};
  color: #fff;
  border-radius: 6px 0 0 6px;
`;

const Text = styled.span`
  margin-left: 5px;
`;

const Milestones = styled(Button)`
  border-radius: 0 6px 6px 0;
  background-color: ${({ theme }) => theme.light}; ;
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

function Subnav() {
  return (
    <Wrapper>
      <Tabs>
        <Label>
          <TagIcon />
          <Text>Labels</Text>
        </Label>
        <Milestones>
          <MilestoneIcon />
          <Text>Milestones</Text>
        </Milestones>
      </Tabs>
      <SearchInputWrap>
        <SearchInput placeholder="Search all labels" />
        <SearchIconWrap />
      </SearchInputWrap>
      <PrimaryButton ml="auto">New label</PrimaryButton>
    </Wrapper>
  );
}

export default Subnav;
