import styled from 'styled-components';
import lightOrDark from '../../utils/lightOrDark';

type LabelPropType = {
  bgColorCode: string;
  name: string;
  thin?: boolean;
  // children: string | JSX.Element;
};

type WrapperProp = {
  bgColorCode: string;
  textColor: string;
  thin?: boolean;
};

const Wrapper = styled.a<WrapperProp>`
  display: inline-block;
  padding: 0 10px;
  line-height: ${({ thin }) => (thin ? '20px' : '24px')};
  height: ${({ thin }) => (thin ? '20px' : '24px')};
  margin-right: ${({ thin }) => thin && '4px'};
  background-color: ${({ bgColorCode }) => bgColorCode && `#${bgColorCode}`};
  border-radius: 16px;
  color: #fff;
  color: ${({ textColor }) => textColor};
  font-weight: 600;
  font-size: 12px;
  ${({ bgColorCode }) =>
    bgColorCode === 'ffffff' && 'border: 1px solid #d0d7de'};
`;

const Label = ({ bgColorCode, name, thin }: LabelPropType) => {
  const textColor = lightOrDark(bgColorCode);
  return (
    <Wrapper bgColorCode={bgColorCode} textColor={textColor} thin={thin}>
      {name}
    </Wrapper>
  );
};

export default Label;
