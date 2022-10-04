import Main from './Main';
import Sidebar from './Sidebar';

const NewIssue = () => {
  return (
    <div className="flex py-[24px] max-w-[1280px] mx-auto px-[16px] md:px-[24px] lg:px-[32px] flex-col md:flex-row">
      <Main />
      <Sidebar />
    </div>
  );
};

export default NewIssue;
