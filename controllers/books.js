let router = require('express').Router()

router.get('/', (req, res) => {
  res.render('books/index')
})

router.post('/', (req, res) => {
  console.log(req.body)
  res.send('post to books')
})

router.get('/new', (req, res) => {
  res.render('books/new')
})

router.get('/:id', (req, res) => {
  res.render('books/show')
})

module.exports = router
