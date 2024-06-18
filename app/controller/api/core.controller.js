
class CoreController {
  RADIX_PARSEINT= 10;
  datamapper = null;

  index = async (_, res) => {
    const data = await this.datamapper.getAll();

    res.status(200).json({data: data});
  }

  // show = async (req, res) => {
  //   const id = Number.parseInt(req.params.id, this.RADIX_PARSEINT);
  //   const data = await this.datamapper.getOne(id);

  //   res.status(200).json({data: data});
  // }

  store = async (req, res) => {
    const requestData = req.body;
    const data = await this.datamapper.create(requestData);

    res.status(201).json({data: data});
  }

  destroy = async (req, res) => {
    const id = Number.parseInt(req.params.id, this.RADIX_PARSEINT);
    const data = await this.datamapper.delete(id);

    res.status(204).json({});
  }

  update = async (req, res, next) => {
    const requestData = req.body;
    const id = Number.parseInt(req.params.id, this.RADIX_PARSEINT);

    const data = await this.datamapper.getOne(id);

    if(data.length === 0) {
      const requestError = new ApiError('Bad request. The provided id don\'t exist', {status: 404});
      requestError.name = 'BadRequest';
      return next(requestError);
    }

    const updatedData = await this.datamapper.update(id, requestData);

    res.status(200).json({data: updatedData});
  }

  // Basic show and others show with join: invoice/customer
  show = (endpoint) => async (req, res, next) => {
    console.log('show');
    const id = Number.parseInt(req.params.id, this.RADIX_PARSEINT);
    const endpointString = endpoint.toLowerCase();

    if(endpoint) {
      const endpointDatamapper = await import(`../../model/${endpointString}.datamapper.js`)
        .then(importDatamapper => importDatamapper.default)

      const findedEndpointData = await endpointDatamapper.getOne(id);

      if(findedEndpointData.length === 0) {
        const requestError = new ApiError('Bad request. The provided id don\'t exist', {status: 404});
        requestError.name = 'BadRequest';
        return next(requestError);
      }

      const data = await this.datamapper[`getAllBy${endpoint}`](id);

      return res.status(200).json({data: data});
    }

    const data = await this.datamapper.getOne(id);

    res.status(200).json({data: data});
  }



}

export default CoreController;