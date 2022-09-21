import styled from 'styled-components';
import { Button, PrimaryButton, GroupedButton } from '../../components/Buttons';
import { TagIcon, MilestoneIcon, SearchIcon } from '@primer/octicons-react';
import { useState } from 'react';
import LabelEdit from './LabelEdit';

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

const AddButton = styled(PrimaryButton)`
  margin-left: auto;
  @media screen and (max-width: 768px) {
    position: absolute;
    right: 16px;
    height: 32px;
  }
`;
const CreateContainer = styled.div`
  padding: 16px;
  background-color: ${({ theme }) => theme.default};
  border: 1px solid ${({ theme }) => theme.border};
  border-radius: 6px;
  margin-bottom: 16px;
`;

const Label = styled.span`
  padding: 3px 11px;
  background-color: red;
  border-radius: 16px;
  color: #fff;
  font-size: 12px;
  font-weight: 600;
`;

const Container = styled.div`
  display: flex;
  padding-block: 16px;
  @media screen and (max-width: 768px) {
    flex-direction: column;
  }
`;

const ButtonGroup = styled.div`
  margin-top: 21px;
  margin-left: auto;
  @media screen and (max-width: 768px) {
    margin-left: 0;
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
  const [isCreating, setIsCreating] = useState(false);
  return (
    <>
      <Wrapper>
        <Nav>
          <GroupedButton buttons={buttons} />
          <SearchInputWrap>
            <SearchInput placeholder="Search all labels" />
            <SearchIconWrap />
          </SearchInputWrap>
        </Nav>
        <AddButton onClick={() => setIsCreating(true)}>New label</AddButton>
      </Wrapper>
      {isCreating && (
        <CreateContainer>
          <Label>test</Label>
          <Container>
            <LabelEdit />
            <ButtonGroup>
              <Button onClick={() => setIsCreating(false)}>Cancel</Button>
              <PrimaryButton ml="8">Create label</PrimaryButton>
            </ButtonGroup>
          </Container>
        </CreateContainer>
      )}
    </>
  );
}

export default Subnav;
