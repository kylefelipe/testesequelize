'use strict';
module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.createTable('rel_group_view', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      group_id: {
        type: Sequelize.INTEGER,
        references: {
          model: {
            schema: 'public',
            tableName: 'groups',
            hooks: true,
            onDelete: 'CASCADE'
          },
          key: 'id',
        }
      },
      view_id: {
        type: Sequelize.INTEGER,
        allowNull: true,
        references: {
          model: {
            schema: 'public',
            tableName: 'views',
            onDelete: 'SET NULL'
          },
          key: 'id',
        }
      },
      created_at: {
        allowNull: false,
        type: Sequelize.DATE
      },
      updated_at: {
        allowNull: false,
        type: Sequelize.DATE
      }
    });
  },
  down: (queryInterface, Sequelize) => {
    return queryInterface.dropTable('rel_group_view');
  }
};
