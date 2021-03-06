import { Column, Entity,CreateDateColumn, PrimaryGeneratedColumn } from "typeorm";

@Entity("bedrooms")
class Room {
    @PrimaryGeneratedColumn()
    id:number;

    @Column()
    numberofRoom:number;
    
    @CreateDateColumn()
    created_at:Date;
    


}

export {Room}