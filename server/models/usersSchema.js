const mongoose = require("mongoose");


const userSchema = new mongoose.Schema ({

})



const users = new mongoose.model("users", userSchema);

module.exports = users;