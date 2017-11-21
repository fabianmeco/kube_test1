const express = require('express');
const assistantWorkshop = require('../assistantworkshop/assistantworkshop.controller');

const router = express.Router();

router.post('/', assistantWorkshop.create);

router.get('/', assistantWorkshop.get);

router.get('/:assistantId', assistantWorkshop.getOne);

router.delete('/:assistantId', assistantWorkshop.remove); 

module.exports = router;