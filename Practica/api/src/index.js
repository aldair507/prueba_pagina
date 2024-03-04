import express from "express";
const app= express()
import cors from "cors"

import userRutes from "./routes/user.routes.js";
import rolesRutes from "./routes/roles.routes.js";



import morgan from "morgan";
//midlewares
app.use(express.json())
app.use(express.urlencoded({extended:true})) //datos simples
app.use(morgan("dev"))


app.use(cors())

//routes
app.use("/users", userRutes)
app.use("/roles", rolesRutes)

//controlerError
app.use((err, req, res, next)=>{
    return res.json({
        message: err.message
    })

})

app.set("port", 3000)
app.listen(app.get("port"), ()=>{
    console.log("server on port", app.get("port"))
})