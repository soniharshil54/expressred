var express = require("express")
var app = new express()
var mongoose = require("mongoose")
var Task = require("./models/todos")
var bodyParser = require("body-parser")

app.use(bodyParser.json())


mongoose.connect("mongodb://soni3360:soni3360@ds347707.mlab.com:47707/todos",()=> {
	console.log("mongodb connected")
})


app.get('/api/todos',(req,res) => {
	Task.find().then(tasks => res.json(tasks)).catch(err=>{console.log(err)})
	
	
})


app.post('/api/todos/add', (req,res) => {
	const todo = new Task({
		task : req.body.task
	})
	todo.save().then(result=>{
		console.log(result)
		res.json({"what":"task added"})
	}).catch(err=> {
		console.log(err)
		res.json({"what":"task not added"})

	})

})


// app.delete('api/todos/delete',(req,res) => {
// 	Task.remove({task: req.body.task})
// 		.exec()
// 		.then(result=>{
// 			console.log("task deleted")
// 		})
// 		.catch(error=>{
// 			console.log(error)
// 		})

// })


// app.put('',(req,res)=> {
	
// })


app.listen(5000,()=> console.log("server listening on port 5000"))