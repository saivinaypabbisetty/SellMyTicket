'use strict';
module.exports = {
  up: function(queryInterface, Sequelize) {
    return queryInterface.createTable('BusTickets', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      ticket_no: {
        type: Sequelize.STRING
      },
      from: {
        type: Sequelize.STRING
      },
      to: {
        type: Sequelize.STRING
      },
      date: {
        type: Sequelize.STRING
      },
      departure_time: {
        type: Sequelize.STRING
      },
      reachby_time: {
        type: Sequelize.STRING
      },
      seat_numbers: {
        type: Sequelize.STRING
      },
      tickets: {
        type: Sequelize.INTEGER
      },
      total_price: {
        type: Sequelize.INTEGER
      },
      contact: {
        type: Sequelize.STRING
      },
      createdAt: {
        allowNull: false,
        type: Sequelize.DATE
      },
      updatedAt: {
        allowNull: false,
        type: Sequelize.DATE
      }
    });
  },
  down: function(queryInterface, Sequelize) {
    return queryInterface.dropTable('BusTickets');
  }
};