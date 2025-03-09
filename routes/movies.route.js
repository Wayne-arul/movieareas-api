import express from 'express'
import { MovieCreate, MovieDelete, MovieIndex, MovieUpdate } from '../controllers/movies.controller.js';

const router = express.Router();


// for getting the movies
router.get("/", MovieIndex);

// for adding new movies
router.post("/", MovieCreate);


//for updating movies
router.put("/:id", MovieUpdate);

// deleting a movie
router.delete("/:id", MovieDelete);


export default router;