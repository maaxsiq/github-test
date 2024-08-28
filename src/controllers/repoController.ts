import { Request, Response } from 'express';
import { fetchMyRepos, searchReposByName, saveFavorite, getFavoritesFromStorage } from '../services/githubService';

export const getMyRepos = async (req: Request, res: Response): Promise<void> => {
  try {
    const repos = await fetchMyRepos();
    res.json(repos);
  } catch (error: any) {
    res.status(500).json({ error: error.message });
  }
};

export const searchRepos = async (req: Request, res: Response): Promise<void> => {
  const { q } = req.query;
  try {
    const repos = await searchReposByName(q as string);
    res.json(repos);
  } catch (error: any) {
    res.status(500).json({ error: error.message });
  }
};

export const getFavorites = (req: Request, res: Response): void => {
  const favorites = getFavoritesFromStorage();
  res.json(favorites);
};

export const addFavorite = (req: Request, res: Response): void => {
  const { name } = req.body;
  try {
    saveFavorite(name);
    res.status(201).json({ message: 'Favorite added successfully' });
  } catch (error: any) {
    res.status(500).json({ error: error.message });
  }
};
