import Main from './Main';
import Sidebar from './Sidebar';
import IssueHeader from './IssueHeader';
import { useParams } from 'react-router-dom';
import { useIssueQuery } from '../../redux/labelsApi';

const Issue = () => {
  const { id } = useParams() as { id: string };
  const { data, error, isLoading, isSuccess } = useIssueQuery(id);
  console.log(data);

  return (
    <>
      {isLoading && <div>Loading</div>}
      {error && <div>Something went wrong</div>}
      {isSuccess && (
        <div className="py-[24px] max-w-[1280px] mx-auto px-[16px] md:px-[24px] lg:px-[32px]">
          <IssueHeader
            headerData={{
              title: data.title,
              number: data.number,
              state: data.state,
              creator: data.user.login,
              createTime: data.created_at,
              comments: data.comments,
            }}
          />
          <div className="flex flex-col md:flex-row">
            <Main
              issueData={{
                creator: data.user.login,
                creatorAvatarUrl: data.user.avatar_url,
                createTime: data.created_at,
                body: data.body,
                reactions: data.reactions,
                authorAssociation: data.author_association,
              }}
            />
            <Sidebar />
          </div>
        </div>
      )}
    </>
  );
};

export default Issue;
