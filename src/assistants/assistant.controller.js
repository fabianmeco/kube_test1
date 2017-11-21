"use strict"

const express = require('express');
const route = express.Router();
const schema = require('schema-object');
const _ = require('lodash');
const assistantModel = require('./assistant.model');
const instanceRouter = express.Router();



const Assistant = new schema ({
    name: {type: String, required: true},
    photo: {type: String}
})
const Assistantput = new schema ({
    name: {type: String},
    photo: {type: String}
})


exports.create = function(req, res){
    let assistant = new Assistant(req.body);
    if(assistant.isErrors()){
        return res.status(422).json(assistant.getErrors().map(function(err){
            return {"Error": err.errorMessage, "Name": err.fieldSchema.name}}));
    }
    return assistantModel.create(req.body).then(newAssist => res.json(newAssist)).catch(err => res.status(500).send(err.message));//return err with same convention {en object}
}

exports.get = function(req, res){
    return assistantModel.findAll(req.query).then(value => res.json(value)).catch(err=> res.status(500).send(err.message));
}

exports.getOneMiddleware= function (req, res, next){
    assistantModel.find(req.params.id).then( function (assist){
        if(assist){
            req.assistant=assist;
            return next();
        }
        return res.sendStatus(404);
    }).catch(err => res.status(500).send(err.message));    
}



exports.getOne = function(req, res){
    return res.json(req.assistant);
}
    
exports.remove = function(req, res){
    return assistantModel.remove(req.assistant.id).then( value => res.json(value)).catch(err=> res.status(500).send(err.message));
}

exports.put = function(req, res){
    let assistatmp = new Assistantput(req.body);
    if(assistatmp.isErrors()){
        return res.status(422).json(assistantmp.getErrors().map(function(err){
            return {"Error": err.errorMessage, "Name": err.fieldSchema.name}}));
    }
    return asistantModel.update(req.assistant.id, req.body).then(value=> res.json(value)).catch(err=>res.status(500).send(err.message));
}

//path should go from assistant to wor