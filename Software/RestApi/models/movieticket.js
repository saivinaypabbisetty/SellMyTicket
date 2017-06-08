'use strict';
module.exports = function(sequelize, DataTypes) {
  var MovieTicket = sequelize.define('MovieTicket', {
    ticket_no: DataTypes.STRING,
    movie_name: DataTypes.STRING,
    venue: DataTypes.STRING,
    date: DataTypes.STRING,
    show_time: DataTypes.STRING,
    seat_numbers: DataTypes.STRING,
    tickets: DataTypes.INTEGER,
    total_price: DataTypes.INTEGER,
    contact: DataTypes.STRING
  }, {
    classMethods: {
      associate: function(models) {
        // associations can be defined here
         MovieTicket.belongsTo(models.User);
      }
    }
  });
  return MovieTicket;
};