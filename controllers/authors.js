let router = require('express').Router()

router.get('/', (req, res) => {
  res.render('authors/index')
})

router.post('/', (req, res) => {
  console.log(req.body)
  res.send('posted to authors')
})

router.get('/new', (req, res) => {
  res.render('authors/new')
})

router.get('/:id', (req, res) => {
  res.render('authors/show')
})

module.exports = router
