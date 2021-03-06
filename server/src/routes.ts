
import {Router} from 'express';
import { StudentController } from './controllers/StudentController';



const router = Router();

const studentController = new StudentController()


router.get("/students",studentController.create)


export {router}