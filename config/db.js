const mongoose = require("mongoose");
mongoose.connect("mongodb://localhost:27017/meanStack").then(()=>{
    console.log("done");
}).catch((e)=>{
    console.log(e);
})