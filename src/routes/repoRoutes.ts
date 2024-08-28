import { Router } from 'express';
import { getMyRepos, searchRepos, getFavorites, addFavorite } from '../controllers/repoController';

const router: Router = Router();

/**
 * @swagger
 * /api/repos/my:
 *   get:
 *     summary: Retorna os repositórios do candidato
 *     responses:
 *       200:
 *         description: Lista de repositórios
 *         content:
 *           application/json:
 *             schema:
 *               type: array
 *               items:
 *                 type: object
 *                 properties:
 *                   name:
 *                     type: string
 *                   description:
 *                     type: string
 *                   language:
 *                     type: string
 *                   updated_at:
 *                     type: string
 *                   owner:
 *                     type: object
 *                     properties:
 *                       login:
 *                         type: string
 */
router.get('/my', getMyRepos);
router.get('/search', searchRepos);
router.get('/favorites', getFavorites);
router.post('/favorites', addFavorite);

export default router;
