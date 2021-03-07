import { Column, Entity,CreateDateColumn, PrimaryColumn } from "typeorm";
import { v4 as uuid} from "uuid"

@Entity("bedrooms")
class Room {
    @PrimaryColumn()
    id:string;

    @Column()
    numberofRoom:number;
    
    @CreateDateColumn()
    created_at:Date;
    
    constructor(){
        if(!this.id){
            this.id = uuid();
        }
    }





}

export {Room}