import express from "express";
import { 
  handleUserSignUp, 
  handleUserLogin, 
  handleUserLogout 
} from "../controllers/auth.js";

const authRouter = express.Router();

authRouter.use("/signup", handleUserSignUp);
authRouter.use("/login", handleUserLogin);
authRouter.use("/logout", handleUserLogout);

export default authRouter;