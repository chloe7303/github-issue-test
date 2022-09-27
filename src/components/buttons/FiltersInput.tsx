import styled, { css } from 'styled-components';
import { SearchIcon } from '@primer/octicons-react';

const Details = styled.details`
  position: relative;
`;

const Summary = styled.summary`
  font-size: 14px;
  list-style: none;
  height: 32px;
  width: 90px;
  border-radius: 6px 0 0 6px;
  border: 1px solid ${({ theme }) => theme.border};
  background-color: ${({ theme }) => theme.default};
  line-height: 32px;
  text-align: center;
  font-weight: 500;
  ::-webkit-details-marker {
    display: none;
  }

  ::after {
    margin-left: 10px;
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
  left: 0;
  width: 300px;
  border-radius: 6px;
  border: 1px solid ${({ theme }) => theme.border};
  background-color: ${({ theme }) => theme.light};
  margin-top: 6px;
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
  padding: 10px 25px;
  border-bottom: 1px solid ${({ theme }) => theme.border};
  font-size: 12px;
  cursor: pointer;

  :hover {
    background-color: ${({ theme }) => theme.default};
  }
`;

const SearchInputWrap = styled.div`
  width: 100%;
  position: relative;
  @media screen and (max-width: 768px) {
    margin-top: 16px;
  }
`;

const SearchInput = styled.input`
  width: 100%;
  height: 32px;
  border-radius: 0 6px 6px 0;
  background-color: ${({ theme }) => theme.default};
  border: 1px solid ${({ theme }) => theme.border};
  padding: 5px 12px 5px 32px;
  border-left: 0;
  ::placeholder {
    font-size: 14px;
  }
  :focus-visible {
    outline: none;
    border: 2px #0969da solid;
  }
`;

const SearchIconWrap = styled(SearchIcon)`
  position: absolute;
  left: 8px;
  top: 8px;
  color: ${({ theme }) => theme.text};
`;

const FiltersInput = ({ sortList }) => {
  return (
    <div className="flex grow">
      <Details>
        <Summary>Filter</Summary>
        <SelectMenu>
          <MenuHeader>Filter Issues</MenuHeader>
          <MenuList>
            {sortList.map((item, index) => (
              <MenuItem key={index}>{item}</MenuItem>
            ))}
          </MenuList>
        </SelectMenu>
      </Details>
      <SearchInputWrap>
        <SearchInput placeholder="Search all issues" />
        <SearchIconWrap />
      </SearchInputWrap>
    </div>
  );
};

export default FiltersInput;
