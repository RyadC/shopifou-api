import ApiError from "../../error/api.error.js";
import articleDatamapper from "../../model/article.datamapper.js";
import client from "../../config/pg.client.js";

const articleController = {
  RADIX_PARSEINT: 10,

  async index(_, res) {
    const articles = await articleDatamapper.getAll();

    res.status(200).json({data: articles});
  },

  async show(req, res, next) {
    const id = Number.parseInt(req.params.id, this.RADIX_PARSEINT);
    const article = await articleDatamapper.getOne(id);

    if(article.length === 0) {
      const requestError = new ApiError('Bad request. The provided id don\'t exist', {status: 404});
      requestError.name = 'BadRequest';
      return next(requestError);
    }

    res.status(200).json({data: article});
  },

  async showByCategory(req, res) {
    const categoryId = Number.parseInt(req.params.id, this.RADIX_PARSEINT)

    const articleByCategory = await articleDatamapper.getAllByCategory(categoryId);

    res.status(200).json({data: articleByCategory});
  },

  async store(req, res) {
    const data = req.body;

    const storedArticle = await articleDatamapper.create(data);

    res.status(201).json({data: storedArticle});
  },

  async update(req, res) {
    const id = Number.parseInt(req.params.id, this.RADIX_PARSEINT);
    const data = req.body;

    const article = await articleDatamapper.getOne(id);

    if(article.length === 0) {
      const requestError = new ApiError('Bad request. The provided id don\'t exist', {status: 404});
      requestError.name = 'BadRequest';
      return next(requestError);
    }

    const updatedArticle = await articleDatamapper.update(id, data);

    res.status(201).json({data: updatedArticle});
  },

  async destroy(req, res) {
    const id = Number.parseInt(req.params.id, this.RADIX_PARSEINT);
    const article = await articleDatamapper.getOne(id);

    if(article.length === 0) {
      const requestError = new ApiError('Bad request. The provided id don\'t exist', {status: 404});
      requestError.name = 'BadRequest';
      return next(requestError);
    }

    const deletedArticle = await articleDatamapper.delete(id);

    res.status(204).json({});
  },


}

export default articleController;