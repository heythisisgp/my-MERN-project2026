import { Router } from "express";
import authRoutes from "./auth.routes.js";
import profileRoutes from "./profile.routes.js";


// import healthRoutes from "./health.routes.js";

const router = Router();
router.use("/profile", profileRoutes);
// router.use("/health", healthRoutes);
router.use("/auth", authRoutes);

export default router;
