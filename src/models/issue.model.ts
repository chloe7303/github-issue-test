export type IssueType = {
  title: string;
  number: number;
  state: string;
  user: {
    login: string;
  };
  created_at: string;
  comments: number;
};
