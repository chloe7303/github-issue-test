import styled, { css } from 'styled-components';
import { KebabHorizontalIcon } from '@primer/octicons-react';
import { useState } from 'react';
import LabelEdit from './LabelEdit';
import { Button, PrimaryButton } from '../../components/Buttons';

declare module 'react' {
  interface HTMLAttributes<T> extends AriaAttributes, DOMAttributes<T> {
    open?: boolean;
    handleEdit?: Function;
    isEdit?: boolean;
  }
}

const Wrapper = styled.div`
  border-top: 1px solid ${({ theme }) => theme.border};
  padding: 16px;
  color: ${({ theme }) => theme.text};
  font-size: 12px;
`;

const LebelDisplay = styled.div`
  display: flex;
  align-items: center;
`;

const LabelCol = styled.div`
  width: 24.9%;
`;

const Label = styled.span`
  padding: 3px 11px;
  background-color: red;
  border-radius: 16px;
  color: #fff;
  font-size: 12px;
  font-weight: 600;
`;

const DescriptionCol = styled.div`
  width: 33.3%;
  visibility: ${({ isEdit }) => isEdit && 'hidden'};
  @media screen and (max-width: 768px) {
    visibility: hidden;
  }
`;

const InfoCol = styled.div`
  width: 24.9%;
  visibility: ${({ isEdit }) => isEdit && 'hidden'};
  @media screen and (max-width: 768px) {
    visibility: hidden;
  }
`;

const ButtonCol = styled.div`
  width: 16.6%;
  display: flex;
  justify-content: flex-end;
`;

const ListButton = styled.button`
  cursor: pointer;
  font-size: 12px;
  border: 0;
  background: none;
  color: ${({ theme }) => theme.text};
  visibility: ${({ isEdit }) => isEdit && 'hidden'};
  @media screen and (max-width: 1011px) {
    display: none;
  }
`;

const Details = styled.details`
  position: relative;
  display: none;
  @media screen and (max-width: 1011px) {
    display: block;
  }
`;

const border = css`
  border-radius: 6px;
  border: 1px solid ${({ theme }) => theme.border};
`;

const Summary = styled.summary`
  list-style: none;
  ::-webkit-details-marker {
    display: none;
  }
  padding: 3px 12px;
  background-color: ${({ theme }) => theme.default};
  ${border};
  line-height: 20px;
  ${({ open }) => open && 'color: #fff'};
  ${({ open }) => open && 'background-color:#0969da'};
`;

const Dropdown = styled.div`
  ${border};
  position: absolute;
  right: 0;
  width: 160px;
  background-color: ${({ theme }) => theme.light};
  margin-top: 2px;
  padding-block: 4px;
  z-index: 2;
  ::before {
    top: -16px;
    right: 9px;
    left: auto;
    border: 8px solid transparent;
    border-bottom-color: ${({ theme }) => theme.light};
    position: absolute;
    display: inline-block;
    content: '';
  }
`;

const DropdownButton = styled.button`
  display: block;
  width: 100%;
  border: 0;
  background-color: #fff;
  padding: 6px 8px 6px 16px;
  color: ${({ theme }) => theme.text};
  cursor: pointer;
  text-align: left;
  display: ${({ isEdit }) => isEdit && 'none'};
  :hover {
    color: #fff;
    background-color: ${({ theme }) => theme.emphasis};
  }
`;

const EditContainer = styled.div`
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

const LabelItem = () => {
  const [open, setOpen] = useState(false);
  const [isEdit, setIsEdit] = useState(false);

  const onToggle = () => {
    setOpen(!open);
  };

  const handleDelete = () => {
    alert(
      'Are you sure? Deleting a label will remove it from all issues and pull requests.'
    );
  };
  return (
    <Wrapper>
      <LebelDisplay>
        <LabelCol>
          <Label>bug</Label>
        </LabelCol>
        <DescriptionCol isEdit={isEdit}>Something isn't working</DescriptionCol>
        <InfoCol isEdit={isEdit}>1 open issue or pull request</InfoCol>
        <ButtonCol>
          <ListButton isEdit={isEdit} onClick={() => setIsEdit(true)}>
            Edit
          </ListButton>
          <ListButton onClick={handleDelete}>Delete</ListButton>
          <Details open={open} onToggle={onToggle}>
            <Summary open={open}>
              <KebabHorizontalIcon />
            </Summary>
            <Dropdown>
              <DropdownButton isEdit={isEdit} onClick={() => setIsEdit(true)}>
                Edit
              </DropdownButton>
              <DropdownButton onClick={handleDelete}>Delete</DropdownButton>
            </Dropdown>
          </Details>
        </ButtonCol>
      </LebelDisplay>
      {isEdit && (
        <EditContainer>
          <LabelEdit />
          <ButtonGroup>
            <Button onClick={() => setIsEdit(false)}>Cancel</Button>
            <PrimaryButton ml="8">Save changes</PrimaryButton>
          </ButtonGroup>
        </EditContainer>
      )}
    </Wrapper>
  );
};

export default LabelItem;
