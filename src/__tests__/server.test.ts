import request from 'supertest'
import server from '../server'

describe('GET /api', () =>{
    it('should send back a json response', async () =>{
        const res = await request(server).get('/api')

        expect(res.status).toBe(200)  
        expect(res.headers['content-type']).toMatch(/json/)
        console.log(res.body.msg)

         expect(res.status).not.toBe(404)  
        console.log(res.body.msg)

    })
})

/*describe('Nuestro primer test', ()=>{
    it('Debe revisar que 1 + 1 es 2', () => {
        expect(1 + 1).toBe(2)
    })
})*/