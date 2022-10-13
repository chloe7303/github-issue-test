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
    total_count: number;
    ['+1']: number;
    ['-1']: number;
    laugh: number;
    hooray: number;
    confused: number;
    heart: number;
    rocket: number;
    eyes: number;
  };
  id: number;
};

export type Timeline = {
  user: {
    login: string;
    avatar_url: string;
  };
  created_at: string;
  body: string;
  reactions: {
    total_count: number;
    ['+1']: number;
    ['-1']: number;
    laugh: number;
    hooray: number;
    confused: number;
    heart: number;
    rocket: number;
    eyes: number;
  };
  author_association: string;
  event: string;
  id: number;
};
