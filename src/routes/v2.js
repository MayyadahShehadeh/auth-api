'use strict';

const express = require('express');
const dataModules = require('../auth/models');
const bearerAuth = require('../../src/auth/middleware/bearer')
const permissions = require('../auth/middleware/acl')

const router = express.Router();


router.param('model', (req, res, next) => {
  const modelName = req.params.model;
 
  if (dataModules[modelName]) {
    req.model = dataModules[modelName];
    next();
  } else {
    next('Invalid Model');
  }
});

router.get('/:model', bearerAuth, handleGetAll);
router.get('/', test);

router.get('/:model/:id', handleGetOne);
router.post('/:model', bearerAuth, handleCreate);
router.put('/:model/:id', bearerAuth, permissions('update'), handleUpdate);
router.patch('/:model/:id', bearerAuth, permissions('update'), handlePatch)
router.delete('/:model/:id', bearerAuth, permissions('delete'), handleDelete);

async function test(req, res) {
  
  res.status(200).send('test');
}

async function handleGetAll(req, res) {
  let allRecords = await req.model.get();
  res.status(200).json(allRecords);
}

async function handleGetOne(req, res) {
  const id = req.params.id;
  let theRecord = await req.model.get(id)
  res.status(200).json(theRecord);
}

async function handleCreate(req, res) {
  let obj = req.body;
  let newRecord = await req.model.create(obj);
  res.status(201).json(newRecord);
}

async function handleUpdate(req, res) {
  const id = req.params.id;
  const obj = req.body;
  let updatedRecord = await req.model.update(id, obj)
  res.status(200).json(updatedRecord);
}

async function handlePatch(req, res) {
    const id = req.params.id;
    const obj = req.body;
    let updatedRecord = await req.model.update(id, obj)
    res.status(200).json(updatedRecord);
  }

async function handleDelete(req, res) {
  let id = req.params.id;
  let deletedRecord = await req.model.delete(id);
  res.status(200).json(deletedRecord);
}



module.exports = router;