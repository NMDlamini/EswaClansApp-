//group all imports

const express = require("express");
const cors = require("cors");           //used to recieve requests from front-end
const mongoose = require("mongoose");
const authRoutes = require("./Routes/AuthRoutes")
const cookieparser = require('cookie-parser');

const app = express();

app.listen(4000,()=>{
    console.log("Server started on portland 4000")
})

mongoose.connect("mongodb://localhost:27017/jwt",{      //connects (parses) mongodb url to be used as database
    useNewUrlParser:true,
    useUnifiedTopology:true,
})

.then(() => {
    console.log("DB Connection Successful");
})
.catch((err) => {
    console.log("err.message");
});

app.use(cookieparser());
app.use(express.json());                        //gives Express App access/usage of json

app.use(                                        //section makes Express App use cors to accept  
    cors({                                      //GET & POST requests from http://localhost300
        origin: ["http://localhost:3000"],
        method: ["GET", "POST"],
        credentials: true,
    })
);

app.use("/", authRoutes);


