const IconBeforeButton = ({ issueState: { state, icon, bgColorCode } }) => {
  return (
    <button
      className={`text-[14px] text-light p-2 px-3 rounded-3xl mr-2`}
      style={{ backgroundColor: `${bgColorCode}` }}
    >
      <span className="mr-1">{icon}</span>
      <span className="font-medium align-top">
        {state[0].toUpperCase() + state.substring(1)}
      </span>
    </button>
  );
};

export default IconBeforeButton;
