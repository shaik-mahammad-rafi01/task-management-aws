'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {

    await queryInterface.bulkInsert('Users', [
      {
        name: 'Rafi',
        email: "rafishaik@gmail.com",
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        name: "Raju",
        email: "raju123@gmail.com",
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        name: "Reddy",
        email: "reddy123@gmail.com",
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        name: "Anas",
        email: "Anas1@gmail.com",
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        name: "sowmya",
        email: "sowmi310@gmail.com",
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        name: "Dileep",
        email: "dileep345@gmail.com",
        createdAt: new Date(),
        updatedAt: new Date()
      }


    ], {});

  },

  async down(queryInterface, Sequelize) {

    await queryInterface.bulkDelete('Users', null, {});

  }
};
