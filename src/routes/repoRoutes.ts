import { Router } from 'express';
import { getMyRepos, searchRepos, getFavorites, addFavorite } from '../controllers/repoController';

const router: Router = Router();

router.get('/my', getMyRepos);
router.get('/search', searchRepos);
router.get('/favorites', getFavorites);
router.post('/favorites', addFavorite);

export default router;