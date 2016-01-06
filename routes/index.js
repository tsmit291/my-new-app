var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index.ejs', { title: 'This is the song that never ends',
  pict: 'http://rophydoes.rintin.com/wp-content/uploads/2011/01/lambchop1.jpg', next: '/verse-2'});
});

router.get('/verse-2', function(req, res, next){
  res.render('index.ejs', { title: 'It goes on and on my friends', pict: 'http://i.ytimg.com/vi/1_47KVJV8DU/mqdefault.jpg', next: '/verse-3'});
});
//
router.get('/verse-3', function(req, res, next){
  res.render('index.ejs', { title: 'Some people started singing it, not knowing what it was', pict: 'http://media-cache-ak0.pinimg.com/236x/4d/61/6c/4d616c5f67a37d1b7db7acc79a3dcf03.jpg', next: '/verse-4'});
});

router.get('/verse-4', function(req, res, next){
  res.render('index.ejs', { title: 'And they will continue singing it forever just because', pict: 'http://media-cache-ak0.pinimg.com/236x/75/a1/d4/75a1d4cba1954c1abee9b4bd85d21de9.jpg', next: '/'});
});

module.exports = router;


// router.get('/some-page', function (req, res){
//   res.render('sayit', {message:"Hello"})
// })
