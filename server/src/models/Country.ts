import { Column, Entity,CreateDateColumn, PrimaryColumn } from "typeorm";
import { v4 as uuid} from "uuid"

@Entity("countries")
class Country {
    @PrimaryColumn()
    id:string;

    @Column()
    countryStudent:string;
    
    @CreateDateColumn()
    created_at:Date;
    
    constructor(){
        if(!this.id){
            this.id = uuid();
        }
    }
}

export{Country}