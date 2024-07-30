export interface IClientTransformedIssue {
  id: number;
  url: string;
  title: string;
  description: string;
  priority: string;
  isCreated?: boolean;
  isUpdated?: boolean;
}
