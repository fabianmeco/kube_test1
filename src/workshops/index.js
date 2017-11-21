"use strict"

const express = require('express');
const route = express.Router();
const instanceRouter = express.Router();
const workshoper = require('../workshopers');
const workshopController = require('./workshops.controller');
const assistWorkRoutes = require('./workshopassistant.router');

//Validate if two workshops are programmed at the same time
//A workshop should have a capacity
route.post('/', workshopController.create);

route.get('/', workshopController.get);

route.use('/:id', workshopController.getOneMiddleware, instanceValidator);

instanceRouter.get('/', workshopController.getOne);
    
instanceRouter.delete('/', workshopController.remove);

instanceRouter.put('/', workshopController.put);

instanceRouter.use("/workshopers", workshoper);

instanceRouter.use("/assitants", assistWorkRoutes);

module.exports = route;