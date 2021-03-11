import { Response , Request} from "express"
import { getCustomRepository } from "typeorm";
import {hash} from 'bcryptjs'
import { ManagersRepository } from "../repositories/ManagersRepository";

class ManagerController{
    index(request:Request, response:Response){
        return response.send({managerID:request.managerId});
    }
    async create(request:Request, response:Response){
        const {name, email, password} = request.body;

        const managersRepository = getCustomRepository(ManagersRepository);

        const checkManegerExists = await managersRepository.findOne({
            where:{email},
        });
        
        if(checkManegerExists){
            throw new Error('Email address alredy used')
        }

        const hashedPassword = await hash(password, 8);
        const manager = managersRepository.create({
            name, 
            email, 
            password: hashedPassword,
        })
        
        await managersRepository.save(manager)

        return response.send(manager);

    }

}

export {ManagerController}
