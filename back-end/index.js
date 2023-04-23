const express = require("express"); //import
const mongoose = require('mongoose');

const app = express();// function call



const uri = 'mongodb+srv://Sakthivel:hcaOx7QlcVYunsI5@customer.4stbnl8.mongodb.net/test'

/*const model = require("./model");
const connectDatabse = require("./model");
const { MongoNotConnectedError } = require("mongodb");*/

app.use(express.urlencoded({extended:true}));

app.get("/",function(req,res)
    {
    res.send("welcome")
    
    }
);
// mongoAtlas,mongo community server 
app.post("/home",function(req,res)
    {
        console.log(req.body);
        res.send("got it");
    }
);

app.listen(5000,function(){
    console.log("server is @5000");
});

app.get("/home",function(req,res)
    {
    
    res.send("boku ga saravanan no subarasi")
    }
);

async function connect() {
    try {
        await mongoose.connect(uri)
        console.log("connected to mongoDB")
    }catch (error) {
        console.error(error);
    }
}

connect();

//connectDatabse