import movie from "./index.js";




const showMovies = (req, res) => {
    res.send(movie);
}
const showMovie = (req, res) => {
    let singleMovie = req.params.id
    let response = movie.find(x => x.id == singleMovie)
    res.send(response);
}
const addMovie = (req, res) => {
    let newMovie = {
        id: movie.length + 1,
        name: req.body.name,
        type: req.body.type
    }
    let pusher = movie.push(newMovie)
    if (pusher) {
        res.send("inserting successful").status(200);
    }
    else {
        res.send("error");
    }
}
const updateMovie=(req,res)=>{
    let singleMovie=req.params.id
  
    let getMovie= movie.find((x)=>x.id==parseInt(singleMovie));
    
  getMovie.name=req.body.name
  getMovie.type=req.body.type
  res.send( "movie aupdated successfuly")
}
const deleteMovie=(req,res)=>{
    let singleMovie = req.params.id;
  let getMovie = movie.find((x) => x.id ==parseInt (singleMovie));

  if (!getMovie) {
    res.send("invalid input").status(400);
   }
  
      let indexToSplice = movie.indexOf(getMovie)
      if (movie.splice(indexToSplice, 1)){
        res.send("deleting data successful").status(200);
      }
      else{
        res.send("deleting data failed");  
      }
}
export { showMovies, showMovie, addMovie, updateMovie, deleteMovie };