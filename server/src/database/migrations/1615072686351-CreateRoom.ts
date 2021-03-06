import {MigrationInterface, QueryRunner, Table} from "typeorm";

export class CreateRoom1615072686351 implements MigrationInterface {

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.createTable(
            new Table({
                name:"bedrooms",
                columns:[
                 
                    {
                        name:"id",
                        type:"varchar",
                        isPrimary:true,
                    },
                    {
                        name:"numberofRoom",
                        type:"varchar",
                        
                    },
                 
                ]
            })
        )
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.dropTable("bedrooms")
    }

}
