import styled from 'styled-components';
import Subnav from './Subnav';
import Box from './Box';

const Wrapper = styled.div`
  padding: 24px 32px;
  max-width: 1280px;
  margin-inline: auto;
  @media screen and (max-width: 768px) {
    padding-inline: 16px;
  }
`;

const LabelManagement = () => {
  return (
    <Wrapper>
      <Subnav />
      <Box />
    </Wrapper>
  );
};

export default LabelManagement;
