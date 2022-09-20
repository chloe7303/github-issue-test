import { CheckIcon } from '@primer/octicons-react';
import styled, { css } from 'styled-components';

const border = css`
  border-radius: 6px;
  border: 1px solid ${({ theme }) => theme.border};
`;

const Wrapper = styled.div`
  ${border};
`;

const Header = styled.div`
  border-radius: 6px 6px 0 0;
  padding: 16px;
  display: flex;
  justify-content: space-between;
  background-color: ${({ theme }) => theme.default}; ;
`;

const Title = styled.h3`
  font-weight: 600;
  font-size: 14px;
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
`;

const MenuHeader = styled.div`
  padding: 8px 10px;
  font-weight: 600;
  border-bottom: 1px solid hsla(210, 18%, 87%, 1);
  font-size: 12px;
`;

const MenuList = styled.div``;

const MenuItem = styled.div`
  padding: 8px 8px 8px 30px;
  border-bottom: 1px solid ${({ theme }) => theme.border};
  font-size: 12px;
  cursor: pointer;

  :hover {
    color: #fff;
    background-color: ${({ theme }) => theme.emphasis};
  }
`;

const CheckIconWrap = styled(CheckIcon)`
  float: left;
  margin-left: -20px;
`;

const List = styled.div``;

const Item = styled.div`
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
`;

const InfoCol = styled.div`
  width: 24.9%;
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
`;

const Box = () => {
  return (
    <Wrapper>
      <Header>
        <Title>12 labels</Title>
        <Details>
          <Summary>Sort</Summary>
          <SelectMenu>
            <MenuHeader>header</MenuHeader>
            <MenuList>
              <MenuItem>
                <CheckIconWrap />
                Alphabetically
              </MenuItem>
              <MenuItem>Reverse alphabetically</MenuItem>
              <MenuItem>Most issues</MenuItem>
              <MenuItem>Fewest issues</MenuItem>
            </MenuList>
          </SelectMenu>
        </Details>
      </Header>
      <List>
        <Item>
          <LabelCol>
            <Label>bug</Label>
          </LabelCol>
          <DescriptionCol>Something isn't working</DescriptionCol>
          <InfoCol>1 open issue or pull request</InfoCol>
          <ButtonCol>
            <Button>Edit</Button>
            <Button>Delete</Button>
          </ButtonCol>
        </Item>
        <Item>
          <LabelCol>
            <Label>bug</Label>
          </LabelCol>
          <DescriptionCol>Something isn't working</DescriptionCol>
          <InfoCol>1 open issue or pull request</InfoCol>
          <ButtonCol>
            <Button>Edit</Button>
            <Button>Delete</Button>
          </ButtonCol>
        </Item>
      </List>
    </Wrapper>
  );
};

export default Box;
