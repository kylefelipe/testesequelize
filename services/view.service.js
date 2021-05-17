const models = require('../models');
const { views } =  models;

module.exports = {
  async getAll() {
    try {
      const view = await views.findAll();
      return view;
    } catch (err) {
      console.log(err);
      return "deu erro no getAll da View";
    }
  },
  async create({ nome, descricao }) {
    try {
      const newView = await views.create({
        nome, descricao
      });
      return newView;
    } catch (err) {
      console.log(err);
      return "deu erro no create da View";
    }
  },
  async remove(viewId) {
    try {
      const newView = await views.findByPk(viewId);
      return newView.destroy();
    } catch (err) {
      console.log(err);
      return "deu erro no delete da View";
    }
  }
}
