const express = require('express');
const router = express.Router();
const woodCraftsCtrl = require('../controllers/WoodCrafts');

router.get('/', woodCraftsCtrl.index);
router.get('/new', woodCraftsCtrl.new);
router.post('/', woodCraftsCtrl.create);
router.delete('/woodCrafts/:id', woodCraftsCtrl.del)

module.exports = router;