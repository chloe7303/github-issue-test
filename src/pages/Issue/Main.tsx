import IssueCommentForm from '../../pages/NewIssue/IssueCommentForm';
import Comment from './Comment';
import Button from '../../components/buttons/Button';

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
        }}
      />
      {/* other comments */}
      {/* create issue comment form */}
      <IssueCommentForm
        formContent={{
          title: null,
          setTitle: null,
          body: '',
          setBody: () => {},
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
            // disabled={}
            onClick={() => {}}
          />,
        ]}
      />
    </div>
  );
};

export default Main;
