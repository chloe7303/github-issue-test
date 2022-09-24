import { CheckIcon } from '@primer/octicons-react';
import styled, { css } from 'styled-components';
import LabelItem from './LabelItem';
import { useLabelListQuery } from '../../redux/labelsApi';

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
  box-shadow: 0 8px 24px rgba(140, 149, 159, 0.2);
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

const LabelList = styled.div``;

// type LabelType = {
//   id: number;
//   node_id: string;
//   url: string;
//   name: string;
//   color: string;
//   default: boolean;
//   description: string;
// };

// type LabelListType = LabelType[];

const LabelBox = () => {
  const { data, error, isLoading, isFetching, isSuccess } = useLabelListQuery();
  // const [labelList, setLabelList] = useState<LabelListType>([]);

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
      <LabelList>
        {isLoading && <h2>Loading...</h2>}
        {isFetching && <h2>Fetching...</h2>}
        {error && <h2>Something went wrong</h2>}
        {isSuccess &&
          data.map((label, index) => <LabelItem key={index} label={label} />)}
      </LabelList>
    </Wrapper>
  );
};

export default LabelBox;
