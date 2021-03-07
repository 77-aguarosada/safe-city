import { Column, Entity,CreateDateColumn, PrimaryColumn } from "typeorm";
import { v4 as uuid} from "uuid"

class Coutry {
    @PrimaryColumn()
    id:string;

    @Column()
    countryStudent:number;
    
    @CreateDateColumn()
    created_at:Date;
    
    constructor(){
        if(!this.id){
            this.id = uuid();
        }
    }
}

export{Coutry}