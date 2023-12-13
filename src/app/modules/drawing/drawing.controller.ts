import { Request, Response } from 'express';
import httpStatus from 'http-status';
import catchAsync from '../../../shared/catchAsync';
import sendResponse from '../../../shared/sendResponse';
import { IDrawing } from './drawing.interface';
import { DrawingService } from './drawing.service';

const insertIntoDB = catchAsync(async (req: Request, res: Response) => {
  const data = req.body;
  const result = await DrawingService.insertIntoDB(data);
  sendResponse<IDrawing>(res, {
    statusCode: httpStatus.OK,
    success: true,
    message: 'Drawing Create Succssfully!',
    data: result,
  });
});

const getAllData = catchAsync(async (req: Request, res: Response) => {
  const result = await DrawingService.getAllData();
  sendResponse(res, {
    statusCode: httpStatus.OK,
    success: true,
    message: 'All Data Retrived Succssfully!',
    data: result,
  });
});

const getSingleData = catchAsync(async (req: Request, res: Response) => {
  const { id } = req.params;
  const result = await DrawingService.getSingleData(id);
  sendResponse(res, {
    statusCode: httpStatus.OK,
    success: true,
    message: 'All Data Retrived Succssfully!',
    data: result,
  });
});

const updateData = catchAsync(async (req: Request, res: Response) => {
  const { id } = req.params;
  const data = req.body;
  const result = await DrawingService.updateData(id, data);
  sendResponse(res, {
    statusCode: httpStatus.OK,
    success: true,
    message: 'Data Updated Succssfully!',
    data: result,
  });
});

const deleteData = catchAsync(async (req: Request, res: Response) => {
  const { id } = req.params;
  const result = await DrawingService.deleteData(id);
  sendResponse(res, {
    statusCode: httpStatus.OK,
    success: true,
    message: 'Data Deleted Succssfully!',
    data: result,
  });
});

export const DrawingController = {
  insertIntoDB,
  getAllData,
  getSingleData,
  updateData,
  deleteData,
};
