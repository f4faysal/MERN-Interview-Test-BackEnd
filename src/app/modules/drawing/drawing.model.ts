import { Schema, model } from 'mongoose';
import { DrawingModel, IDrawing } from './drawing.interface';

const drawingSchema = new Schema<IDrawing, DrawingModel>(
  {
    lines: [
      {
        type: {
          type: String,
          enum: ['line'],
          required: true,
        },
        coordinates: [
          {
            x: { type: Number, required: true },
            y: { type: Number, required: true },
          },
        ],
        color: { type: String, required: true },
        thickness: { type: Number, required: true },
      },
    ],
    shapes: [
      {
        type: {
          type: String,
          enum: ['rectangle', 'circle'],
          required: true,
        },
        coordinates: {
          x: { type: Number, required: true },
          y: { type: Number, required: true },
        },
        color: { type: String, required: true },
        size: { type: Number, required: true },
      },
    ],
    textAnnotations: [
      {
        text: { type: String, required: true },
        coordinates: {
          x: { type: Number, required: true },
          y: { type: Number, required: true },
        },
        color: { type: String, required: true },
      },
    ],
  },
  {
    timestamps: true,
    toJSON: {
      virtuals: true,
    },
  }
);

export const Drawing = model('Drawing', drawingSchema);
