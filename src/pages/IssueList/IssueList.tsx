import styled from 'styled-components';
import Subnav from './Subnav';
import IssueBox from './IssueBox';

const Wrapper = styled.div`
  padding: 24px 32px;
  max-width: 1280px;
  margin-inline: auto;
  @media screen and (max-width: 768px) {
    padding-inline: 16px;
  }
`;

const IssueList = () => {
  return (
    <Wrapper>
      {/* <Subnav /> */}
      <IssueBox />
    </Wrapper>
  );
};

export default IssueList;
