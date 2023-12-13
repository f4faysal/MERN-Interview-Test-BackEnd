import express from 'express';
import { ColonyRoutes } from '../modules/colony/colony.routes';

const router = express.Router();
const moduleRutes = [
 
  {
    path: '/colonies',
    route: ColonyRoutes,
  }
];

moduleRutes.forEach(route => router.use(route.path, route.route));
export default router;
