export const handler1 = (req,res) => {
    res.send('1');
}

export const handler2 = (req,res) => {
    res.redirect('http://google.com');
}

export const handler3 = (req, res) => {
    console.log(req.body);
    res.json({
        user: "kimjinpyo",
        id: "kjp",
        password: "123456",
    });
}

export const handle404 = (req,res) => {
    console.log("404 error");
    res.status(404).redirect('http://google.com/eeeee');
}