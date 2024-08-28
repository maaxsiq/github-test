import axios from 'axios';
import fs from 'fs';
import path from 'path';
import { Repository } from '../types/github';

const GITHUB_API_URL = 'https://api.github.com';
const FAVORITES_FILE = path.join(__dirname, '../data/favorites.json');

export const fetchMyRepos = async (): Promise<Repository[]> => {
  const response = await axios.get<Repository[]>(`${GITHUB_API_URL}/users/<YOUR_GITHUB_USERNAME>/repos`);
  return response.data;
};

export const searchReposByName = async (query: string): Promise<Repository[]> => {
  const response = await axios.get<{ items: Repository[] }>(`${GITHUB_API_URL}/search/repositories?q=${query}`);
  return response.data.items;
};

export const saveFavorite = (name: string): void => {
  const favorites = getFavoritesFromStorage();
  if (!favorites.includes(name)) {
    favorites.push(name);
    fs.writeFileSync(FAVORITES_FILE, JSON.stringify(favorites));
  }
};

export const getFavoritesFromStorage = (): string[] => {
  if (!fs.existsSync(FAVORITES_FILE)) {
    fs.writeFileSync(FAVORITES_FILE, JSON.stringify([]));
  }
  const data = fs.readFileSync(FAVORITES_FILE, 'utf-8');
  return JSON.parse(data);
};
