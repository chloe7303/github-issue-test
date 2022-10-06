export interface Label {
  id?: number;
  node_id?: string;
  url?: string;
  name: string;
  color: string;
  default?: boolean;
  description: string;
}

export interface Issue {
  title: string;
  body: string;
  assignees: [];
  labels: [];
}
