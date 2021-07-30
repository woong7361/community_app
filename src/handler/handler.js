import User from "../models/User";
import path from "path";

export const handler1 = (req,res) => {
    res.send('1');
}

export const handler2 = (req,res) => {
    res.redirect('http://google.com');
}

export const postLogin = async(req, res) => {
    const{userEmail, userPwd} = req.body;
    let message;
    const user = await User.findOne({userEmail:userEmail});
    if(!user){ //if email is not exist
        message = "email is not exist";
        console.log(message);
        return res.status(204).json({'message': message});
    }
    if(!(user.userPwd === userPwd)){ //if pwd is not matched
        message = "password is not matched";
        console.log(message);
        return res.status(204).json({'message': message});
    }
    message = "login succeess";
    console.log(message);
    return res.status(200).json({'message': message});

}
export const getJoin = (req,res) => {          //using for debugging not build
   return res.sendFile(path.join(process.cwd(), "/src/views/join.html"));
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
        console.log("!!!join error!!!", error);
        return res.status(400).json({'code':400});
    }
    console.log("!!!!!join success!!!!!");
    return res.status(200).json({'code':200});
}
export const userList = async(req,res) => {
    try{
        const userList = await User.find({});
        console.log(userList);
        return res.status(200).send(userList);
    }catch(error){
        return res.sendStatus(400);
    }
}

export const handle404 = (req,res) => {
    console.log("404 error");
    res.status(404).redirect('http://google.com/eeeee');
}