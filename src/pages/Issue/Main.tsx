import { useContext } from 'react';
import { useNavigate } from 'react-router-dom';
import { useCreateIssueMutation } from '../../redux/labelsApi';
import { NewIssueContext, NewIssueContextType } from './Issue';
import IssueCommentForm from '../../pages/NewIssue/IssueCommentForm';

const Main = () => {
  const { issueForm, setIssueForm } = useContext(
    NewIssueContext
  ) as NewIssueContextType;
  const navigate = useNavigate();
  const [createIssue] = useCreateIssueMutation();

  const handleSubmit = async () => {
    setIssueForm({
      title: '',
      body: '',
      assignees: [],
      labels: [],
    });
    await createIssue(issueForm);
    return navigate('/issues');
  };

  const setTitle = (value) => {
    setIssueForm((prevValue) => ({
      ...prevValue,
      title: value,
    }));
  };

  const setBody = (value) => {
    setIssueForm((prevValue) => ({
      ...prevValue,
      body: value,
    }));
  };

  return (
    <div className="grow flex md:mr-6">
      <div className="mr-4 hidden md:block">
        <img
          className="w-10 h-10 rounded-full inline"
          src="https://avatars.githubusercontent.com/u/57607232?s=80&v=4"
          alt="avatar"
        />
      </div>
      <IssueCommentForm
        handleSubmit={handleSubmit}
        title={null}
        body={issueForm.body}
        setTitle={null}
        setBody={setBody}
      />
    </div>
  );
};

export default Main;
