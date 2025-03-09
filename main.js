import express from "express";
import movieRoutes from "./routes/movies.route.js"
import connectDB from "./lib/db.js";

const app = express();
const port = 6969;

// calling connectDB function
connectDB();

app.get('/', (req,res) => {
    res.json({msg: `Hello STudents:${port}`});
});

// crud functionality for movies
app.use("/movies", movieRoutes);


app.listen(port, () => {
    console.log(`The server is running at http://127.0.0.1:${port}`);
});