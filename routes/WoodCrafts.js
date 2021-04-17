const express = require('express');
const router = express.Router();
const woodCraftsCtrl = require('../controllers/WoodCrafts');

router.get('/', woodCraftsCtrl.index);
router.get('/request', woodCraftsCtrl.new);

router.post('/requested', woodCraftsCtrl.create);


module.exports = router