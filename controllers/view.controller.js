const View = require('../services/view.service');

module.exports = {
  async getAll(_, res) {
    try {
      const allViews = await View.getAll();
      res.json({
        res: 'teste - get all',
        payload: allViews
      });
    } catch (err) {
      console.log(err);
      res.json(err);
    }
  },
  async create(req, res) {
    try {
      const { nome, descricao } = req.body;
      const newView = await View.create({nome, descricao});
      return res.json({
        res: 'teste - create',
        payload: newView
      })
    } catch (err) {
      console.log(err);
      return res.json(err);
    }
  },
  async remove(req, res) {
    try {
      const { viewId } = req.body;
      const deletedView = await View.remove(viewId);
      return res.json({
        res: 'teste - remove',
        payload: deletedView
      })
    } catch (err) {
      console.log(err);
      return res.json(err);
    }
  }
}
