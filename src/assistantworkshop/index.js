"use strict"
const express = require('express');
const route = express.Router();
const assistWorkController = require ('./assistantworkshop.controller');

route.post('/', assistWorkController.create);

route.get('/', assistWorkController.get)

route.get('/:assistantId', assistWorkController.getOne);
    
route.delete('/:assistantid', assistWorkController.remove);


module.exports = route;