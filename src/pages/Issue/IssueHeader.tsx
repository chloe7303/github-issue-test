import { IssueOpenedIcon } from '@primer/octicons-react';
import Button from '../../components/buttons/Button';

const IssueHeader = () => {
  return (
    <div className="py-[24px] max-w-[1280px] mx-auto px-[16px] md:px-[24px] lg:px-[32px] border-b border-border border-solid">
      <div className="flex justify-between mb-3 flex-col-reverse md:flex-row">
        <h1 className="md:text-[32px] text-[26px]">
          <span className="mr-2">test</span>
          <span className="text-muted">#68</span>
        </h1>
        <div className="mb-4 md:mb-0">
          <Button text="Edit" margin={'0 8px 0 0'} />
          <Button text="New issue" primary={true} />
        </div>
      </div>
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
  );
};

export default IssueHeader;
