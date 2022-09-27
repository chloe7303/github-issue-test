import styled from 'styled-components';
import FiltersInput from '../../components/buttons/FiltersInput';
import { TagIcon, MilestoneIcon } from '@primer/octicons-react';
import Tabs from '../../components/buttons/Tabs';
import Button from '../../components/buttons/Button';

const Wrapper = styled.div`
  display: flex;
  margin-bottom: 20px;
`;

const Nav = styled.nav`
  display: flex;
  width: 100%;
  @media screen and (max-width: 768px) {
    flex-direction: column;
  }
`;

const AddButton = styled.div`
  margin-left: auto;
  @media screen and (max-width: 768px) {
    position: absolute;
    right: 16px;
    height: 32px;
  }
`;

const sortList = [
  'Open issues and pull requests',
  'Your issues',
  'Your pull requests',
  'Everything assigned to you',
  'Everything mentioning you',
];

const buttons = [
  {
    text: 'Labels',
    icon: <TagIcon verticalAlign="middle" />,
  },
  {
    text: 'Milestones',
    icon: <MilestoneIcon verticalAlign="middle" />,
  },
];

const Subnav = () => {
  return (
    <Wrapper>
      <FiltersInput sortList={sortList} />
      <Nav>
        <div>
          <Tabs buttons={buttons} />
          <Button text="New issue" primary={true} />
        </div>
      </Nav>
      {/* <AddButton>
        <Button
          text="New label"
          primary={true}
          onClick={() => setIsCreating(true)}
        />
      </AddButton> */}
    </Wrapper>
  );
};

export default Subnav;
