import express from 'express'
import controller from '../Controller/controller.js';
const route = express();












route.get("/movies", controller.findMovies);
route.get("/favorite", controller.likedMovies);
route.get("/likedMovies", controller.likedMoviesList);



export default route;

