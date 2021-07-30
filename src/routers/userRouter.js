import express from "express";
import { 
    postLogin,
    postJoin,
    getJoin,
    userList,   
} from "../handler/handler.js";

const userRouter = express.Router();


userRouter.post("/login",postLogin);

userRouter.get("/join", getJoin);
userRouter.post("/join", postJoin);

userRouter.get("/list",userList);

export default userRouter;