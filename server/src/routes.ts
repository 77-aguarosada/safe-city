
import {Router} from 'express';
import { StudentController } from './controllers/StudentController';



const router = Router();

const studentController = new StudentController()


router.post("/students",studentController.create)

router.get("/students",studentController.show)

router.put("/students/:id",studentController.update)

export {router}