const express = require('express');
const router = express.Router();
const woodCraftsCtrl = require('../controllers/WoodCrafts');

router.get('/', woodCraftsCtrl.index);
router.get('/new', woodCraftsCtrl.new);

router.post('/', woodCraftsCtrl.create);


module.exports = router;