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

// router.get('/celebrities/:id', function(req, res, next) {
//   Celebrity.findOne({name: req.params.name}, (err, celebs) => {
//     if (err) { return next(err); }
//     console.log(req.params.id);
//     res.render('celebrities/show', {
//       title: celebs.name,
//       celebrities: celebs
//     });
//   });
// });

router.get('/celebrities:id', (req, res, next) => {

  const celebId = req.params.id;
  console.log(celebId);

  Celebrity.findById(celebId, (err, product) => {
    if (err) { return next(err); }
    res.render('celebrities/show',{title: celebId, celebrities: celeb});
  });
});





module.exports = router;
