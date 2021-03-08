import { Column, CreateDateColumn, Entity, JoinColumn, ManyToOne, PrimaryColumn } from "typeorm";

import { v4 as uuid} from "uuid"
import { Country } from "./Country";

@Entity("students")
 class Student{
     @PrimaryColumn()
     id: string;
     
     @Column()
     surname:string;
  
     @Column()
     full_name:string;
  
     @ManyToOne(type=>Country,student=>Student,{eager:true})
     country:Country[];
  
     @Column()
     number_phone:string;
     
     @CreateDateColumn()
     created_at:Date;


     constructor(){
         if(!this.id){
             this.id = uuid();
         }
     }



 }


 export {Student}