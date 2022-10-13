import { KebabHorizontalIcon, SmileyIcon } from '@primer/octicons-react';
import computedIssueCreatedTime from '../../utils/computedIssueCreatedTime';
import ReactMarkdown from 'react-markdown';
import Reaction from './Reaction';

const reactionList = [
  '+1',
  '-1',
  'laugh',
  'hooray',
  'confused',
  'heart',
  'rocket',
  'eyes',
];

const Comment = ({
  commentData: {
    creator,
    createTime,
    body,
    reactions,
    authorAssociation,
    avatarUrl,
  },
}) => {
  return (
    <div className="flex">
      <div className="mr-4 hidden md:block">
        <img
          className="w-10 h-10 rounded-full inline"
          src={avatarUrl}
          alt="avatar"
        />
      </div>
      <div className="grow relative pb-8 before:timeline">
        <div
          className={`rounded-md border-border border border-solid grow md:before:caret md:after:caret md:after:ml-[2px] relative ${
            authorAssociation === 'OWNER'
              ? 'md:after:bg-[#ddf4ff]'
              : 'md:after:bg-default'
          }`}
        >
          <div
            className={`flex border-border border-b border-solid justify-between lg:flex-row md:items-start lg:items-center rounded-t-md py-2 px-4 ${
              authorAssociation === 'OWNER' ? 'bg-[#ddf4ff]' : 'bg-default'
            }`}
          >
            <div className="text-[14px]">
              <span className="font-semibold">{creator} </span>
              <span className="text-text">
                commented {computedIssueCreatedTime(createTime)}
              </span>
            </div>
            <div className="flex text-text">
              {authorAssociation === 'OWNER' && (
                <span className="text-[12px] mr-3 border-border border-solid border rounded-xl px-2 py-0.5 font-semibold">
                  Owner
                </span>
              )}
              <details className="mr-3 cursor-pointer">
                <summary className="flex">
                  <SmileyIcon />
                </summary>
              </details>
              <details className="relative text-black cursor-pointer">
                <summary className="flex">
                  <KebabHorizontalIcon />
                </summary>
                <div className="absolute top-5 right-0 bg-light rounded-md border-border border border-solid text-[14px]">
                  <div className="py-2 px-5 cursor-pointer hover:bg-emphasis hover:text-light">
                    Edit
                  </div>
                  <div className="py-2 px-5 cursor-pointer hover:bg-[#cf222e] hover:text-light">
                    Delete
                  </div>
                </div>
              </details>
            </div>
          </div>
          <div className="p-4 bg-light rounded-b-md">{body}</div>
          <div className="p-4 bg-light rounded-b-md prose max-w-none">
            <ReactMarkdown
              children={body || 'Nothing to preview'}
            ></ReactMarkdown>
          </div>
          <div className="p-4 pt-0 bg-light rounded-b-md">
            <button className="bg-default p-1 border border-border border-solid rounded-full text-text mr-1">
              <SmileyIcon className="!align-bottom" />
            </button>
            {/* <div>{reactions['eyes']}</div> */}
            {reactionList.map((icon, index) => (
              <Reaction key={index} icon={icon} number={reactions[icon]} />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Comment;
