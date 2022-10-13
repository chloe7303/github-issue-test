export type IssueType = {
  title: string;
  number: number;
  state: string;
  user: {
    login: string;
    avatar_url: string;
  };
  created_at: string;
  comments: number;
  body: string;
  author_association: string;
  reactions: {
    ['+1']: number;
    ['-1']: number;
    laugh: number;
    hooray: number;
    confused: number;
    heart: number;
    rocket: number;
    eyes: number;
  };
};
