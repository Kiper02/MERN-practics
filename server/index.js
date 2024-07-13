import express from "express"
import 'dotenv/config'

const PORT = process.env.PORT || 5000
const app = express()



const start = async () => {
    try {
        
        app.listen(PORT, () => console.log(`Server started on PORT = ${PORT}`))
    } catch (error) {
      console.log(error);  
    }
}

start()