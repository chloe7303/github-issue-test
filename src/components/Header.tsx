import styled from 'styled-components';

const Wrapper = styled.header`
  background-color: #161b22;
`;

const Button = styled.button`
  color: #fff;
  font-weight: 700;
  padding-block: 25px;
  background-color: transparent;
  border: 0;
  font-size: 20px;
  cursor: pointer;
`;

function Header() {
  return (
    <Wrapper>
      <Button>Sign in</Button>
    </Wrapper>
  );
}

export default Header;
