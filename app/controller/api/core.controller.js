
class CoreController {
  RADIX_PARSEINT= 10;
  datamapper = null;

  index = async (_, res) => {
    const data = await this.datamapper.getAll();

    res.status(200).json({data: data});
  }

  show = async (req, res) => {
    const id = Number.parseInt(req.params.id, this.RADIX_PARSEINT);
    const data = await this.datamapper.getOne(id);

    res.status(200).json({data: data});
  }

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

  test = (endpoint) => async (req, res, next) => {
    const endpointId = Number.parseInt(req.params.id, this.RADIX_PARSEINT);
    const findedEndpoint = [1]; // implémenter la récupération du endpoint pour vérifier si le id est bien en bdd
    
    if(findedEndpoint.length === 0) {
      const requestError = new ApiError('Bad request. The provided id don\'t exist', {status: 404});
      requestError.name = 'BadRequest';
      return next(requestError);
    }

    const dataEndpoint = await this.datamapper[`getAllBy${endpoint}`](endpointId);
    console.log('dans le test');
    res.status(200).json({data: dataEndpoint});
  }


  // other shows

}

export default CoreController;