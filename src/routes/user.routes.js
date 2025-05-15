import { Router } from "express";
import { UserController } from "../controllers/user.controller.js";
import { detector } from "../middlewares/device.detector.js";

const router = Router();
const controller = new UserController();

router
    .post('/', controller.createUser)
    .get('/signIn', detector , controller.signIn)


export default router