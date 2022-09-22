import styled from 'styled-components';
import { SyncIcon } from '@primer/octicons-react';
import Button, { PrimaryButton } from '../../components/buttons/Button';

declare module 'react' {
  interface HTMLAttributes<T> extends AriaAttributes, DOMAttributes<T> {
    ml?: string;
    bg?: string;
  }
}

const Container = styled.div``;

const LabelCol = styled.div`
  display: flex;
  justify-content: space-between;
  margin-bottom: 15px;
`;

const FormGroup = styled.div`
  display: flex;
  padding-block: 16px;
  @media screen and (max-width: 768px) {
    flex-direction: column;
  }
`;

const Label = styled.span`
  display: inline-block;
  padding: 0 10px;
  line-height: 24px;
  height: 24px;
  background-color: red;
  border-radius: 16px;
  color: #fff;
  font-weight: 600;
  font-size: 12px;
`;

const DeleteButton = styled.button`
  cursor: pointer;
  font-size: 12px;
  border: 0;
  background: none;
  color: ${({ theme }) => theme.text};
  ${({ name }) => (name === 'edit' ? 'display: block' : 'display: none')};
  @media screen and (max-width: 1011px) {
    display: none;
  }
`;

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
  position: relative;
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

const ColorSelector = styled.div`
  position: absolute;
  width: 254px;
  top: 35px;
  left: 32px;
  padding: 8px;
  border-radius: 6px;
  background-color: ${({ theme }) => theme.light};
  border: 1px solid ${({ theme }) => theme.border};
  ::before {
    top: -16px;
    left: 25px;
    border: 8px solid transparent;
    border-bottom-color: ${({ theme }) => theme.light};
    position: absolute;
    display: inline-block;
    content: '';
  }
`;

const Hint = styled.p`
  font-size: 12px;
  color: ${({ theme }) => theme.text};
`;

const BlockWrapper = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
  margin-top: 8px;
`;

const Block = styled.span`
  display: inline-block;
  width: 24px;
  height: 24px;
  border-radius: 6px;
  background-color: ${({ bg }) => bg};
`;

const ButtonGroup = styled.div`
  margin-top: 21px;
  margin-left: auto;
  @media screen and (max-width: 768px) {
    margin-left: 0;
  }
`;

const colorBlocks = [
  '#b60205',
  '#d93f0b',
  '#fbca04',
  '#0e8a16',
  '#006b75',
  '#1d76db',
  '#0052cc',
  '#5319e7',
  '#e99695',
  '#f9d0c4',
  '#fef2c0',
  '#c2e0c6',
  '#bfdadc',
  '#c5def5',
  '#bfd4f2',
  '#d4c5f9',
];

const LabelForm = ({ type }) => {
  return (
    <Container>
      <LabelCol>
        <Label>bug</Label>
        <DeleteButton name={type.name} onClick={() => type.handleDelete()}>
          Delete
        </DeleteButton>
      </LabelCol>
      <FormGroup>
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
            <ColorSelector>
              <Hint>Choose from default colors:</Hint>
              <BlockWrapper>
                {colorBlocks.slice(0, 8).map((block) => (
                  <Block key={block} bg={block} />
                ))}
              </BlockWrapper>
              <BlockWrapper>
                {colorBlocks.slice(8, 16).map((block) => (
                  <Block key={block} bg={block} />
                ))}
              </BlockWrapper>
            </ColorSelector>
          </ColorDd>
        </ColorDl>
        <ButtonGroup>
          <Button onClick={() => type.handelCancel(false)}>Cancel</Button>
          <PrimaryButton ml="8">
            {type.name === 'edit' ? 'Save changes' : 'Create label'}
          </PrimaryButton>
        </ButtonGroup>
      </FormGroup>
    </Container>
  );
};

export default LabelForm;
