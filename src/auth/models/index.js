'use strict';

require('dotenv').config();
const userModel = require('../models/users');

const { Sequelize, DataTypes } = require('sequelize');

const clothesModel = require('./clothes/model.js');
const foodModel = require('./food/model.js');
const Collection = require('./data-collection.js');

const DATABASE_URL ='postgres://localhost:5432/mayadahDB' ;

const sequelize = new Sequelize(DATABASE_URL,{});

const food = foodModel(sequelize, DataTypes);
const clothes = clothesModel(sequelize, DataTypes);


module.exports = {
  db: sequelize,
  users: userModel(sequelize, DataTypes),
  food: new Collection(food),
  clothes: new Collection(clothes),
}
