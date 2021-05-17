'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class views extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      console.log('>>: ', models);
      const { Group } = models;
      this.belongsToMany(Group, {
        through: 'rel_group_view',
        as: 'viewGroups',
        hooks: true,
        onDelete: 'SET NULL',
        primaryKey: 'view_id'
      })
      // define association here
    }
  };
  views.init({
    nome: DataTypes.STRING,
    descricao: DataTypes.STRING
  }, {
    sequelize,
    modelName: 'views',
    tableName: 'views',
    underscored: true,
    timestamps: false
  });
  return views;
};
