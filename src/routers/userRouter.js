import express from "express";
import { 
    handleLogin,
    postJoin,
    getJoin,
    userList,   
} from "../handler/handler.js";

const userRouter = express.Router();


userRouter.all("/login",handleLogin);
userRouter.all("/:id/login",handleLogin);

userRouter.get("/join", getJoin);
userRouter.post("/join", postJoin);

userRouter.get("/list",userList);

export default userRouter;