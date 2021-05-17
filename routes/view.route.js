const express = require('express');
const router = express.Router();
const View =  require('../controllers/view.controller')

router.get('/', View.getAll);
router.post('/', View.create);
router.delete('/', View.remove);


module.exports =  router;
