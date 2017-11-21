"use strict"

const express = require('express');
const route = express.Router();
const instanceRouter = express.Router();
const assistController = require('./assistant.controller'); 

route.post('/', assistController.create);

route.get('/', assistController.get);


route.use('/:id', assistController.getOneMiddleware, instanceRouter);

instanceRouter.get('/', assistController.getOne);
    
instanceRouter.delete('/', assistController.remove);

instanceRouter.put('/', assistController.put);

//path should go from assistant to workshop

module.exports = route;