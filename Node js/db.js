const mongoose = require("mongoose");

mongoose.connect("mongodb://localhost:27017/angular_node_mongodb_crud", (err) => {
    if(!err) console.log("Mongodb Connect Successfully...");
    else console.log("Error In DB Connection : " + JSON.stringify(err, undefined, 2));
})


module.exports = mongoose;