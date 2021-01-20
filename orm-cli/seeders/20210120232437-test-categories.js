'use strict';

const { image } = require('faker');
const faker = require('faker');

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
    const items = generateFakeItems(150);
    await queryInterface.bulkInsert('Categories', items, {});
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

function generateFakeItems(rowsCount) {
  // generate code for fake data
  const data = [];
  for (let k = 0; k < rowsCount; k++) {
    const newItem = {
      name: faker.commerce.department(),
      categoryImage: faker.image.imageUrl(),
      status: faker.random.arrayElement([1, 0]),
    };
    data.push(newItem);
  }
  return data;
}
