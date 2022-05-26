import express from "express"
import cors from "cors"
import mongoose from "mongoose"
import Router from "./routes/routes.js"

const app = express()

app.use(cors())
app.use(express.json())
app.use(express.urlencoded({extended: true}));
app.use('/', Router)

// const  mongoAtlasUri =
//         "mongodb+srv://mann:mannshah@023@wt.ivomhlh.mongodb.net/?retryWrites=true&w=majority";

//         try {
//             // Connect to the MongoDB cluster
//              mongoose.connect(
//               mongoAtlasUri,
//               { useNewUrlParser: true, useUnifiedTopology: true },
//               () => console.log(" Mongoose is connected")
//             );
        
//           } catch (e) {
//             console.log("could not connect");
//           }

//mongoose.connect("mongodb+srv://mann:mannshah@023@wt.ivomhlh.mongodb.net/?retryWrites=true&w=majority")


mongoose.connect("mongodb://localhost:27017/Forms-Practice")


app.listen(8000, () => {
    console.log("Server started on port 8000")
})
