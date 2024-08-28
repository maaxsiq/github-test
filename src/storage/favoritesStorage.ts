import fs from 'fs';
import path from 'path';

const FAVORITES_FILE = path.join(__dirname, '../../data/favorites.json');

export const getFavoritesFromStorage = (): string[] => {
  if (!fs.existsSync(FAVORITES_FILE)) {
    fs.writeFileSync(FAVORITES_FILE, JSON.stringify([]));
  }
  const data = fs.readFileSync(FAVORITES_FILE, 'utf-8');
  return JSON.parse(data);
};

export const saveFavorite = (name: string): void => {
  const favorites = getFavoritesFromStorage();
  if (!favorites.includes(name)) {
    favorites.push(name);
    fs.writeFileSync(FAVORITES_FILE, JSON.stringify(favorites));
  }
};