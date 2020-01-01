const Sequelize = require('sequelize');

function testFunction(){
  console.log('Hello hossam!');
}

var Users;

function initialize(connect) {

  const Op = Sequelize.Op;
  const sequelize = new Sequelize(connect[0], connect[1], connect[2], {
    host : 'localhost',
    port : '5432',
    dialect : 'postgres',
    operatorsAliases : {
      $and : Op.and,
      $or : Op.or,
      $eq : Op.eq,
      $like : Op.like,
      $iLike : Op.iLike
    }
  });

  Users = sequelize.define('user',

    {
      firstname: Sequelize.TEXT,
      lastname: Sequelize.TEXT
    }

  );


}


async function getAll() {

  var result = await Users.findAll();
  return result;
}


async function findById(id) {

  var result = await Users.findById(id);
  return result

}

module.exports = {initialize: initialize, getAll: getAll, findById: findById}