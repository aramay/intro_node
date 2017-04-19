// For convention/compatibility - run the server process by default if "node ." 
// is executed in the top-level folder
// require('./bin/server');

const express = require('express')
const md = require('./middleware')

let app = express()

app.set('x-powered-by', false)
// app.use( (request, response, next) => {
//    request.user = { name: "testUser"}

//    next()

// })

app.use( md("test"))

app.get('/hello', (request, response) => {
   
   response.send(`hello ${request.user.name}`)
})

app.listen(3000)

console.log("Server listening on port ", 3000)


