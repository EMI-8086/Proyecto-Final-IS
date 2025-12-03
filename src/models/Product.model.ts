import { Table, Column, Model, DataType } from 'sequelize-typescript'
//decoradores que no reconoce ts
@Table({
    tableName: 'products'
})

export default class Product extends Model{
    @Column({
        type: DataType.STRING(100   )
    })
    name: string
    @Column({
        type: DataType.FLOAT(6, 2)
    })
    price: number

    @Column({
        type: DataType.BOOLEAN
    })
    availability: boolean
}
