import {
  TypographyIcon,
  ChevronDownIcon,
  ChevronUpIcon,
  QuoteIcon,
  CodeIcon,
  LinkIcon,
  MentionIcon,
  ImageIcon,
  CrossReferenceIcon,
  ReplyIcon,
  HeadingIcon,
  BoldIcon,
  ItalicIcon,
  ListUnorderedIcon,
  ListOrderedIcon,
  TasklistIcon,
  MarkdownIcon,
  InfoIcon,
} from '@primer/octicons-react';
import { useContext, useState, useRef } from 'react';
import { useNavigate } from 'react-router-dom';
import Button from '../../components/buttons/Button';
import { useCreateIssueMutation } from '../../redux/labelsApi';
import { NewIssueContext, NewIssueContextType } from './NewIssue';
import ReactMarkdown from 'react-markdown';
import TextareaMarkdown, {
  TextareaMarkdownRef,
} from 'textarea-markdown-editor';

const Main = () => {
  const { issueForm, setIssueForm } = useContext(
    NewIssueContext
  ) as NewIssueContextType;
  const [showPreview, setShowPreview] = useState(false);
  const navigate = useNavigate();
  const [createIssue] = useCreateIssueMutation();
  const ref = useRef<TextareaMarkdownRef>(null);

  const handleSubmit = async (issueForm) => {
    setIssueForm({
      title: '',
      body: '',
      assignees: [],
      labels: [],
    });
    await createIssue(issueForm);
    return navigate('/');
  };

  return (
    <div className="grow flex md:mr-6">
      <div className="mr-4 hidden md:block">
        <img
          className="w-10 h-10 rounded-full inline"
          src="https://avatars.githubusercontent.com/u/57607232?s=80&v=4"
          alt="avatar"
        />
      </div>
      <div className="grow relative md:before:caret after:caret md:after:ml-[2px] after:bg-white">
        <div className="rounded-md border-border md:border border-solid grow before:[caret-icon] relative">
          <div className="md:p-2 mb-4 md:mb-0">
            <input
              className="rounded-md border-border border border-solid bg-default px-3 py-1 w-full"
              type="text"
              placeholder="Title"
              value={issueForm.title}
              onChange={(e) =>
                setIssueForm((prevValue) => ({
                  ...prevValue,
                  title: e.target.value,
                }))
              }
            />
          </div>
          <div className="mb-2 md:flex border-border lg:border-b border-solid justify-between flex-col lg:flex-row md:items-start lg:items-center">
            <div className="md:mt-2 md:mx-2 -mb-px flex">
              <button
                className={`py-3 px-4 md:rounded-t-[6px] md:mr-2 text-[14px] z-[1] grow ${
                  showPreview
                    ? 'border-b-border'
                    : 'border-b-[#fff] border-border border border-solid'
                }`}
                onClick={() => setShowPreview(false)}
              >
                Write
              </button>
              <button
                className={`py-3 px-4 md:rounded-t-[6px] text-[14px] grow ${
                  showPreview
                    ? 'border-b-[#fff] border-border border border-solid'
                    : ''
                }`}
                onClick={() => setShowPreview(true)}
              >
                Preview
              </button>
            </div>
            <div
              className={`text-muted flex justify-between border-border border-t border-solid w-full px-2 pt-2 lg:border-t-0 lg:justify-end ${
                showPreview && 'hidden'
              }`}
            >
              <div className="md:hidden">
                <button className="mr-1 hover:text-emphasis">
                  <TypographyIcon />
                </button>
                <button className="hover:text-emphasis">
                  <ChevronUpIcon />
                </button>
              </div>
              <div className="flex">
                <div className="hidden md:block">
                  <button
                    className="ml-4 hover:text-emphasis"
                    onClick={() => ref.current?.trigger('h3')}
                  >
                    <HeadingIcon />
                  </button>
                  <button
                    className="ml-4 hover:text-emphasis"
                    onClick={() => ref.current?.trigger('bold')}
                  >
                    <BoldIcon />
                  </button>
                  <button
                    className="ml-4 hover:text-emphasis"
                    onClick={() => ref.current?.trigger('italic')}
                  >
                    <ItalicIcon />
                  </button>
                </div>
                <div>
                  <button
                    className="ml-4 hover:text-emphasis"
                    onClick={() => ref.current?.trigger('block-quotes')}
                  >
                    <QuoteIcon />
                  </button>
                  <button
                    className="ml-4 hover:text-emphasis"
                    onClick={() => ref.current?.trigger('code-inline')}
                  >
                    <CodeIcon />
                  </button>
                  <button
                    className="ml-4 hover:text-emphasis"
                    onClick={() => ref.current?.trigger('link')}
                  >
                    <LinkIcon />
                  </button>
                </div>
                <div className="hidden md:block">
                  <button
                    className="ml-4 hover:text-emphasis"
                    onClick={() => ref.current?.trigger('unordered-list')}
                  >
                    <ListUnorderedIcon />
                  </button>
                  <button
                    className="ml-4 hover:text-emphasis"
                    onClick={() => ref.current?.trigger('ordered-list')}
                  >
                    <ListOrderedIcon />
                  </button>
                  <button className="ml-4 hover:text-emphasis ">
                    <TasklistIcon />
                  </button>
                </div>
                <div>
                  <button className="ml-4 hover:text-emphasis">
                    <MentionIcon />
                  </button>
                  <button className="md:hidden ml-4 hover:text-emphasis">
                    <ImageIcon />
                  </button>
                  <button className="ml-4 hover:text-emphasis">
                    <CrossReferenceIcon />
                  </button>
                  <button className="ml-4 hover:text-emphasis">
                    <ReplyIcon />
                  </button>
                </div>
              </div>
            </div>
          </div>
          {showPreview ? (
            <div className="m-2 p-2 max-w-none h-[230px] border-b-2 border-border border-solid prose">
              <ReactMarkdown children={issueForm.body}></ReactMarkdown>
            </div>
          ) : (
            <div className="m-2">
              <TextareaMarkdown
                className="rounded-md md:rounded-b-none text-[14px] placeholder:text-text border-border border border-solid bg-default p-2 w-full h-[200px] md:border-b-0 align-top focus:bg-light focus-visible:outline-none focus-visible:border-emphasis focus-visible:border-2 focus-visible:border-b-0 peer leading-6"
                placeholder="Leave a comment"
                onChange={(e) =>
                  setIssueForm((prevValue) => ({
                    ...prevValue,
                    body: e.target.value,
                  }))
                }
                value={issueForm.body}
                ref={ref}
                options={{
                  boldPlaceholder: '',
                  headlinePlaceholder: '',
                  italicPlaceholder: '',
                  blockQuotesPlaceholder: '',
                  linkTextPlaceholder: '',
                }}
              ></TextareaMarkdown>
              <div className="rounded-b-md text-[14px] border-border border-b border-x border-solid bg-default relative py-1.5 hidden md:block peer-focus:border-emphasis peer-focus:border-2 peer-focus:border-t-0">
                <input type="file" className="w-full opacity-[.01]" />
                <div className="flex justify-between border-t border-dashed border-border absolute top-0 pt-2 px-3 w-full text-text pointer-events-none">
                  <span>Attach files by selecting or pasting them.</span>
                  <MarkdownIcon />
                </div>
              </div>
            </div>
          )}
          <div className="m-2 text-[12px] text-text justify-between items-center hidden md:flex">
            <div>
              <MarkdownIcon className="mr-2" />
              Styling with Markdown is supported
            </div>
            <Button
              text={'Submit new issue'}
              primary={true}
              disabled={issueForm.title === ''}
              onClick={() => handleSubmit(issueForm)}
            />
          </div>
        </div>
        <div className="text-[12px] m-2 mb-6 leading-5">
          <InfoIcon className="mr-2" />
          Remember, contributions to this repository should follow our{' '}
          <span className="text-emphasis">GitHub Community Guidelines.</span>
        </div>
      </div>
    </div>
  );
};

export default Main;
