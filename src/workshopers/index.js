"use strict"
const express = require('express');
const route = express.Router();
const workshoperController = require('./workshoper.controller');



route.post('/', workshoperController.create);

route.get('/', workshoperController.get);
    
route.delete('/', workshoperController.remove);

router.put('/', workshoperController.put);


module.exports = route;