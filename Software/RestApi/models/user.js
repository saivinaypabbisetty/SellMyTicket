'use strict';
module.exports = function(sequelize, DataTypes) {
  var User = sequelize.define('User', {
    username: DataTypes.STRING,
    email: DataTypes.STRING,
    password: DataTypes.STRING,
    role: DataTypes.ENUM('user','administrator')
  }, {
    classMethods: {
      associate: function(models) {
        // associations can be defined here
        User.hasMany(MovieTicket);
        User.hasMany(BusTicket);
      }
    }
  });
  return User;
};