import styled, { css } from 'styled-components';
import { KebabHorizontalIcon } from '@primer/octicons-react';
import React, { useState } from 'react';
import LabelForm from './LabelForm';
import Label from './Label';
import { useDeleteLabelMutation } from '../../redux/labelsApi';

declare module 'react' {
  interface HTMLAttributes<T> extends AriaAttributes, DOMAttributes<T> {
    open?: boolean;
    handleEdit?: Function;
    isEdit?: boolean;
    bgColorCode?: string;
  }
}

const Wrapper = styled.div`
  border-top: 1px solid ${({ theme }) => theme.border};
  padding: 16px;
  color: ${({ theme }) => theme.text};
  font-size: 12px;
`;

const LabelDisplay = styled.div`
  display: flex;
  align-items: center;
  ${({ isEdit }) => isEdit && 'display: none'};
`;

const LabelCol = styled.div`
  width: 24.9%;
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
  &::after {
    top: -12px;
    right: 10px;
    left: auto;
    border: 7px solid transparent;
    position: absolute;
    display: inline-block;
    border-bottom-color: #fff;
    content: '';
  }
  &::before {
    top: -14px;
    right: 10px;
    left: auto;
    border: 7px solid transparent;
    position: absolute;
    display: inline-block;
    border-bottom-color: #d0d7de;
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

type LabelType = {
  id?: number;
  node_id?: string;
  url?: string;
  name: string;
  color: string;
  default?: boolean;
  description: string;
};

type Props = {
  label: LabelType;
};

const LabelItem: React.FC<Props> = ({ label }) => {
  const [openDropdown, setOpenDropdown] = useState(false);
  const [isEdit, setIsEdit] = useState(false);
  const [deleteLabel] = useDeleteLabelMutation();

  const onToggle = () => {
    setOpenDropdown(!openDropdown);
  };

  const handleDelete = async (name) => {
    if (
      !window.confirm(
        'Are you sure? Deleting a label will remove it from all issues and pull requests.'
      )
    )
      return;
    await deleteLabel(name);
    setIsEdit(false);
  };

  const LabelFormType = {
    name: 'edit',
    handleCancel: setIsEdit,
    handleDelete: handleDelete,
  };
  return (
    <Wrapper>
      <LabelDisplay isEdit={isEdit}>
        <LabelCol>
          <Label bgColorCode={label.color} name={label.name} />
        </LabelCol>
        <DescriptionCol isEdit={isEdit}>{label.description}</DescriptionCol>
        <InfoCol isEdit={isEdit}>1 open issue or pull request</InfoCol>
        <ButtonCol>
          <ListButton isEdit={isEdit} onClick={() => setIsEdit(true)}>
            Edit
          </ListButton>
          <ListButton onClick={() => handleDelete(label.name)}>
            Delete
          </ListButton>
          <Details open={openDropdown} onToggle={onToggle}>
            <Summary open={openDropdown}>
              <KebabHorizontalIcon />
            </Summary>
            <Dropdown>
              <DropdownButton isEdit={isEdit} onClick={() => setIsEdit(true)}>
                Edit
              </DropdownButton>
              <DropdownButton onClick={() => handleDelete(label.name)}>
                Delete
              </DropdownButton>
            </Dropdown>
          </Details>
        </ButtonCol>
      </LabelDisplay>
      {isEdit && <LabelForm type={LabelFormType} label={label} />}
    </Wrapper>
  );
};

export default LabelItem;
