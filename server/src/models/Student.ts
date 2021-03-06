import { Column, CreateDateColumn, Entity, PrimaryColumn } from "typeorm";

import { v4 as uuid} from "uuid"

@Entity("students")
 class Student{
     @PrimaryColumn()
     id: string;
     
     @Column()
     surname:string;
  
     @Column()
     full_name:string;
  
     @Column()
     country:string;
  
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