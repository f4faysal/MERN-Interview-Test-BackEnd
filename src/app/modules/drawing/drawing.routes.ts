import express from 'express';
import { DrawingController } from './drawing.controller';

const router = express.Router();

router.get('/', DrawingController.getAllData);
router.get('/:id', DrawingController.getSingleData);
router.patch(
  '/:id',

  DrawingController.updateData
);
router.delete('/:id', DrawingController.deleteData);
router.post(
  '/create-drawing',

  DrawingController.insertIntoDB
);

export const DrawingRoutes = router;
