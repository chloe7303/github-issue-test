import IssueCommentForm from '../../pages/NewIssue/IssueCommentForm';
import Comment from './Comment';
import Button from '../../components/buttons/Button';
import {
  useTimelineQuery,
  useCreateCommentMutation,
} from '../../redux/labelsApi';
import { useParams } from 'react-router-dom';
import { useState } from 'react';
import { DropDownSelectButton } from '../../components/buttons/DropDownSelectButton';
import { IssueClosedIcon, SkipIcon } from '@primer/octicons-react';

const Main = ({
  issueData: {
    creator,
    creatorAvatarUrl,
    createTime,
    body,
    reactions,
    authorAssociation,
  },
}) => {
  const { id } = useParams() as { id: string };
  const [createComment] = useCreateCommentMutation();
  const { data, error, isSuccess } = useTimelineQuery(id);
  const [createCommentBody, setCreateCommentBody] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const [selectedIssueAction, setSelectedIssueAction] = useState({
    state: 'closed',
    state_reason: 'completed',
  });

  return (
    <div className="grow md:mr-6">
      {/* owner comment */}
      <Comment
        commentData={{
          creator,
          createTime,
          body,
          reactions,
          authorAssociation,
          avatarUrl: creatorAvatarUrl,
          commentId: null,
        }}
      />
      {/* other comments */}
      {isSuccess &&
        data
          .filter((timelineItem) => timelineItem.event === 'commented')
          .map((comment, index) => (
            <Comment
              key={comment.id}
              commentData={{
                creator: comment.user.login,
                createTime: comment.created_at,
                body: comment.body,
                reactions: comment.reactions,
                authorAssociation: comment.author_association,
                avatarUrl: comment.user.avatar_url,
                commentId: comment.id,
              }}
            />
          ))}
      {/* create issue comment form */}
      <IssueCommentForm
        formContent={{
          title: null,
          setTitle: null,
          body: createCommentBody,
          setBody: (value) => {
            setCreateCommentBody(value);
          },
        }}
        type={'new-comment'}
        avatarUrl={creatorAvatarUrl}
        buttons={[
          <DropDownSelectButton
            key={0}
            selectedIssueAction={selectedIssueAction}
            action={{
              title: 'Close issue',
              icon:
                selectedIssueAction.state_reason === 'completed' ? (
                  <IssueClosedIcon fill="#8250df" />
                ) : (
                  <SkipIcon fill="#57606a" />
                ),
            }}
            actionType={[
              {
                title: 'Closed as completed',
                description: 'Done, closed, fixed, resolved',
                icon: <IssueClosedIcon fill="#8250df" />,
                state_reason: 'completed',
                handleClick: () =>
                  setSelectedIssueAction({
                    state: 'closed',
                    state_reason: 'completed',
                  }),
              },
              {
                title: 'Closed as not planned',
                description: "Won't fix, can't repro, duplicate, stale",
                icon: <SkipIcon fill="#57606a" />,
                state_reason: 'not_planned',
                handleClick: () =>
                  setSelectedIssueAction({
                    state: 'closed',
                    state_reason: 'not_planned',
                  }),
              },
            ]}
          />,
          <Button
            key={1}
            text={'Comment'}
            primary={true}
            disabled={createCommentBody === '' || isLoading}
            onClick={async () => {
              setIsLoading(true);
              await createComment({
                issueNumber: id,
                body: { body: createCommentBody },
              });
              setIsLoading(false);
              setCreateCommentBody('');
            }}
          />,
        ]}
      />
    </div>
  );
};

export default Main;
