import request  from "supertest";
import server from "../../server";
import { ExclusionConstraintError } from "sequelize";

describe('POST /api/productos', ()=>{
    //errores de validación
    it('should display validation errors', async () => {
        const response = await request(server).post('/api/productos').send({})
        expect(response.status).toBe(400)
        expect(response.body).toHaveProperty('errors')
        expect(response.body.errors).toHaveLength(4)

        expect(response.status).not.toBe(404)
        expect(response.body.errors).not.toHaveLength(2)

    })
    
    //errores validar precio mayor a 0
    it('should validate that price is greater than 0', async () => {
        const response = await request(server).post('/api/productos').send({
            name: 'd',
            price: 0
        })
        expect(response.status).toBe(400)
        expect(response.body).toHaveProperty('errors')
        expect(response.body.errors).toHaveLength(1)//solo un mensaje de error

        expect(response.status).not.toBe(404)
        expect(response.body.errors).not.toHaveLength(2)

    })
    //errores validar que el precio sea un número y mayor a 0
    it('should validate that price is a number and greater than 0', async () => {
        const response = await request(server).post('/api/productos').send({
            name: 'pollito rico',
            price: 'wasaaaa'
        })
        expect(response.status).toBe(400)
        expect(response.body).toHaveProperty('errors')
        expect(response.body.errors).toHaveLength(2)//solo un mensaje de error

        expect(response.status).not.toBe(404)
        expect(response.body.errors).not.toHaveLength(4)

    })

    //errores al momento de crear nuevos productos
    it('should create a new product', async ()=>{
        const response = await request(server).post('/api/productos').send({
            name: "mouse test",
            price: 200
        })

        expect(response.status).toEqual(201)
        expect(response.body).toHaveProperty('data')
        //codigos de errores, no se deben de mostrar 
        expect(response.status).not.toBe(400)
        expect(response.status).not.toBe(200)
        expect(response.body).not.toHaveProperty('errors')
    })
})