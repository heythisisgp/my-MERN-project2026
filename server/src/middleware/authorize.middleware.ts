import type {
  NextFunction,
  Response,
} from "express";

import type {
  AuthenticatedRequest,
} from "./auth.middleware.js";

export const authorize = (
  ...roles: string[]
) => {
  return (
    req: AuthenticatedRequest,
    res: Response,
    next: NextFunction
  ) => {
    if (!req.user) {
      res.status(401).json({
        success: false,
        message: "Unauthorized",
      });

      return;
    }

    if (!roles.includes(req.user.role)) {
      res.status(403).json({
        success: false,
        message: "Forbidden",
      });

      return;
    }

    next();
  };
};
