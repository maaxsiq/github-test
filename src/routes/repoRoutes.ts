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
 *         description: Lista de repositórios do candidato
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

/**
 * @swagger
 * /api/repos/search:
 *   get:
 *     summary: Procura por repositórios no GitHub usando nome ou parte do nome
 *     parameters:
 *       - in: query
 *         name: q
 *         schema:
 *           type: string
 *         required: true
 *         description: Nome ou parte do nome do repositório a ser buscado
 *     responses:
 *       200:
 *         description: Lista de repositórios que correspondem ao critério de busca
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
router.get('/search', searchRepos);

/**
 * @swagger
 * /api/repos/favorites:
 *   get:
 *     summary: Lista todos os repositórios marcados como favoritos por usuários da API
 *     responses:
 *       200:
 *         description: Lista de repositórios favoritos
 *         content:
 *           application/json:
 *             schema:
 *               type: array
 *               items:
 *                 type: string
 */
router.get('/favorites', getFavorites);

/**
 * @swagger
 * /api/repos/favorites:
 *   post:
 *     summary: Marca um repositório como favorito
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             properties:
 *               name:
 *                 type: string
 *                 description: Nome do repositório a ser marcado como favorito
 *     responses:
 *       201:
 *         description: Repositório marcado como favorito com sucesso
 *       400:
 *         description: Requisição inválida, nome do repositório não fornecido
 */
router.post('/favorites', addFavorite);

export default router;
