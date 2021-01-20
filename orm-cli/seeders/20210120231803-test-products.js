'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
    /**
     * Add seed commands here.
     *
     * Example:
     * await queryInterface.bulkInsert('People', [{
     *   name: 'John Doe',
     *   isBetaMember: false
     * }], {});
     */
    await queryInterface.bulkInsert(
      'Products',
      [
        {
          name: 'Product 1',
          description: 'This is only a simple description',
          amount: 100,
          status: 'active',
        },
        {
          name: 'Product 2',
          description: 'This is only a simple description',
          amount: 150,
          status: 'active',
        },
        {
          name: 'Product 3',
          description: 'This is only a simple description',
          amount: 120,
          status: 'active',
        },
        {
          name: 'Product 4',
          description: 'This is only a simple description',
          amount: 105,
          status: 'active',
        },
      ],
      {}
    );
  },

  down: async (queryInterface, Sequelize) => {
    /**
     * Add commands to revert seed here.
     *
     * Example:
     * await queryInterface.bulkDelete('People', null, {});
     */
    await queryInterface.bulkDelete('Products', null, {});
  },
};
