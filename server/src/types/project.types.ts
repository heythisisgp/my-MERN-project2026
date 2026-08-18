import { Document, Types } from "mongoose";

export enum ProjectStatus {
  PLANNING = "PLANNING",
  IN_PROGRESS = "IN_PROGRESS",
  COMPLETED = "COMPLETED",
  ON_HOLD = "ON_HOLD",
}

export interface IProject extends Document {
  name: string;
  description: string;

  manager: Types.ObjectId;

  members: Types.ObjectId[];

  status: ProjectStatus;

  startDate: Date;

  endDate?: Date;

  createdAt: Date;
  updatedAt: Date;
}
