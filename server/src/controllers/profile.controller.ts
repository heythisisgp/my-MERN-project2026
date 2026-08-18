import type { Response } from "express";
import type { AuthenticatedRequest } from "../middleware/auth.middleware.js";

export const getMyProfile = (
  req: AuthenticatedRequest,
  res: Response
) => {
  res.status(200).json({
    success: true,
    message: "Protected profile route accessed",
    data: {
      user: req.user,
    },
  });
};
