import express from "express";

const app = express();
const port = 6969;

app.get('/', (req,res) => {
    res.json({msg: `Hello STudents:${port}`});
});

// crud functionality for movies

// for getting the movies
app.get("/movies", () => {

});

// for adding new movies
app.post("/movies", () => {

});


//for updating movies
app.put("/movies/:id", () => {

});

// deleting a movie
app.delete("/movies/:id", () => {

});


app.listen(port, () => {
    console.log(`The server is running at http://127.0.0.1:${port}`);
});