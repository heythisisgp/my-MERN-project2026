import { Router } from "express";

import { adminDashboard }
from "../controllers/admin.controller.js";

import { authenticate }
from "../middleware/auth.middleware.js";

import { authorize }
from "../middleware/authorize.middleware.js";

const router = Router();

router.get(
  "/dashboard",
  authenticate,
  authorize("ADMIN"),
  adminDashboard
);

export default router;
