// INTERNA IMPORTS
import orderDatamapper from "../../model/order.datamapper.js";


const orderController = {

  RADIX_PARSEINT: 10,

  async index(_, res) {
    const orders = await orderDatamapper.getAll();
    
    res.status(200).json({data: orders});
  },

  async show(req, res, next) {
    const id = Number.parseInt(req.params.id, this.RADIX_PARSEINT);
    const order = await orderDatamapper.getOne(id);

    if(order.length === 0) {
      const requestError = new Error('Bad request. The provided id don\'t exist')
      requestError.name = 'BadRequest';
      return next(requestError);
    }

    res.status(200).json({data: order});
  },

  async store(req, res) {
    const data = req.body;

    const storedOrder = await orderDatamapper.create(data);

    res.status(201).json({data: storedOrder})
  },
  
  async update(req, res) {
    const id = Number.parseInt(req.params.id, this.RADIX_PARSEINT);
    const { value } = req.body;

    const order = await orderDatamapper.getOne(id);

    if(order.length === 0) {
      const requestError = new Error('Bad request. The provided id don\'t exist')
      requestError.name = 'BadRequest';
      return next(requestError);
    }

    const updatedOrder = await orderDatamapper.update(id, value);

    res.status(201).json({data: updatedOrder});
  },

  async destroy(req, res) {
    const id = Number.parseInt(req.params.id, this.RADIX_PARSEINT);
    const order = await orderDatamapper.getOne(id);

    if(order.length === 0) {
      const requestError = new Error('Bad request. The provided id don\'t exist')
      requestError.name = 'BadRequest';
      return next(requestError);
    }

    const deletedOrder = await orderDatamapper.delete(id);

    res.status(204).json({});
  },

  async showArticle(req, res) {
    // ? Implement route with subendpoints like this for getAll and subqueries ? 
    // const result = await orderDatamapper.getAll({endpoint: '/article', id})
    
    const articleId = Number.parseInt(req.params.id, this.RADIX_PARSEINT);

    const ordersByArticle = await orderDatamapper.getAllByArticle(articleId);

    res.status(200).json({ data: ordersByArticle});
  },

  async showCustomer(req, res) {
    // ? Implement route with subendpoints like this for getAll and subqueries ? 
    // const result = await orderDatamapper.getAll({endpoint: '/customer', id})
    
    const customerId = Number.parseInt(req.params.id, this.RADIX_PARSEINT);

    const ordersByCustomer = await orderDatamapper.getAllByCustomer(customerId);

    res.status(200).json({ data: ordersByCustomer});
  },
};

export default orderController;