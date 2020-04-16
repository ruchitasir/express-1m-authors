let express = require('express')
// Required modules
let layouts = require('express-ejs-layouts')

// Variables
let app = express()

// Settings and middleware
app.set('view engine', 'ejs')
app.use(express.urlencoded({ extended: false }))
app.use(express.static('static'))
app.use(layouts)

// Routes
app.use('/authors', require('./controllers/authors'))
app.use('/books', require('./controllers/books'))

app.get('/', (req, res) => {
  res.render('home')
})

app.get('*', (req, res) => {
  res.render('error')
})

// Choose port
app.listen(3000)
