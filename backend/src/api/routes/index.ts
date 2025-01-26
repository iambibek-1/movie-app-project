import express from "express";
import bodyParser from 'body-parser';
import userRoutes from "./userRoutes";
import genreRoutes from "./genreRoutes";
import directorRoutes from "./directorRoutes";
import movieRoutes from "./movieRoutes";

const router = express.Router();

router.use(bodyParser.urlencoded({ extended :true}));

router.use(bodyParser.json());

router.use('/users',userRoutes);

router.use('/genre',genreRoutes);

router.use('/director',directorRoutes);

router.use('/movie',movieRoutes);

export default router;