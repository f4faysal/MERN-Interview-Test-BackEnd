import { Model } from 'mongoose';

type ICoordinates = {
  x: number;
  y: number;
};

type ILine = {
  type: 'line';
  coordinates: ICoordinates[];
  color: string;
  thickness: number;
};

type IShape = {
  type: 'rectangle' | 'circle';
  coordinates: ICoordinates;
  color: string;
  size: number;
};

type ITextAnnotation = {
  text: string;
  coordinates: ICoordinates;
  color: string;
};

export type IDrawing = {
  lines: ILine[];
  shapes: IShape[];
  textAnnotations: ITextAnnotation[];
  createdAt: Date;
  updatedAt: Date;
};

export type DrawingModel = Model<IDrawing, Record<string, unknown>>;
