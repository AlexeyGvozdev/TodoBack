const app = require('http').createServer(handler)
const io = require('socket.io')(app)
const fs = require('fs')
const path = require('path')

app.listen(80, () => {
	console.log('start server')
})

function handler (req, res) {
	const url = req.url.indexOf('?') !== -1
		? req.url.replace(/\?[^\s]*$/g, '')
		: req.url
	const nameImage = url.substring(url.indexOf('static')).replace('static/', '')
	const extention = url.substring(url.lastIndexOf('.') + 1)
	const pathImage = path.join(__dirname, '../', 'public', nameImage)
	console.log(nameImage + '\n' + extention + '\n' + pathImage)
	try {
		res.writeHead(200, {
			'Content-Type': 'image/' + extention
		  })
		res.end(fs.readFileSync(pathImage))
	} catch (error) {
		// console.log(error)
		res.writeHead(500)
		res.end('Error loading index.html')
	}
	
}

io.on('connection', (socket) => {
	socket.emit('news', { hello: 'world' })
	socket.on('my other event', function (data) {
		console.log(data)
	})
})
