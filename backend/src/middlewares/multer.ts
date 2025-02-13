import { Request, Response, NextFunction } from "express";
import multer , {StorageEngine} from 'multer';
import path from 'path';

export class Multer {
    public storage: StorageEngine;

    constructor(){
        this.storage = multer.diskStorage({
            destination(req, file, callback){
                callback(null, path.join(__dirname,'../../uploads'));
            },
            filename(req,file,callback){
                const filename = `${Date.now()}-${file.originalname}`;
                callback (null, filename);
            }
        })

    }

    public uploadSingle = (fieldName:string)=>{
        return (req:Request, res:Response,next:NextFunction)=>{
            const upload = multer({
                storage: this.storage,
            }).single(fieldName);


            upload (req,res,(err:any)=>{
                if(err){
                    res.status(400).json({error:err.message});
                    return;
                }
                next()
            });
        };
    };
}