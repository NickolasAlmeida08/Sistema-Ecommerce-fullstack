import express from 'express'
import router from './Routers/clienteRoute.js'

const app = express()
const port = 3000

app.use(router)

app.listen(port, (error) => {
    if(error) {
        console.log('Deu erro')
        return
    } console.log('Está rodando')
}

)