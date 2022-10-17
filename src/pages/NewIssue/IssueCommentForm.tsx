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
import Button from '../../components/buttons/Button';
import ReactMarkdown from 'react-markdown';
import TextareaMarkdown, {
  TextareaMarkdownRef,
} from 'textarea-markdown-editor';
import { useState, useRef } from 'react';

const IssueCommentForm = ({ type, formContent, avatarUrl, buttons }) => {
  const [showPreview, setShowPreview] = useState(false);
  const ref = useRef<TextareaMarkdownRef>(null);

  return (
    <div
      className={`flex grow ${
        type === 'new-comment' &&
        'pt-4 border-border border-t-[2px] border-solid'
      }`}
    >
      <div className="mr-4 hidden md:block">
        <img
          className="w-10 h-10 rounded-full inline"
          src={avatarUrl}
          alt="avatar"
        />
      </div>
      <div
        className={`grow relative ${
          (type === 'update-comment' || type === 'update-comment-owner') &&
          'pb-8 before:timeline'
        }`}
      >
        <div
          className={`rounded-md border-border md:border border-solid grow md:before:caret after:caret md:after:ml-[2px] relative bg-light ${
            type === 'new-issue' && 'after:bg-white'
          } ${
            (type === 'new-comment' || type === 'update-comment') &&
            'after:bg-default'
          } ${type === 'update-comment-owner' && 'after:bg-[#ddf4ff]'}`}
        >
          {type === 'new-issue' && (
            <div className="md:p-2 mb-4 md:mb-0">
              <input
                className="rounded-md border-border border border-solid bg-default px-3 py-1 w-full"
                type="text"
                placeholder="Title"
                value={formContent.title}
                onChange={(e) => formContent.setTitle(e.target.value)}
              />
            </div>
          )}

          <div
            className={`mb-2 md:flex border-border lg:border-b border-solid justify-between flex-col lg:flex-row md:items-start lg:items-center ${
              (type === 'new-comment' || type === 'update-comment') &&
              'bg-default rounded-t-md'
            } ${
              type === 'update-comment-owner' && 'bg-[#ddf4ff] rounded-t-md'
            }`}
          >
            <div className="md:mt-2 md:mx-2 -mb-px flex">
              <button
                className={`py-3 px-4 md:rounded-t-[6px] md:mr-2 text-[14px] z-[1] grow ${
                  showPreview
                    ? 'border-b-border bg-transparent'
                    : 'border-b-[#fff] border-border border border-solid bg-light'
                }`}
                onClick={() => setShowPreview(false)}
              >
                Write
              </button>
              <button
                className={`py-3 px-4 md:rounded-t-[6px] text-[14px] grow ${
                  showPreview
                    ? 'border-b-[#fff] border-border border border-solid bg-light'
                    : 'bg-transparent'
                }`}
                onClick={() => setShowPreview(true)}
              >
                Preview
              </button>
            </div>
            <div
              className={`text-muted flex justify-between border-border border-t border-solid w-full px-2 pt-2 lg:border-t-0 lg:justify-end ${
                showPreview && 'hidden'
              } ${
                (type === 'new-comment' || type === 'update-comment') &&
                'bg-light lg:bg-default'
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
            <div
              className={`m-2 p-2 max-w-none border-b-2 border-border border-solid prose ${
                type === 'new-issue' ? 'min-h-[230px]' : 'min-h-[130px]'
              }`}
            >
              <ReactMarkdown
                children={formContent.body || 'Nothing to preview'}
              ></ReactMarkdown>
            </div>
          ) : (
            <div className="m-2 bg-light">
              <TextareaMarkdown
                className={`rounded-md md:rounded-b-none text-[14px] placeholder:text-text border-border border border-solid bg-default p-3 w-full md:border-b-0 align-top focus:bg-light focus-visible:outline-none focus-visible:border-emphasis focus-visible:border-2 focus-visible:border-b-0 peer leading-6
              placeholder="Leave a comment ${
                type === 'new-issue' ? 'min-h-[200px]' : 'min-h-[100px] '
              }`}
                onChange={(e) => formContent.setBody(e.target.value)}
                value={formContent.body}
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
          {buttons.length === 1 ? (
            <div className="m-2 text-[12px] text-text justify-between items-center hidden md:flex">
              <div>
                <MarkdownIcon className="mr-2" />
                Styling with Markdown is supported
              </div>
              {buttons[0]}
            </div>
          ) : (
            <div className="m-2 justify-end flex">
              {buttons.map((button) => button)}
            </div>
          )}
        </div>
        {!(type === 'update-comment-owner' || type === 'update-comment') && (
          <div className="text-[12px] m-2 mb-6 leading-5">
            <InfoIcon className="mr-2" />
            Remember, contributions to this repository should follow our{' '}
            <span className="text-emphasis">GitHub Community Guidelines.</span>
          </div>
        )}
      </div>
    </div>
  );
};

export default IssueCommentForm;
