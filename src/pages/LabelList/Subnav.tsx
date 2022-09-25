import styled from 'styled-components';
import Button from '../../components/buttons/Button';
import ButtonGroup from '../../components/buttons/ButtonGroup';
import { TagIcon, MilestoneIcon, SearchIcon } from '@primer/octicons-react';
import { useState } from 'react';
import LabelForm from './LabelForm';
import { useAddLabelMutation } from '../../redux/labelsApi';

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

const AddButton = styled.div`
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
  const [addLabel] = useAddLabelMutation();

  const handleCreate = async (labelForm) => {
    console.log('create');
    await addLabel(labelForm);
  };

  const LabelFormType = {
    name: 'create',
    handleCancel: setIsCreating,
    handleCreate: handleCreate,
  };
  return (
    <>
      <Wrapper>
        <Nav>
          <ButtonGroup buttons={buttons} />
          <SearchInputWrap>
            <SearchInput placeholder="Search all labels" />
            <SearchIconWrap />
          </SearchInputWrap>
        </Nav>
        <AddButton>
          <Button
            text="New label"
            primary={true}
            onClick={() => setIsCreating(true)}
          />
        </AddButton>
      </Wrapper>
      {isCreating && (
        <CreateContainer>
          <LabelForm type={LabelFormType} label={null} />
        </CreateContainer>
      )}
    </>
  );
}

export default Subnav;
