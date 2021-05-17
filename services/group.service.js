const models = require('../models');
const { Group, views } =  models;

module.exports = {
  async getAll() {
    try {
      const groups = await Group.findAll();
      return groups;
    } catch (err) {
      console.log(err);
      return "Group.service: Deu ruim no getAll";
    }
  },
  async create({ nome, codigo }) {
    try {
      const user = await Group.create({
        nome, codigo
      });
      return user;
    } catch (err) {
      console.log(err);
      return "Group.service: Deu ruim no create";
    }
  },
  async insertView({ groupId, viewId }) {
    try {
      
      const currentGroup = await Group.findByPk(groupId);
      const view = await views.findByPk(viewId);
      currentGroup.addGroupViews(view);
      return Group.findByPk(groupId, {include: "groupViews"});
    } catch (err) {
      console.log(err);
      return 'Group.service: Deu ruim no insertView';
    }
  },
  async remove(groupId) {
    try {
      
      const removedGroup = await Group.findByPk(groupId);
      return await removedGroup.destroy();
    } catch (err) {
      console.log(err);
      return 'Group.service: Deu ruim no remove';
    }
  }
}
