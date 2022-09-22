import styled from 'styled-components';

type LabelPropType = {
  bgColorCode: string;
  name: string;
  // children: string | JSX.Element;
};

type WrapperProp = {
  bgColorCode: string;
  textColor: string;
};

const Wrapper = styled.a<WrapperProp>`
  display: inline-block;
  padding: 0 10px;
  line-height: 24px;
  height: 24px;
  background-color: ${({ bgColorCode }) => bgColorCode && `#${bgColorCode}`};
  border-radius: 16px;
  color: #fff;
  color: ${({ textColor }) => textColor};
  font-weight: 600;
  font-size: 12px;
`;

const Label = ({ bgColorCode, name }: LabelPropType) => {
  const lightOrDark = (bgColor = '000080') => {
    const r = parseInt(bgColor.slice(0, 2), 16);
    const g = parseInt(bgColor.slice(2, 4), 16);
    const b = parseInt(bgColor.slice(4, 6), 16);
    const hsp = r * 0.3 + g * 0.6 + b * 0.1;
    if (hsp > 127.5) {
      return 'black';
    } else {
      return 'white';
    }
  };
  const textColor = lightOrDark(bgColorCode);
  return (
    <Wrapper bgColorCode={bgColorCode} textColor={textColor}>
      {name}
    </Wrapper>
  );
};

export default Label;
