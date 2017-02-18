var express = require('express')
var router = express.Router()

/* GET home page. */
router.get('/color', function (req, res, next) {
  var objColor = ['red', 'blue', 'green', 'yellow', 'pink', 'grey']
  res.json(objColor[Math.floor(Math.random() * 5)])
})

module.exports = router
