import { IssueOpenedIcon } from '@primer/octicons-react';
import Button from '../../components/buttons/Button';
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';

const IssueHeader = () => {
  const navigate = useNavigate();
  const [isEditing, setIsEditing] = useState(false);

  return (
    <>
      <div className="pb-4 mb-8 border-b border-border border-solid">
        {isEditing ? (
          <div className="flex justify-between mb-3 flex-col-reverse md:flex-row">
            <input className="border-border border-solid border rounded-md bg-default grow mr-4"></input>
            <div className="mb-4 md:mb-0">
              <Button text="Save" margin={'0 10px 0 0'} />
              <button
                className="text-emphasis text-[14px] hover:underline"
                onClick={() => setIsEditing(false)}
              >
                Cancel
              </button>
            </div>
          </div>
        ) : (
          <div className="flex justify-between mb-3 flex-col-reverse md:flex-row">
            <h1 className="md:text-[32px] text-[26px]">
              <span className="mr-2">test</span>
              <span className="text-muted">#68</span>
            </h1>
            <div className="mb-4 md:mb-0">
              <Button
                text="Edit"
                margin={'0 8px 0 0'}
                onClick={() => setIsEditing(true)}
              />
              <Button
                text="New issue"
                primary={true}
                onClick={() => navigate('/issues/new')}
              />
            </div>
          </div>
        )}
        <div>
          <button className="bg-primary text-light py-2 px-3 rounded-3xl mr-2">
            <IssueOpenedIcon verticalAlign="middle" className="mr-1" />
            <span>Open</span>
          </button>
          <span className="text-muted">
            <span className="font-semibold">chloe7303 </span>opened this issue 7
            hours ago · 0 comments
          </span>
        </div>
      </div>
      {/* mobile assignees & labels */}
      <div className="mb-6 border-b border-border border-solid md:hidden">
        <div className="mb-4">
          <span className="text-[12px] text-text font-semibold">Assignees</span>
        </div>
        <div className="mb-4">
          <span className="text-[12px] text-text font-semibold">Labels</span>
        </div>
      </div>
    </>
  );
};

export default IssueHeader;
