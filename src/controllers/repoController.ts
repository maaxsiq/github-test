import { Request, Response } from 'express';
import { fetchMyRepos, searchReposByName } from '../services/githubService';
import { getFavoritesFromStorage, saveFavorite } from '../storage/favoritesStorage';

export const getMyRepos = async (req: Request, res: Response): Promise<void> => {
  try {
    const repos = await fetchMyRepos('<YOUR_GITHUB_USERNAME>');
    res.json(repos);
  } catch (error) {
    if (error instanceof Error) {
      res.status(500).json({ error: error.message });
    } else {
      res.status(500).json({ error: 'An unknown error occurred' });
    }
  }
};

export const searchRepos = async (req: Request, res: Response): Promise<void> => {
  const { q } = req.query;
  try {
    const repos = await searchReposByName(q as string);
    res.json(repos);
  } catch (error) {
    if (error instanceof Error) {
      res.status(500).json({ error: error.message });
    } else {
      res.status(500).json({ error: 'An unknown error occurred' });
    }
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
  } catch (error) {
    if (error instanceof Error) {
      res.status(500).json({ error: error.message });
    } else {
      res.status(500).json({ error: 'An unknown error occurred' });
    }
  }
};
