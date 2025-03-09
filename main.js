import express from "express";

const app = express();
const port = 6969;

app.get('/', (req,res)=> {
    res.json({msg: `Hello STudents:${port}`});
})

app.listen(port, () => {
    console.log(`The server is running at http://127.0.0.1:${port}`);
})