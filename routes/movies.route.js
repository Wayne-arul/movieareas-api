import express from 'express'

const router = express.Router();


// for getting the movies
router.get("/", (req,res) => {
    res.send("Get all movies list");
});

// for adding new movies
router.post("/", (req,res) => {
    res.send("create a ovie");
});


//for updating movies
router.put("/:id", (req,res) => {
    res.send("Delete a movie");
});

// deleting a movie
router.delete("/:id", () => {

});


export default router;