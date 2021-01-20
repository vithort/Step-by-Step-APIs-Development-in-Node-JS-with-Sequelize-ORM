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
      'Categories',
      [
        {
          name: 'Category 1',
          categoryImage: null,
          status: 1,
        },
        {
          name: 'Category 2',
          categoryImage: null,
          status: 1,
        },
        {
          name: 'Category 3',
          categoryImage: null,
          status: 0,
        },
        {
          name: 'Category 4',
          categoryImage: null,
          status: 1,
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
    await queryInterface.bulkDelete('Categories', null, {});
  },
};
