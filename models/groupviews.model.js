'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  const { models: { Group, views } } = sequelize;
  class GroupViews extends Model {
    static associate(models) {
      // associations can be defined here
    };

  };
  GroupViews.init({
    group_id: {
      type: DataTypes.INTEGER,
      references: {
        model: Group,
        key: 'id',
      },
      // hooks: true,
      // onDelete: 'CASCADE'
    },
    view_id: {
      type: DataTypes.INTEGER
    }
  }, {
    sequelize,
    modelName: "GroupViews",
    tableName: "rel_group_view",
    underscored: true,
    timestamps: true
  });
  return GroupViews;
};
