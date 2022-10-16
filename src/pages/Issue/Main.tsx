import IssueCommentForm from '../../pages/NewIssue/IssueCommentForm';
import Comment from './Comment';
import Button from '../../components/buttons/Button';
import {
  useTimelineQuery,
  useCreateCommentMutation,
  useUpdateIssueMutation,
} from '../../redux/labelsApi';
import { useParams } from 'react-router-dom';
import { useState } from 'react';
import DropDownSelectButton from './DropDownSelectButton';
import {
  IssueClosedIcon,
  IssueReopenedIcon,
  SkipIcon,
} from '@primer/octicons-react';

const Main = ({
  issueData: {
    creator,
    creatorAvatarUrl,
    createTime,
    body,
    reactions,
    authorAssociation,
    state,
    state_reason,
  },
}) => {
  // console.log('stete', state);
  const { id } = useParams() as { id: string };
  const [createComment] = useCreateCommentMutation();
  const [updateIssue] = useUpdateIssueMutation();
  const { data, error, isSuccess } = useTimelineQuery(id);
  const [createCommentBody, setCreateCommentBody] = useState('');
  const [isLoading, setIsLoading] = useState(false);

  const changeIssueState = async () => {
    await updateIssue({ number: id, body: selectedIssueAction.body });
    console.log(state, state_reason);
    setSelectedIssueAction(
      initialSelectedIssueAction(
        selectedIssueAction.body.state,
        selectedIssueAction.body.state_reason
      )
    );
  };

  const issueActionStateType = {
    open: {
      defaultAction: {
        title: 'Close issue',
        icon: <IssueClosedIcon fill="#8250df" />,
        body: {
          state: 'closed',
          state_reason: 'completed',
        },
      },
      actionType: [
        {
          title: 'Closed as completed',
          description: 'Done, closed, fixed, resolved',
          icon: <IssueClosedIcon fill="#8250df" />,
          state_reason: 'completed',
          handleClick: () =>
            setSelectedIssueAction({
              title: 'Close issue',
              icon: <IssueClosedIcon fill="#8250df" />,
              body: {
                state: 'closed',
                state_reason: 'completed',
              },
            }),
        },
        {
          title: 'Closed as not planned',
          description: "Won't fix, can't repro, duplicate, stale",
          icon: <SkipIcon fill="#57606a" />,
          state_reason: 'not_planned',
          handleClick: () =>
            setSelectedIssueAction({
              title: 'Close issue',
              icon: <SkipIcon fill="#57606a" />,
              body: {
                state: 'closed',
                state_reason: 'not_planned',
              },
            }),
        },
      ],
    },
    closed: {
      completed: {
        defaultAction: {
          title: 'Reopen',
          icon: <IssueReopenedIcon fill="#1a7f37" />,
          body: {
            state: 'open',
            state_reason: 'reopened',
          },
        },
        actionType: [
          {
            title: 'Reopen',
            description: '',
            icon: <IssueReopenedIcon fill="#1a7f37" />,
            state_reason: 'reopened',
            handleClick: () =>
              setSelectedIssueAction({
                title: 'Reopen',
                icon: <IssueReopenedIcon fill="#1a7f37" />,
                body: {
                  state: 'open',
                  state_reason: 'reopened',
                },
              }),
          },
          {
            title: 'Closed as not planned',
            description: '',
            icon: <SkipIcon fill="#57606a" />,
            state_reason: 'not_planned',
            handleClick: () =>
              setSelectedIssueAction({
                title: 'Close as not planned',
                icon: <SkipIcon fill="#57606a" />,
                body: {
                  state: 'closed',
                  state_reason: 'not_planned',
                },
              }),
          },
        ],
      },
      not_planned: {
        defaultAction: {
          title: 'Reopen',
          icon: <IssueReopenedIcon fill="#1a7f37" />,
          body: {
            state: 'open',
            state_reason: 'reopened',
          },
        },
        actionType: [
          {
            title: 'Reopen',
            description: '',
            icon: <IssueReopenedIcon fill="#1a7f37" />,
            state_reason: 'reopened',
            handleClick: () =>
              setSelectedIssueAction({
                title: 'Reopen',
                icon: <IssueReopenedIcon fill="#1a7f37" />,
                body: {
                  state: 'open',
                  state_reason: 'reopened',
                },
              }),
          },
          {
            title: 'Closed as completed',
            description: '',
            icon: <IssueClosedIcon fill="#8250df" />,
            state_reason: 'completed',
            handleClick: () =>
              setSelectedIssueAction({
                title: 'Close as completed',
                icon: <IssueClosedIcon fill="#8250df" />,
                body: {
                  state: 'closed',
                  state_reason: 'completed',
                },
              }),
          },
        ],
      },
    },
  };

  const initialSelectedIssueAction = (state, state_reason) => {
    if (state === 'open') {
      const { title, icon, body } = issueActionStateType[state].defaultAction;
      return {
        title,
        icon,
        body,
      };
    } else if (state === 'closed') {
      const { title, icon, body } =
        issueActionStateType[state][state_reason].defaultAction;
      return {
        title,
        icon,
        body,
      };
    }
  };

  const [selectedIssueAction, setSelectedIssueAction] = useState(() =>
    initialSelectedIssueAction(state, state_reason)
  );

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
          .map((comment) => (
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
            handleSubmit={changeIssueState}
            selectedIssueAction={selectedIssueAction}
            actionType={
              state === 'open'
                ? issueActionStateType.open.actionType
                : issueActionStateType[state][state_reason].actionType
            }
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
