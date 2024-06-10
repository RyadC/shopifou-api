import ApiError from "../../error/api.error.js";
import categoryDatamapper from "../../model/category.datamapper.js";

const categoryController = {
  RADIX_PARSEINT: 10,

  async index(_, res) {
    const categories = await categoryDatamapper.getAll();

    res.status(200).json({data: categories});
  },

  async show(req, res, next) {
    const id = Number.parseInt(req.params.id, this.RADIX_PARSEINT);
    const category = await categoryDatamapper.getOne(id);

    if(category.length === 0) {
      const requestError = new ApiError('Bad request. The provided id don\'t exist', {status: 404});
      requestError.name = 'BadRequest';
      return next(requestError);
    }

    res.status(200).json({data: category});
  },

  async store(req, res) {
    const data = req.body;

    const storedCategory = await categoryDatamapper.create(data);

    res.status(201).json({data: storedCategory});
  },

  async update(req, res) {
    const id = Number.parseInt(req.params.id, this.RADIX_PARSEINT);
    console.log(req.body);
    const { name } = req.body;

    const category = await categoryDatamapper.getOne(id);

    if(category.length === 0) {
      const requestError = new ApiError('Bad request. The provided id don\'t exist', {status: 404});
      requestError.name = 'BadRequest';
      return next(requestError);
    }

    const updatedCategory = await categoryDatamapper.update(id, name);

    res.status(201).json({data: updatedCategory});
  },

  async destroy(req, res) {
    const id = Number.parseInt(req.params.id, this.RADIX_PARSEINT);
    const category = await categoryDatamapper.getOne(id);

    if(category.length === 0) {
      const requestError = new ApiError('Bad request. The provided id don\'t exist', {status: 404});
      requestError.name = 'BadRequest';
      return next(requestError);
    }

    const deletedCategory = await categoryDatamapper.delete(id);

    res.status(204).json({});
  },


}

export default categoryController;