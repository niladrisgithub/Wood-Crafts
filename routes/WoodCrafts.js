const express = require('express');
const router = express.Router();
const woodCraftsCtrl = require('../controllers/WoodCrafts');

router.get('/', woodCraftsCtrl.index);
router.get('/new', woodCraftsCtrl.new);
router.get('/:id', woodCraftsCtrl.show)
router.post('/', woodCraftsCtrl.create);
router.delete('/woodCrafts/:id', woodCraftsCtrl.del)
router.get('/gallery', woodCraftsCtrl.gallery)
router.put('/', woodCraftsCtrl.update);
module.exports = router;