const express = require('express');
const router = express.Router();
const woodCraftsCtrl = require('../controllers/WoodCrafts');

router.get('/', woodCraftsCtrl.index);
router.get('/gallery', woodCraftsCtrl.gallery);
router.get('/cart', woodCraftsCtrl.cart)
router.get('/new', woodCraftsCtrl.new);
router.get('/:id', woodCraftsCtrl.edit)
router.post('/', woodCraftsCtrl.create);
router.delete('/:id', woodCraftsCtrl.del)
router.put('/:id', woodCraftsCtrl.update);
router.put('/cart', woodCraftsCtrl.buy);




module.exports = router;