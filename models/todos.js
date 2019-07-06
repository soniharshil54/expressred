var mongoose = require("mongoose")


var todoschema = mongoose.Schema({
	task: String
})


module.exports = mongoose.model('Task',todoschema)
