import styled from 'styled-components';
import { SyncIcon } from '@primer/octicons-react';
import Button, { PrimaryButton } from '../../components/buttons/Button';
import { useState } from 'react';
import Label from './Label';
import {
  useAddLabelMutation,
  useUpdateLabelMutation,
} from '../../redux/labelsApi';

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

const DeleteButton = styled.button`
  cursor: pointer;
  font-size: 12px;
  border: 0;
  background: none;
  color: ${({ theme }) => theme.text};
  ${({ name }) => (name === 'edit' ? 'display: block' : 'display: none')};
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

type SyncButtonProp = {
  bgColorCode: string;
  textColor: string;
};
const SyncButton = styled.button<SyncButtonProp>`
  padding-inline: 7px;
  margin-right: 8px;
  border-radius: 6px;
  background-color: ${({ bgColorCode }) => `#${bgColorCode}`};
  color: ${({ textColor }) => textColor};
  border: ${({ bgColorCode }) => `#${bgColorCode}`};
  cursor: pointer;
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
  :focus {
    background-color: #fff;
  }
`;

type ColorSelectorProp = {
  show: boolean;
};
const ColorSelector = styled.div<ColorSelectorProp>`
  ${({ show }) => !show && 'display:none'};
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

const Block = styled.div`
  width: 24px;
  height: 24px;
  border-radius: 6px;
  background-color: ${({ bg }) => `#${bg}`};
  cursor: pointer;
`;

const ButtonGroup = styled.div`
  margin-top: 21px;
  margin-left: auto;
  @media screen and (max-width: 768px) {
    margin-left: 0;
    display: flex;
    flex-direction: row-reverse;
    justify-content: start;
  }
`;

const Cancel = styled(Button)`
  @media screen and (max-width: 768px) {
    margin-left: 8px;
  }
`;

type ActionProp = {
  disabled: boolean;
};
const Action = styled(PrimaryButton)<ActionProp>`
  margin-left: 8px;
  background-color: ${({ disabled }) => (disabled ? '#94d3a2' : '#2da44e')};
  @media screen and (max-width: 768px) {
    margin-left: 0;
  }
`;

const colorBlocks = [
  'b60205',
  'd93f0b',
  'fbca04',
  '0e8a16',
  '006b75',
  '1d76db',
  '0052cc',
  '5319e7',
  'e99695',
  'f9d0c4',
  'fef2c0',
  'c2e0c6',
  'bfdadc',
  'c5def5',
  'bfd4f2',
  'd4c5f9',
];

const LabelForm = ({ type, label }) => {
  const [showColorSelector, setShowColorSelector] = useState(false);
  const [isDataFetching, setIsDataFetching] = useState(false);
  const [addLabel] = useAddLabelMutation();
  const [updateLabel] = useUpdateLabelMutation();
  console.log(type.name, label);
  const initialLabelForm =
    type.name === 'edit'
      ? { name: label.name, description: label.description, color: label.color }
      : {
          name: 'Label preview',
          description: '',
          color: 'b60205',
        };
  const [labelForm, setlabelForm] = useState(initialLabelForm);

  const generateRandomColor = () => {
    let randomHexCode = Math.floor(Math.random() * 16777215).toString(16);
    while (randomHexCode.length < 6) randomHexCode = generateRandomColor();
    setlabelForm({ ...labelForm, color: randomHexCode });
    return randomHexCode;
  };

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
  const isActionDisabled = () => {
    return !(labelForm.name && labelForm.color);
  };
  const handleColorCodeChange = (e) => {
    setlabelForm({ ...labelForm, color: e.target.value });
  };

  const handleCreate = async () => {
    try {
      console.log('create');
      setIsDataFetching(true);
      await addLabel(labelForm);
      setIsDataFetching(false);
      type.handleCancel(false);
    } catch (e) {
      console.log(e);
    }
  };

  const handleSave = async () => {
    console.log('save update');
    setIsDataFetching(true);
    await updateLabel(labelForm);
    setIsDataFetching(false);
    type.handleCancel(false);
  };

  return (
    <Container>
      <LabelCol>
        <Label bgColorCode={labelForm.color} name={labelForm.name} />
        <DeleteButton
          name={type.name}
          onClick={() => {
            type.handleDelete(label.name);
          }}
        >
          Delete
        </DeleteButton>
      </LabelCol>
      <FormGroup>
        <NameDl>
          <Dt>Label name</Dt>
          <Input
            placeholder="Label name"
            value={labelForm.name}
            onChange={(e) =>
              setlabelForm({ ...labelForm, name: e.target.value })
            }
          />
        </NameDl>
        <DescriptionDl>
          <Dt>Description</Dt>
          <Input
            placeholder="Description (optional)"
            value={labelForm.description}
            onChange={(e) =>
              setlabelForm({ ...labelForm, description: e.target.value })
            }
          />
        </DescriptionDl>
        <ColorDl>
          <Dt>Color</Dt>
          <ColorDd>
            <SyncButton
              bgColorCode={labelForm.color}
              onClick={generateRandomColor}
              textColor={lightOrDark(labelForm.color)}
            >
              <SyncIcon />
            </SyncButton>
            <Input
              onFocus={() => setShowColorSelector(true)}
              onBlur={() => setShowColorSelector(false)}
              value={`#${labelForm.color}`}
              onChange={handleColorCodeChange}
            />
            <ColorSelector show={showColorSelector}>
              <Hint>Choose from default colors:</Hint>
              <BlockWrapper>
                {colorBlocks.slice(0, 8).map((block) => (
                  <Block
                    key={block}
                    bg={block}
                    onMouseDown={() =>
                      setlabelForm({ ...labelForm, color: block })
                    }
                  />
                ))}
              </BlockWrapper>
              <BlockWrapper>
                {colorBlocks.slice(8, 16).map((block) => (
                  <Block
                    key={block}
                    bg={block}
                    onMouseDown={() =>
                      setlabelForm({ ...labelForm, color: block })
                    }
                  />
                ))}
              </BlockWrapper>
            </ColorSelector>
          </ColorDd>
        </ColorDl>
        <ButtonGroup>
          <Cancel onClick={() => type.handleCancel(false)}>Cancel</Cancel>
          {type.name === 'edit' ? (
            <Action
              disabled={isActionDisabled() || isDataFetching}
              onClick={handleSave}
            >
              {isDataFetching ? 'Saving...' : 'Save changes'}
            </Action>
          ) : (
            <Action
              disabled={isActionDisabled() || isDataFetching}
              onClick={handleCreate}
            >
              {isDataFetching ? 'Saving...' : 'Create label'}
            </Action>
          )}
        </ButtonGroup>
      </FormGroup>
    </Container>
  );
};

export default LabelForm;
