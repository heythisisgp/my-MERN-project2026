import { Router } from "express";
import { getMyProfile } from "../controllers/profile.controller.js";
import { authenticate } from "../middleware/auth.middleware.js";

const router = Router();

router.get("/me", authenticate, getMyProfile);

export default router;
