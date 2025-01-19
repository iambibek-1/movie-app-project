import express from "express";
import bodyParser from 'body-parser';
import userRoutes from "./userRoutes";


const router = express.Router();

router.use(bodyParser.urlencoded({ extended :true}));

router.use(bodyParser.json());

router.use('/users',userRoutes);

export default router;