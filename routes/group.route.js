const express = require('express');
const router = express.Router();
const Group =  require('../controllers/group.controller')

router.get('/', Group.getAll);
router.post('/', Group.create);
router.post('/insertView', Group.insertView)
router.delete('/', Group.remove);


module.exports =  router;
