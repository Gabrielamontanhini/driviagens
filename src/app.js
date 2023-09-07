import express, {json} from "express"
import "express-async-errors"
import cors from "cors"
import router from "./routes/index.routes.js"
import errorHandler from "./middlewares/error.middleware.js"

//Criação do servidor
const app = express()

//Configuraciones do servidor
app.use(express.json())
app.use(cors())
app.use(router)
app.use(errorHandler)


// Deixa o app escutando, à espera de requisições
const PORT = process.env.PORT || 5000
app.listen(PORT, () => console.log(`Servidor rodando na porta ${PORT}`))