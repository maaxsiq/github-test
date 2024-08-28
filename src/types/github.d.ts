export interface Repository {
  name: string;
  description: string;
  language: string;
  updated_at: string;
  owner: {
    login: string;
  };
  contributors_url: string;
}

export interface Contributor {
  login: string;
  contributions: number;
}