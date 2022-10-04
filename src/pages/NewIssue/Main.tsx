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

const Main = () => {
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
            />
          </div>
          <div className="mb-2 md:flex border-border lg:border-b border-solid justify-between flex-col lg:flex-row md:items-start lg:items-center">
            <div className="md:mt-2 md:mx-2 -mb-px flex">
              <button className="py-3 px-4 md:rounded-t-[6px] border-border border border-solid md:mr-2 text-[14px] z-[1] border-b-[#fff] grow border-r-0 md:border-r">
                Write
              </button>
              <button className="py-3 px-4 md:rounded-t-[6px] border-border border border-solid border-b-0 text-[14px] grow">
                Preview
              </button>
            </div>
            <div className="text-muted flex justify-between border-border border-t border-solid w-full px-2 pt-2 lg:border-t-0 lg:justify-end">
              <div className="md:hidden">
                <TypographyIcon className="mr-1" />
                <ChevronUpIcon />
              </div>
              <div className="flex">
                <div className="hidden md:block">
                  <HeadingIcon className="ml-4" />
                  <BoldIcon className="ml-4" />
                  <ItalicIcon className="ml-4" />
                </div>
                <div>
                  <QuoteIcon className="ml-4" />
                  <CodeIcon className="ml-4" />
                  <LinkIcon className="ml-4" />
                </div>
                <div className="hidden md:block">
                  <ListUnorderedIcon className="ml-4" />
                  <ListOrderedIcon className="ml-4" />
                  <TasklistIcon className="ml-4" />
                </div>
                <div>
                  <MentionIcon className="ml-4" />
                  <span className="md:hidden">
                    <ImageIcon className="ml-4" />
                  </span>
                  <CrossReferenceIcon className="ml-4" />
                  <ReplyIcon className="ml-4" />
                </div>
              </div>
            </div>
          </div>
          <div className="m-2">
            <textarea
              className="rounded-t-md text-[14px] text-text border-border border-t border-x border-solid bg-default p-2 w-full h-[200px] border-b-0"
              placeholder="Leave a comment"
            ></textarea>
            <div className="rounded-b-md text-[14px] border-border border-b border-x border-solid bg-default -mt-[3px] relative py-1.5">
              <input type="file" className="w-full opacity-[.01]" />
              <div className="flex justify-between border-t border-dashed border-border absolute top-0 pt-2 px-3 w-full text-text pointer-events-none">
                <span>Attach files by selecting or pasting them.</span>
                <MarkdownIcon />
              </div>
            </div>
          </div>
          <div className="m-2 text-[12px] text-text justify-between items-center hidden md:flex">
            <div>
              <MarkdownIcon className="mr-2" />
              Styling with Markdown is supported
            </div>
            <Button text={'Submit new issue'} primary={true} disabled={true} />
          </div>
        </div>
        <div className="text-[12px] m-2">
          <InfoIcon className="mr-2" />
          Remember, contributions to this repository should follow our{' '}
          <span className="text-emphasis">GitHub Community Guidelines.</span>
        </div>
      </div>
    </div>
  );
};

export default Main;
