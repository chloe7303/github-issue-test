import IssueCommentForm from '../../pages/NewIssue/IssueCommentForm';
import Comment from './Comment';

const Main = () => {
  return (
    <div className="grow md:mr-6">
      <div className="flex">
        <div className="mr-4 hidden md:block">
          <img
            className="w-10 h-10 rounded-full inline"
            src="https://avatars.githubusercontent.com/u/57607232?s=80&v=4"
            alt="avatar"
          />
        </div>
        <Comment owner={true} />
      </div>
      <div className="flex">
        <div className="mr-4 hidden md:block">
          <img
            className="w-10 h-10 rounded-full inline"
            src="https://avatars.githubusercontent.com/u/57607232?s=80&v=4"
            alt="avatar"
          />
        </div>
        <IssueCommentForm
          handleSubmit={() => {}}
          formContent={{
            title: null,
            setTitle: null,
            body: '',
            setBody: () => {},
          }}
          type={'new-comment'}
        />
      </div>
    </div>
  );
};

export default Main;
