import { Router } from "express";
import {
  showMovies,
   showMovie,
    addMovie,
     updateMovie,
      deleteMovie
} from "./controllers.js";
const router = Router();
const movie = [

  {
 id: 1,   
name: "avatar",
type:"sci-fi"
  }
]
// get movies
router.get('/movies', showMovies)
// get movie
router.get('/movies/:id', showMovie)
// create movie
 router.post('/movies', addMovie)
// update movie
router.put('/movies/:id', updateMovie)
//delete movie
router.delete('/movies/:id', deleteMovie);



export const movieHub = router;
export default movie;