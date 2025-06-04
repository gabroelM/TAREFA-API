import express from 'express'
// importar o dotenv
import 'dotenv/config'
import cors from 'cors' // Importar o cors
import { router } from './rotas/usuario.js'
import { routerTarefa } from './rotas/tarefas.js'
import { database } from './database.js'

const app = express()

app.use(cors({origin:"http://localhost:3000"})) // Usar o cors como middleware
app.use(express.json())
app.use(router)
app.use(routerTarefa)

 await database.sync()

app.listen(3000, () => console.log('servidor rodando'))