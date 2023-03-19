import express from 'express'
import { getScore, createScore } from '../controllers/score.js'
const routes = express.Router();

routes.get('/score', getScore);
routes.post('/postscore', createScore);

export default routes;
 