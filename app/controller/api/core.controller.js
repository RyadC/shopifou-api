
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

  // update

  // other shows

}

export default CoreController;