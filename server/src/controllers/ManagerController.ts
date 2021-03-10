import { Response , Request} from "express"
import { getCustomRepository } from "typeorm";
import { ManagersRepository } from "../repositories/ManagersRepository";

class ManagerController{
    async create(request:Request, response:Response){
        const {name, email, password} = request.body;

        const managersRepository = getCustomRepository(ManagersRepository);

        const checkManegerExists = await managersRepository.findOne({
            where:{email},
        });
        
        if(checkManegerExists){
            throw new Error('Email address alredy used')
        }

        const manager = managersRepository.create({
            name, email, password
        })
        
        await managersRepository.save(manager)

        return response.send(manager);

    }

}

export{ManagerController}