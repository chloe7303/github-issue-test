import {
  IssueClosedIcon,
  IssueOpenedIcon,
  SkipIcon,
} from '@primer/octicons-react';
import Button from '../../components/buttons/Button';
import { useState, useCallback, useRef } from 'react';
import { useNavigate } from 'react-router-dom';
import computedIssueCreatedTime from '../../utils/computedIssueCreatedTime';
import { useUpdateIssueMutation } from '../../redux/labelsApi';
import IconBeforeButton from './IconBeforeButton';

const isssueStateType = [
  {
    state: 'open',
    reason: null,
    icon: <IssueOpenedIcon className="!align-bottom" />,
    bgColorCode: '#2da44e',
  },
  {
    state: 'open',
    reason: 'reopened',
    icon: <IssueOpenedIcon className="!align-bottom" />,
    bgColorCode: '#2da44e',
  },
  {
    state: 'closed',
    reason: 'completed',
    icon: <IssueClosedIcon className="!align-bottom" />,
    bgColorCode: '#8250df',
  },
  {
    state: 'closed',
    reason: 'not_planned',
    icon: <SkipIcon className="!align-bottom" />,
    bgColorCode: '#6e7781',
  },
];

const IssueHeader = ({
  headerData: {
    title,
    number,
    state,
    state_reason,
    creator,
    createTime,
    comments,
  },
}) => {
  const navigate = useNavigate();
  const [isEditing, setIsEditing] = useState(false);
  const [titleValue, setTitleValue] = useState(title);
  const [titleInputValue, setTitleInputValue] = useState(title);
  const [updateIssue] = useUpdateIssueMutation();
  const [showFixedIssueHeader, setShowFixedIssueHeader] = useState(false);

  const handleUpdateTitle = async () => {
    if (!titleInputValue) {
      alert('請輸入標題');
      return;
    }
    console.log('update issue title');
    // patch api
    const response = await updateIssue({
      number,
      body: { title: titleInputValue },
    });
    setTitleValue(titleInputValue);
    setIsEditing(false);
  };

  const fixedIssueHeader = useCallback((node: HTMLDivElement) => {
    if (node) {
      const options = {
        rootMargin: '0px',
        threshold: 0,
      };
      const callback = (entries: IntersectionObserverEntry[]) => {
        if (entries[0].isIntersecting) setShowFixedIssueHeader(false);
        else setShowFixedIssueHeader(true);
      };
      observer.current = new IntersectionObserver(callback, options);
      observer.current.observe(node);
    }
  }, []);

  const observer = useRef<IntersectionObserver | null>(null);

  return (
    <>
      <div
        className="pb-4 mb-8 border-b border-border border-solid"
        ref={fixedIssueHeader}
      >
        <header
          className={`fixed top-0 left-0 right-0 z-[5] border-b border-solid border-border bg-white px-2 py-3 ${
            !showFixedIssueHeader && 'hidden'
          }`}
        >
          <div className="max-w-[1216px] w-full my-0 mx-auto flex">
            <IconBeforeButton
              issueState={
                isssueStateType.find(
                  (issue) =>
                    issue.state === state && issue.reason === state_reason
                )!
              }
            />
            <div className="text-[14px]">
              <div className="mb-1">
                <span className="font-semibold">{title}</span>
                <span className="text-text"> #{number}</span>
              </div>
              <div className="text-text">
                <span className="font-semibold">{creator} </span>
                opened this issue {computedIssueCreatedTime(createTime)} ·{' '}
                {comments} comments
              </div>
            </div>
          </div>
        </header>
        {isEditing ? (
          <div className="flex justify-between mb-3 flex-col-reverse md:flex-row">
            <input
              value={titleInputValue}
              onChange={(e) => setTitleInputValue(e.target.value)}
              className="border-border border-solid border rounded-md bg-default grow mr-4 pl-3"
            ></input>
            <div className="mb-4 md:mb-0">
              <Button
                text="Save"
                margin={'0 10px 0 0'}
                onClick={handleUpdateTitle}
              />
              <button
                className="text-emphasis text-[14px] hover:underline"
                onClick={() => {
                  setIsEditing(false);
                  setTitleInputValue(titleValue);
                }}
              >
                Cancel
              </button>
            </div>
          </div>
        ) : (
          <div className="flex justify-between mb-3 flex-col-reverse md:flex-row">
            <h1 className="md:text-[32px] text-[26px]">
              <span className="mr-2">{titleValue}</span>
              <span className="text-muted">#{number}</span>
            </h1>
            <div className="mb-4 md:mb-0">
              <Button
                text="Edit"
                margin={'0 8px 0 0'}
                onClick={() => setIsEditing(true)}
              />
              <Button
                text="New issue"
                primary={true}
                onClick={() => navigate('/issues/new')}
              />
            </div>
          </div>
        )}
        <div>
          <>
            {isssueStateType
              .filter(
                (issue) =>
                  issue.state === state && issue.reason === state_reason
              )
              .map((issue, index) => (
                <IconBeforeButton key={index} issueState={issue} />
              ))}
          </>
          <span className="text-muted">
            <span className="font-semibold">{creator} </span>
            <span>
              opened this issue {computedIssueCreatedTime(createTime)} ·{' '}
              {comments} comments
            </span>
          </span>
        </div>
      </div>
      {/* mobile assignees & labels */}
      <div className="mb-6 border-b border-border border-solid md:hidden">
        <div className="mb-4">
          <span className="text-[12px] text-text font-semibold">Assignees</span>
        </div>
        <div className="mb-4">
          <span className="text-[12px] text-text font-semibold">Labels</span>
        </div>
      </div>
    </>
  );
};

export default IssueHeader;
