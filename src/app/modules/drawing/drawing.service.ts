import { Drawing } from './drawing.model';
import { IDrawing } from './drawing.interface';

const insertIntoDB = async (data: IDrawing): Promise<IDrawing> => {
  const result = await Drawing.create(data);
  return result;
};

const getAllData = async (): Promise<IDrawing[]> => {
  const result = await Drawing.find({});
  return result;
};

const getSingleData = async (id: string): Promise<IDrawing | null> => {
  const result = await Drawing.findOne({ _id: id });
  return result;
};

const updateData = async (
  id: string,
  payload: Partial<IDrawing>
): Promise<IDrawing | null> => {
  const result = await Drawing.findOneAndUpdate({ _id: id }, payload, {
    new: true,
  });
  return result;
};

const deleteData = async (id: string): Promise<IDrawing | null> => {
  const result = await Drawing.findOneAndDelete({ _id: id });
  return result;
};

export const DrawingService = {
  insertIntoDB,
  getAllData,
  getSingleData,
  updateData,
  deleteData,
};
