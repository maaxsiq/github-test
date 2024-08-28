import axios from 'axios';
import { Repository } from '../types/github';

const GITHUB_API_URL = 'https://api.github.com';

export const fetchMyRepos = async (username: string): Promise<Repository[]> => {
  const response = await axios.get<Repository[]>(`${GITHUB_API_URL}/users/${username}/repos`);
  return response.data;
};

export const searchReposByName = async (query: string): Promise<Repository[]> => {
  const response = await axios.get<{ items: Repository[] }>(`${GITHUB_API_URL}/search/repositories?q=${query}`);
  return response.data.items;
};
