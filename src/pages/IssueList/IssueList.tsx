import Subnav from './Subnav';
import IssueBox from './IssueBox';
import Pagination from './Pagination';

const IssueList = () => {
  return (
    <div className="py-[24px] max-w-[1280px] mx-auto sm:px-[16px] md:px-[24px] lg:px-[32px]">
      <Subnav />
      <IssueBox />
      <Pagination />
    </div>
  );
};

export default IssueList;
