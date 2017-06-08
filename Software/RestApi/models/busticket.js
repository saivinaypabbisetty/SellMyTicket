'use strict';
module.exports = function(sequelize, DataTypes) {
  var BusTicket = sequelize.define('BusTicket', {
    ticket_no: DataTypes.STRING,
    from: DataTypes.STRING,
    to: DataTypes.STRING,
    date: DataTypes.STRING,
    departure_time: DataTypes.STRING,
    reachby_time: DataTypes.STRING,
    seat_numbers: DataTypes.STRING,
    tickets: DataTypes.INTEGER,
    total_price: DataTypes.INTEGER,
    contact: DataTypes.STRING
  }, {
    classMethods: {
      associate: function(models) {
        // associations can be defined here
        BusTicket.belongsTo(models.User);
      }
    }
  });
  return BusTicket;
};