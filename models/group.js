'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Group extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // console.log(models);
      const { views } = models;
      this.belongsToMany(views, {
        through: 'rel_group_view',
        as: 'groupViews',
        foreignKey: 'group_id'
      })
      // define association here
    }
  };
  Group.init({
    nome: DataTypes.STRING,
    codigo: DataTypes.STRING
  }, {
    sequelize,
    modelName: 'Group',
    tableName: 'groups',
    underscored: true,
    timestamps: false
  });
  return Group;
};
