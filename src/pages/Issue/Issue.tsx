import { createContext, useState } from 'react';
import Main from './Main';
import Sidebar from './Sidebar';
import IssueHeader from './IssueHeader';

export type NewIssueContextType = {
  issueForm: IssueForm;
  setIssueForm: Function;
};
export type IssueForm = {
  title: string;
  body: string;
  assignees: string[];
  labels: string[];
};

export const NewIssueContext = createContext<NewIssueContextType | null>(null);
const Issue = () => {
  const [issueForm, setIssueForm] = useState<IssueForm>({
    title: '',
    body: '',
    assignees: [],
    labels: [],
  });
  return (
    <NewIssueContext.Provider value={{ issueForm, setIssueForm }}>
      <div className="py-[24px] max-w-[1280px] mx-auto px-[16px] md:px-[24px] lg:px-[32px]">
        <IssueHeader />
        <div className="flex flex-col md:flex-row">
          <Main />
          <Sidebar />
        </div>
      </div>
    </NewIssueContext.Provider>
  );
};

export default Issue;
