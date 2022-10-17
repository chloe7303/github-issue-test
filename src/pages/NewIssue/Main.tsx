import { useContext } from 'react';
import { useNavigate } from 'react-router-dom';
import { useCreateIssueMutation } from '../../redux/labelsApi';
import { NewIssueContext, NewIssueContextType } from './NewIssue';
import IssueCommentForm from './IssueCommentForm';
import Button from '../../components/buttons/Button';

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
      <IssueCommentForm
        type={'new-issue'}
        formContent={{
          title: issueForm.title,
          setTitle,
          body: issueForm.body,
          setBody,
        }}
        avatarUrl={'https://avatars.githubusercontent.com/u/57607232?s=80&v=4'}
        buttons={[
          <Button
            text={'Submit new issue'}
            primary={true}
            disabled={issueForm.title === ''}
            onClick={handleSubmit}
          />,
        ]}
      />
    </div>
  );
};

export default Main;
