const Assignee = ({ imgUrl, name }) => {
  return (
    <div className="flex items-center mb-2 cursor-pointer">
      <img
        src={imgUrl}
        alt="avatar"
        className="w-[20px] h-[20px] rounded-full mr-2"
      />
      <div className="font-semibold truncate sm:pt-[2px]">{name}</div>
    </div>
  );
};

export default Assignee;
