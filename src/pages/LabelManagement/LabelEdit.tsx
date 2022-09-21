import styled from 'styled-components';
import { SyncIcon } from '@primer/octicons-react';

declare module 'react' {
  interface HTMLAttributes<T> extends AriaAttributes, DOMAttributes<T> {
    ml?: string;
  }
}

const NameDl = styled.dl`
  width: 24.9%;
  padding-right: 16px;
  @media screen and (max-width: 768px) {
    width: 100%;
    padding-right: 0;
    margin-block: 8px;
  }
`;

const DescriptionDl = styled.dl`
  width: 33.3%;
  padding-right: 16px;
  @media screen and (max-width: 1011px) {
    width: 24.9%;
  }
  @media screen and (max-width: 768px) {
    width: 100%;
    padding-right: 0;
    margin-block: 8px;
  }
`;

const ColorDl = styled.dl`
  width: 16.6%;
  @media screen and (max-width: 768px) {
    width: 100%;
  }
`;

const ColorDd = styled.dd`
  display: flex;
`;

const SyncButton = styled.button`
  padding-inline: 7px;
  margin-right: 8px;
  border-radius: 6px;
  background-color: red;
  color: #fff;
  border: red;
`;

const Dt = styled.dt`
  margin-bottom: 8px;
  font-weight: 600;
  font-size: 14px;
  color: #000;
`;

const Input = styled.input`
  width: 100%;
  height: 32px;
  border-radius: 6px;
  background-color: ${({ theme }) => theme.default};
  border: 1px solid ${({ theme }) => theme.border};
  padding: 5px 12px;
`;

const LabelEdit = () => {
  return (
    <>
      <NameDl>
        <Dt>Label name</Dt>
        <Input placeholder="Label name" />
      </NameDl>
      <DescriptionDl>
        <Dt>Description</Dt>
        <Input placeholder="Description (optional)" />
      </DescriptionDl>
      <ColorDl>
        <Dt>Color</Dt>
        <ColorDd>
          <SyncButton>
            <SyncIcon />
          </SyncButton>
          <Input />
        </ColorDd>
      </ColorDl>
    </>
  );
};

export default LabelEdit;
