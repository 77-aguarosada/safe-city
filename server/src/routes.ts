
import {Router} from 'express';
import { RoomController } from './controllers/RoomController';
import { StudentController } from './controllers/StudentController';



const router = Router();

const studentController = new StudentController()


router.post("/students",studentController.create)

router.get("/students",studentController.show)

router.put("/students/:id",studentController.update)

router.delete("/students/:id",studentController.delete)
/*/**************************************************/

const roomController = new RoomController()
router.post("/students/rooms", roomController.create)
export {router}