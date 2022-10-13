import { KebabHorizontalIcon, SmileyIcon } from '@primer/octicons-react';
import computedIssueCreatedTime from '../../utils/computedIssueCreatedTime';
import ReactMarkdown from 'react-markdown';
import Reaction from './Reaction';
import { useState } from 'react';
import IssueCommentForm from '../NewIssue/IssueCommentForm';
import Button from '../../components/buttons/Button';
import { useUpdateIssueMutation } from '../../redux/labelsApi';
import { useParams } from 'react-router-dom';

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
  const [isEditing, setIsEditing] = useState(false);
  const [commentBody, setCommentBody] = useState(body);
  const [commentBodyInput, setCommentBodyInput] = useState(body);
  const [updateIssue] = useUpdateIssueMutation();
  const { id } = useParams() as { id: string };

  return (
    <>
      {isEditing ? (
        <IssueCommentForm
          type={'update-comment-owner'}
          formContent={{
            title: null,
            setTitle: null,
            body: commentBodyInput,
            setBody: (value) => {
              setCommentBodyInput(value);
            },
          }}
          avatarUrl={avatarUrl}
          buttons={[
            <Button
              key={0}
              text={'Cancel'}
              onClick={() => {
                setCommentBodyInput(body);
                setIsEditing(false);
              }}
              margin={'0 5px 0 0'}
              danger={true}
            />,
            <Button
              key={1}
              text={'Update comment'}
              primary={true}
              disabled={commentBodyInput === ''}
              onClick={async () => {
                await updateIssue({
                  number: id,
                  body: { body: commentBodyInput },
                });
                setCommentBody(commentBodyInput);
                setIsEditing(false);
              }}
            />,
          ]}
        />
      ) : (
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
                      <button
                        className="py-2 pl-5 pr-10 hover:bg-emphasis hover:text-light w-full text-left"
                        onClick={() => setIsEditing(true)}
                      >
                        Edit
                      </button>
                      <button className="py-2 pl-5 pr-10 hover:bg-[#cf222e] hover:text-light">
                        Delete
                      </button>
                    </div>
                  </details>
                </div>
              </div>
              <div className="p-4 bg-light rounded-b-md">{commentBody}</div>
              <div className="p-4 bg-light rounded-b-md prose max-w-none">
                <ReactMarkdown
                  children={commentBody || 'Nothing to preview'}
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
      )}
    </>
  );
};

export default Comment;
