import express from "express"
import 'dotenv/config'
import { sequelize } from "./db/db.js"
import errorMiddleware from "./Middlewares/error-middleware.js"
import router from "./routes/index.js"
import cors from 'cors'


const PORT = process.env.PORT || 5000
const app = express()

app.use('/api', router)
app.use(express.json())
app.use(cors())
app.use(errorMiddleware)




const start = async () => {
    try {
        await sequelize.authenticate();
        await sequelize.sync();
        app.listen(PORT, () => console.log(`Server started on PORT = ${PORT}`))
    } catch (error) {
      console.log(error);  
    }
}

start()