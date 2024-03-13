import { Column, CreatedAt, DataType, Model, Table, UpdatedAt } from 'sequelize-typescript';
import { poderesDto } from '../dto/create-heroes-villano.dto';

@Table
export class HeroesVillanos extends Model {

    @Column(
        {
            type: DataType.INTEGER,
            autoIncrement: true,
            primaryKey: true,
            allowNull: false,
        }
    )
    id: number;

    @Column
    nombre: string;
  
    @Column
    tipo: string;

    @Column
    img: string;

    @Column({
        type: DataType.ARRAY(DataType.STRING)
    })
    poderes: [];
  
    @Column
    user_id: string;

    @CreatedAt
    @Column
    createdAt: Date;
  
    @UpdatedAt
    @Column
    updatedAt: Date;
  
}
