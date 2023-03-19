import express from 'express'

import { getImage } from '../controllers/image.js'
const route = express.Router();

route.get('/image', getImage)
// route.post('/postimage', createImage)
export default route;
