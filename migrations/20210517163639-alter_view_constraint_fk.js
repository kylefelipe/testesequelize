'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {
    /*
      Add altering commands here.
      Return a promise to correctly handle asynchronicity.

      Example:
      return queryInterface.createTable('users', { id: Sequelize.INTEGER });
    */
   return queryInterface.sequelize.transaction((t) => {
     return Promise.all([
       queryInterface.removeConstraint('rel_group_view', 'rel_group_view_group_id_fkey'),
       queryInterface.addConstraint('rel_group_view', {
         type: 'foreign key',
         name: 'rel_group_view_group_id_fkey',
         fields: ['view_id'],
         references: {
           table: "groups",
           field: 'id'
         },
         onDelete: 'SET NULL'
       })
     ])
   })
  },

  down: (queryInterface, Sequelize) => {
    /*
      Add reverting commands here.
      Return a promise to correctly handle asynchronicity.

      Example:
      return queryInterface.dropTable('users');
    */
  }
};
