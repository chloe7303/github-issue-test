import styled, { css } from 'styled-components';
import { KebabHorizontalIcon } from '@primer/octicons-react';
import { useState } from 'react';

declare module 'react' {
  interface HTMLAttributes<T> extends AriaAttributes, DOMAttributes<T> {
    open?: boolean;
  }
}

const Wrapper = styled.div`
  border-top: 1px solid ${({ theme }) => theme.border};
  display: flex;
  padding: 16px;
  color: ${({ theme }) => theme.text};
  font-size: 12px;
  align-items: center;
`;

const LabelCol = styled.div`
  width: 24.9%;
`;

const Label = styled.span`
  padding: 1px 10px;
  background-color: red;
  border-radius: 16px;
  color: #fff;
  font-size: 12px;
`;

const DescriptionCol = styled.div`
  width: 33.3%;
  @media screen and (max-width: 768px) {
    visibility: hidden;
  }
`;

const InfoCol = styled.div`
  width: 24.9%;
  @media screen and (max-width: 768px) {
    visibility: hidden;
  }
`;

const ButtonCol = styled.div`
  width: 16.6%;
  display: flex;
  justify-content: flex-end;
`;

const Button = styled.button`
  cursor: pointer;
  font-size: 12px;
  border: 0;
  background: none;
  color: ${({ theme }) => theme.text};
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
  padding: 4px 8px 4px 16px;
  color: ${({ theme }) => theme.text};
  cursor: pointer;
  text-align: left;
  :hover {
    color: #fff;
    background-color: ${({ theme }) => theme.emphasis};
  }
`;
const LabelItem = () => {
  const [open, setOpen] = useState(false);

  const onToggle = () => {
    setOpen(!open);
  };
  return (
    <Wrapper>
      <LabelCol>
        <Label>bug</Label>
      </LabelCol>
      <DescriptionCol>Something isn't working</DescriptionCol>
      <InfoCol>1 open issue or pull request</InfoCol>
      <ButtonCol>
        <Button>Edit</Button>
        <Button>Delete</Button>
        <Details open={open} onToggle={onToggle}>
          <Summary open={open}>
            <KebabHorizontalIcon />
          </Summary>
          <Dropdown>
            <DropdownButton>Edit</DropdownButton>
            <DropdownButton>Delete</DropdownButton>
          </Dropdown>
        </Details>
      </ButtonCol>
    </Wrapper>
  );
};

export default LabelItem;
