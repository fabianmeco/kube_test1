const express = require('express');
const assistantWorkshop = require('../assistantworkshop/assistantworkshop.controller');

const router = express.Router();

router.get('/', assistantWorkshop.get);

router.get('/:assistantId', assistantWorkshop.getOne);

module.exports = router;