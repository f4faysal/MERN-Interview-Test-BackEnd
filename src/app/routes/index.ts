import express from 'express';
import { ColonyRoutes } from '../modules/drawing/drawing.routes';

const router = express.Router();
const moduleRutes = [
  {
    path: '/colonies',
    route: ColonyRoutes,
  },
];

moduleRutes.forEach(route => router.use(route.path, route.route));
export default router;
