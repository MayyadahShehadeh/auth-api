'use strict';

const express = require('express');
const dataModules = require('../models');
const permissions = require('./middleware/acl');
const bearerAuth = require('../auth/middleware/bearer');
const router = express.Router();

router.param('model', (req, res, next) => {
  console.log('req.params.model:', req.params.model);
  const modelName = req.params.model;
  if (dataModules[modelName]) {
    req.model = dataModules[modelName];
    next();
  } else {
    next('Invalid Model');
  }
});

router.get('/api/v2',bearerAuth, permissions, (req,res)=>{
  res.send('reading done ~ ');
});
// router.get('/api/v2/:id', handleGetOne);
// router.post('/api/v2/', handleCreate);
// router.put('/api/v2/:id', handleUpdate);
// router.delete('/api/v2/:id', handleDelete);




module.exports = router;
