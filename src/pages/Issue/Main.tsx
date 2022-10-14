import IssueCommentForm from '../../pages/NewIssue/IssueCommentForm';
import Comment from './Comment';
import Button from '../../components/buttons/Button';
import {
  useTimelineQuery,
  useCreateCommentMutation,
} from '../../redux/labelsApi';
import { useParams } from 'react-router-dom';
import { useState } from 'react';

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
          <Button
            key={0}
            text={'Close issue'}
            onClick={() => {}}
            margin={'0 5px 0 0'}
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
