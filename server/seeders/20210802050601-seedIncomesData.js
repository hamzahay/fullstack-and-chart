'use strict';

const data = [
  {
    month: 'january',
    sum: 45000,
    createdAt: new Date(),
    updatedAt: new Date()
  },
  {
    month: 'february',
    sum: 80000,
    createdAt: new Date(),
    updatedAt: new Date()
  },
  {
    month: 'march',
    sum: 75000,
    createdAt: new Date(),
    updatedAt: new Date()
  },
  {
    month: 'april',
    sum: 53000,
    createdAt: new Date(),
    updatedAt: new Date()
  },
  {
    month: 'may',
    sum: 100000,
    createdAt: new Date(),
    updatedAt: new Date()
  },
]

module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.bulkInsert('Incomes', data)
    /**
     * Add seed commands here.
     *
     * Example:
     * await queryInterface.bulkInsert('People', [{
     *   name: 'John Doe',
     *   isBetaMember: false
     * }], {});
    */
  },

  down: async (queryInterface, Sequelize) => {
    await queryInterface.bulkDelete('Incomes', null)
    /**
     * Add commands to revert seed here.
     *
     * Example:
     * await queryInterface.bulkDelete('People', null, {});
     */
  }
};
