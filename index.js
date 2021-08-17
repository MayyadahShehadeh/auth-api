'use strict';

require('dotenv').config();

const app = require('./auth-server/src/server');
const { db } = require('./auth-server/src/auth/models/index');

db.sync().then(() => {
  app.start(process.env.PORT || 4000);
});