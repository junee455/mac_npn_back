const express = require('express');
const assert = require('assert')
const mongoose = require('mongoose')
const path = require('path');
const cors = require('cors')
const bodyParser = require('body-parser')
const port = process.env.PORT || 8000;
const app = express();
// serve static assets normally

app.use(bodyParser.json())
app.use(cors())
app.use(express.static(__dirname + '/dist'));


const dbName = 'mac_npn'
const url = 'mongodb://localhost:27017'

mongoose.connect('mongodb://localhost:27017/mac_npn', {useNewUrlParser: true})

var db = mongoose.connection;

db.on('error', console.error.bind(console, 'connection error:'));
db.once('open', function() {
  // we're connected!
	console.log("we're connected!")
});

var userSchema = new mongoose.Schema({
	name: String,
	password: String
})

var postsSchema = new mongoose.Schema({
	text: String,
	category: Array,
	author: String,
	comments: Array
})

var posts = mongoose.model('posts', postsSchema)

var users = mongoose.model('users', userSchema)


app.get('/api/posts', function (request, response) {
	posts.find({}, function(err, docs) {
		assert.equal(null, err)
		response.send(docs)
		console.log(docs);
	})

});

app.post('/api/get-post', (req, res) => {
	console.log(req.body)
	let postId = req.body.postId
	posts.findById(postId).then((doc, err) => {
		console.log(doc)
		res.send(doc)
	})
})

app.post('/api/new-post', (request, response) => {
	console.log("request")
	console.log(request.body)
	response.send(request.body)
	posts.create({
		text: request.body.text,
		author: "admin"
	})
})

// handle every other route with index.html, which will contain
// a script tag to your application's JavaScript file(s).

app.get('*', function (request, response) {
  response.sendFile(path.resolve(__dirname, 'index.html'));
});


app.listen(port);
console.log("server started on port " + port);


