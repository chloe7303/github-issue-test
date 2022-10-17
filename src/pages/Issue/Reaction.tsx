const iconList = {
  '+1': '👍',
  '-1': '👎',
  laugh: '😄',
  hooray: '🎉',
  confused: '😕',
  heart: '❤️',
  rocket: '🚀',
  eyes: '👀',
};

const Reaction = ({ icon, number }) => {
  if (!number) return <></>;
  return (
    <button className="p-1 px-2 border border-border border-solid rounded-2xl text-text hover:bg-default mr-1.5">
      <span className="inline-block w-[16px] mr-2.5">{iconList[icon]}</span>
      <span className="inline-block text-[14px]">{number}</span>
    </button>
  );
};

export default Reaction;
