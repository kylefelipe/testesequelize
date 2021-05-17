const Group = require('../services/group.service');

module.exports = {
  async getAll(_, res) {
    try {
      const allGroups = await Group.getAll();
      res.json({
        res: 'teste',
        payload: allGroups
      });
    } catch (err) {
      console.log(err);
      res.json("Group.controller: Deu ruim no getAll");
    }
  },
  async create(req, res) {
    try {
      const { nome, codigo } = req.body;
      const newGroup = await Group.create({nome, codigo});
      return res.json({
        res: 'teste',
        payload: newGroup
      })
    } catch (err) {
      console.log(err);
      return res.json("Group.controller: Deu ruim no create");
    }
  },
  async insertView(req, res) {
    try {
      const { groupId, viewId } = req.body;
      const newGroup = await Group.insertView({groupId, viewId});
      return res.json({
        res: 'teste',
        payload: newGroup
      })
    } catch (err) {
      console.log(err);
      return res.json("Group.controller: Deu ruim no insertView");
    }
  },
  async remove(req, res) {
    try {
      const { groupId } = req.body;
      const removedGroup = await Group.remove(groupId);
      return res.json({
        res: 'teste - removendo grupo',
        payload: removedGroup
      })
    } catch (err) {
      console.log(err);
      return res.json("Group.controller: Deu ruim no remove");
    }
  }
}
