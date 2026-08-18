import { Document } from "mongoose";

export enum UserRole {
  ADMIN = "ADMIN",
  MANAGER = "MANAGER",
  USER = "USER",
}

export interface IUser extends Document {
  firstName: string;
  lastName: string;
  email: string;
  role: UserRole;
  isActive: boolean;

  createdAt: Date;
  updatedAt: Date;
}

