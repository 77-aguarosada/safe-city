import { Response , Request} from "express"
import { getCustomRepository } from "typeorm";
import { RoomsRepository } from "../repositories/RoomsRepository";

class RoomController{

    async create( request:Request, response:Response){
        const {numberofRoom} = request.body;

        const roomsRepository = getCustomRepository(RoomsRepository);
        const stundAlreadyExists = await roomsRepository .findOne({
            numberofRoom,
        })

        if(stundAlreadyExists){
            return response.status(400).json({
                error:"Room already exits",
            })
        
        }

        const Roomstudent = roomsRepository .create({
            numberofRoom,
        })
        
        await roomsRepository .save(Roomstudent)

        return response.send(Roomstudent);


    }


}

export {RoomController}