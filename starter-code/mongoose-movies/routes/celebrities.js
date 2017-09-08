var express = require('express');
var router = express.Router();
const Celebrity = require("../models/celebrity");

/* GET users listing. */

router.get('/', function(req, res, next) {
    res.render('celebrities/homepage', {
});
});


router.get('/celebrities', function(req, res, next) {
  Celebrity.find({}, (err, celebs) => {
    if (err) { return next(err); }
    res.render('celebrities/index', {
      title: "These are our celebrities!",
      celebrities: celebs
    });
  });
});


router.get('/celebrities/:id', (req, res, next) => {

  const celebId = req.params.id;
  Celebrity.findById(celebId, (err, celeb) => {
    if (err) { return next(err); }
    res.render('celebrities/show',{title: celeb.name, celebs: celeb});
  });
});

router.get('/celebrities/new', (req, res, next) => {
  res.render('celebrities/new');
});

router.post('/celebrities', (req, res, next) => {
  const celebInfo = {
    name: req.body.name,
    occupation: req.body.occupation,
    catchPhrase: req.body.catchPhrase
  };

  const newCelebrity = new Celebrity (celebInfo);
  newCelebrity.save( (err) => {
    if (err) {return next(err);}
    return res.redirect('/');
  });
});



module.exports = router;
