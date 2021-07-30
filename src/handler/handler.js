import User from "../models/User";
import path from "path";

export const handler1 = (req,res) => {
    res.send('1');
}

export const handler2 = (req,res) => {
    res.redirect('http://google.com');
}

export const handleLogin = (req, res) => {
    console.log(req.body);
    res.json({
        user: "kimjinpyo",
        id: "kjp",
        password: "123456",
    });
}
export const getJoin = (req,res) => {          //using for debugging not build
    res.sendFile(path.join(process.cwd(), "/src/views/join.html"));
}


export const postJoin = async(req,res) => {
    console.log(req.body);
    const {userName, userEmail, userPwd} = req.body
    try{
        await User.create({
            userName: userName,
            userEmail: userEmail,
            userPwd: userPwd,
        })
    }catch(error){
        console.log("!!!join error!!!");
        res.sendStatus(400);
    }
    console.log("!!!!!join success!!!!!");
    res.sendStatus(200);
}
export const userList = async(req,res) => {
    try{
    const userList = await User.find({});
    console.log(userList);
    res.status(200).send(userList);
    }catch(error){
        res.sendStatus(400)
    }
}

export const handle404 = (req,res) => {
    console.log("404 error");
    res.status(404).redirect('http://google.com/eeeee');
}