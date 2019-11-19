'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {
    // Get all existing users
    return queryInterface.sequelize
      .query('SELECT id FROM Users;')
      .then((users) => {
        const usersRows = users[0]
        console.log(usersRows)

        return queryInterface.bulkInsert('Posts', [{
          text: 'Lorem ipsum 1',
          userId: usersRows[0].id,
          createdAt: new Date(),
          updatedAt: new Date()
        }, {
          text: 'Lorem Ipsum 2',
          userId: usersRows[1].id,
          createdAt: new Date(),
          updatedAt: new Date()
        }],
        {})
      })
  },

  down: (queryInterface, Sequelize) => {
    return queryInterface.bulkDelete('Posts', null, {})
  }
};
