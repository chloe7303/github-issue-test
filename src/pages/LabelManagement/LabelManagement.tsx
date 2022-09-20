import { Button, PrimaryButton } from '../../components/Buttons';
import styled from 'styled-components';

const ButtonGroup = styled.div``;

const Label = styled(Button)`
  background-color: #0969da;
  color: #fff;
  border-radius: 6px 0 0 6px;
`;

const Milestones = styled(Button)`
  border-radius: 0 6px 6px 0;
`;

const SearchInput = styled.input`
  width: 320px;
  border-radius: 6px;
  background-color: #f6f8fa;
  border: 1px solid rgba(27, 31, 36, 0.15);
  padding: 5px 12px;
  padding-left: 32px;
`;

const LabelManagement = () => {
  return (
    <>
      <ButtonGroup>
        <Label>Labels</Label>
        <Milestones>Milestones</Milestones>
        <SearchInput placeholder="Search all labels" />
      </ButtonGroup>
      <PrimaryButton>New label</PrimaryButton>
    </>
  );
};

export default LabelManagement;
