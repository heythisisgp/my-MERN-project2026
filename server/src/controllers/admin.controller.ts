import type {
  Request,
  Response,
} from "express";

export const adminDashboard = (
  _req: Request,
  res: Response
) => {
  res.status(200).json({
    success: true,
    message: "Welcome Admin",
  });
};
