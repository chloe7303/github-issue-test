import { CheckIcon } from '@primer/octicons-react';
import styled, { css } from 'styled-components';
import LabelItem from './LabelItem';
import api from '../../utils/api';
import { useEffect, useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';

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

const LabelList = styled.div``;

type LabelType = {
  id: number;
  node_id: string;
  url: string;
  name: string;
  color: string;
  default: boolean;
  description: string;
};

type LabelListType = LabelType[];

const LabelBox = () => {
  const [labelList, setLabelList] = useState<LabelListType>([]);
  // redex
  // const dispatch = useDispatch();
  // const labelList = useSelector((state) => state.labels);

  useEffect(() => {
    async function getLabels() {
      // const data = await api.getLabels();
      console.log(labelList);
      // setLabelList(data);
      setLabelList([
        {
          id: 4545668057,
          node_id: 'LA_kwDOIBDy-M8AAAABDvFj2Q',
          url: 'https://api.github.com/repos/chloe7303/github-issues-section/labels/bug',
          name: 'bug',
          color: 'd73a4a',
          default: true,
          description: "Something isn't working",
        },
        {
          id: 4545668058,
          node_id: 'LA_kwDOIBDy-M8AAAABDvFj2g',
          url: 'https://api.github.com/repos/chloe7303/github-issues-section/labels/documentation',
          name: 'documentation',
          color: '0075ca',
          default: true,
          description: 'Improvements or additions to documentation',
        },
        {
          id: 4545668059,
          node_id: 'LA_kwDOIBDy-M8AAAABDvFj2w',
          url: 'https://api.github.com/repos/chloe7303/github-issues-section/labels/duplicate',
          name: 'duplicate',
          color: 'cfd3d7',
          default: true,
          description: 'This issue or pull request already exists',
        },
        {
          id: 4545668060,
          node_id: 'LA_kwDOIBDy-M8AAAABDvFj3A',
          url: 'https://api.github.com/repos/chloe7303/github-issues-section/labels/enhancement',
          name: 'enhancement',
          color: 'a2eeef',
          default: true,
          description: 'New feature or request',
        },
        {
          id: 4545668062,
          node_id: 'LA_kwDOIBDy-M8AAAABDvFj3g',
          url: 'https://api.github.com/repos/chloe7303/github-issues-section/labels/good%20first%20issue',
          name: 'good first issue',
          color: '7057ff',
          default: true,
          description: 'Good for newcomers',
        },
        {
          id: 4545668061,
          node_id: 'LA_kwDOIBDy-M8AAAABDvFj3Q',
          url: 'https://api.github.com/repos/chloe7303/github-issues-section/labels/help%20wanted',
          name: 'help wanted',
          color: '008672',
          default: true,
          description: 'Extra attention is needed',
        },
        {
          id: 4545668063,
          node_id: 'LA_kwDOIBDy-M8AAAABDvFj3w',
          url: 'https://api.github.com/repos/chloe7303/github-issues-section/labels/invalid',
          name: 'invalid',
          color: 'e4e669',
          default: true,
          description: "This doesn't seem right",
        },
        {
          id: 4545668064,
          node_id: 'LA_kwDOIBDy-M8AAAABDvFj4A',
          url: 'https://api.github.com/repos/chloe7303/github-issues-section/labels/question',
          name: 'question',
          color: 'd876e3',
          default: true,
          description: 'Further information is requested',
        },
        {
          id: 4549804074,
          node_id: 'LA_kwDOIBDy-M8AAAABDzCAKg',
          url: 'https://api.github.com/repos/chloe7303/github-issues-section/labels/test%20label',
          name: 'test label',
          color: '0E8A16',
          default: false,
          description: 'test label description',
        },
        {
          id: 4549835363,
          node_id: 'LA_kwDOIBDy-M8AAAABDzD6Yw',
          url: 'https://api.github.com/repos/chloe7303/github-issues-section/labels/test%20label%201',
          name: 'test label 1',
          color: '0E8A16',
          default: false,
          description: 'test label description',
        },
        {
          id: 4545837388,
          node_id: 'LA_kwDOIBDy-M8AAAABDvP5TA',
          url: 'https://api.github.com/repos/chloe7303/github-issues-section/labels/test%20label%20update',
          name: 'test label update',
          color: '0E8A16',
          default: false,
          description: 'test label description',
        },
        {
          id: 4545668065,
          node_id: 'LA_kwDOIBDy-M8AAAABDvFj4Q',
          url: 'https://api.github.com/repos/chloe7303/github-issues-section/labels/wontfix',
          name: 'wontfix',
          color: 'ffffff',
          default: true,
          description: 'This will not be worked on',
        },
      ]);
    }
    getLabels();
  }, []);

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
        {labelList.map((label, index) => (
          <LabelItem key={index} label={label} />
        ))}
      </LabelList>
    </Wrapper>
  );
};

export default LabelBox;
