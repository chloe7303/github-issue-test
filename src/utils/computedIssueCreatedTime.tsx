const computedIssueCreatedTime = (createdTime) => {
  const milliseconds = +new Date() - +new Date(createdTime);
  const days = Math.floor(milliseconds / (24 * 3600 * 1000));
  const hours = Math.floor(milliseconds / (3600 * 1000));
  const minutes = Math.floor(milliseconds / (60 * 1000));
  const seconds = Math.round(milliseconds / 1000);
  if (days > 0) {
    return `${days} days ago`;
  } else if (hours > 0) {
    return `${hours} hours ago`;
  } else if (minutes > 0) {
    return `${minutes} minutes ago`;
  } else if (seconds > 0) {
    return `${seconds} seconds ago`;
  }
};

export default computedIssueCreatedTime;
