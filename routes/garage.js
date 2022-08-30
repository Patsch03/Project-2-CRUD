var express = require('express');
const { get } = require('mongoose');
var router = express.Router();
const garageCtrl = require('../controllers/garage');


/* GET users listing. */

router.get('/', garageCtrl.index);
router.get('/new', garageCtrl.new);
router.get('/cart', garageCtrl.cartIndex);
router.post('/cart', garageCtrl.removeO);
router.post('/:id', garageCtrl.addCart);
router.post('/', garageCtrl.create);
router.get('/:id', garageCtrl.show);
// router.delete('/cart', garageCtrl.deleteO);



module.exports = router;
