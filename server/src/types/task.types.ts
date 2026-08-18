import { Document, Types } from "mongoose";

export enum TaskStatus {
  TODO = "TODO",
  IN_PROGRESS = "IN_PROGRESS",
  DONE = "DONE",
}

export enum TaskPriority {
  LOW = "LOW",
  MEDIUM = "MEDIUM",
  HIGH = "HIGH",
}

export interface ITask extends Document {
  title: string;

  description: string;

  project: Types.ObjectId;

  assignee: Types.ObjectId;

  status: TaskStatus;

  priority: TaskPriority;

  createdAt: Date;
  updatedAt: Date;
}
