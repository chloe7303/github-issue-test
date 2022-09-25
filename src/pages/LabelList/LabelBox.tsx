import { CheckIcon } from '@primer/octicons-react';
import styled, { css } from 'styled-components';
import LabelItem from './LabelItem';
import { useLabelListQuery } from '../../redux/labelsApi';
import Dropdown from '../../components/buttons/Dropdown';

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

const LabelList = styled.div``;

const sortList = [
  'Alphabetically',
  'Reverse alphabetically',
  'Most issues',
  'Fewest issues',
];
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
        <Dropdown sortList={sortList} />
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
