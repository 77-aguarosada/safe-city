import { Column, CreateDateColumn, Entity, PrimaryColumn } from "typeorm";

import { v4 as uuid} from "uuid"

@Entity("students")
 class Student{
     @PrimaryColumn()
     id: string;
     
     @Column("surname")
     surname:string;
  
     @Column("full_name")
     full_name:string;
  
     @Column("country")
     country:string;
  
     @Column("number_phone")
     number_phone:string;
     
     @CreateDateColumn()
     create_at: Date;

     constructor(){
         if(!this.id){
             this.id = uuid();
         }
     }



 }


 export {Student}