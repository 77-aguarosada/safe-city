import { Response , Request} from "express"
import { getCustomRepository } from "typeorm";
import { StudentsRepository } from "../repositories/StudentsRepository";


class StudentController {
    async create(request:Request , response:Response){
       
        const {surname , full_name, country,number_phone} = request.body;

        const studentsRepository = getCustomRepository(StudentsRepository);

        const stundAlreadyExists = await studentsRepository.findOne({
            number_phone,
        })

        if(stundAlreadyExists){
            return response.status(400).json({
                error:"Studen already exits",
            })
        
        }

        const student = studentsRepository.create({
            surname , full_name, country,number_phone
        })
        
        await studentsRepository.save(student)

        return response.send(student);


    }

}

export {StudentController}