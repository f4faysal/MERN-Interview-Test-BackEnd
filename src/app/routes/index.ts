import express from 'express';
import { DrawingRoutes } from '../modules/drawing/drawing.routes';

const router = express.Router();
const moduleRutes = [
  {
    path: '/drawings',
    route: DrawingRoutes,
  },
];

moduleRutes.forEach(route => router.use(route.path, route.route));
export default router;
