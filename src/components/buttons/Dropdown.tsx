import styled, { css } from 'styled-components';
import { CheckIcon } from '@primer/octicons-react';

const border = css`
  border-radius: 6px;
  border: 1px solid ${({ theme }) => theme.border};
`;

const Details = styled.details`
  position: relative;
`;

const Summary = styled.summary`
  color: ${({ theme }) => theme.text};
  font-size: 14px;
  list-style: none;
  ::-webkit-details-marker {
    display: none;
  }

  ::after {
    margin-left: 5px;
    display: inline-block;
    width: 0;
    height: 0;
    vertical-align: -2px;
    content: '';
    border: 4px solid;
    border-right-color: transparent;
    border-bottom-color: transparent;
    border-left-color: transparent;
  }
`;

const SelectMenu = styled.div`
  position: absolute;
  right: 0;
  width: 300px;
  ${border};
  background-color: ${({ theme }) => theme.light};
  margin-top: 4px;
  box-shadow: 0 8px 24px rgba(140, 149, 159, 0.2);
`;

const MenuHeader = styled.div`
  padding: 10px;
  font-weight: 600;
  border-bottom: 1px solid hsla(210, 18%, 87%, 1);
  font-size: 12px;
`;

const MenuList = styled.div``;

const MenuItem = styled.div`
  padding: 8px;
  border-bottom: 1px solid ${({ theme }) => theme.border};
  font-size: 12px;
  cursor: pointer;

  :hover {
    color: #fff;
    background-color: ${({ theme }) => theme.emphasis};
  }
`;

type CheckIconWrapProp = {
  hidden: boolean;
};
const CheckIconWrap = styled(CheckIcon)<CheckIconWrapProp>`
  margin-right: 5px;
  visibility: ${({ hidden }) => hidden && 'hidden'}; ;
`;

const Dropdown = ({ sortList }) => {
  return (
    <Details>
      <Summary>Sort</Summary>
      <SelectMenu>
        <MenuHeader>header</MenuHeader>
        <MenuList>
          {sortList.map((item, index) => (
            <MenuItem key={index}>
              <CheckIconWrap hidden={index !== 0} />
              {item}
            </MenuItem>
          ))}
        </MenuList>
      </SelectMenu>
    </Details>
  );
};

export default Dropdown;
