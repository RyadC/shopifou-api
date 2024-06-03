// INTERNAL MODULES
import invoiceDatamapper from "../model/invoice.datamapper.js";

const invoiceController = {
  RADIX_PARSEINT: 10,

  async index(_, res) {
    const invoices = await invoiceDatamapper.getAll();

    res.status(200).json({data: invoices});
  },

  async show(req, res) {
    const id = Number.parseInt(req.params.id, this.RADIX_PARSEINT);
    const invoice = await invoiceDatamapper.getOne(id);

    res.status(200).json({data: invoice});
  },

  async store(req, res) {
    const data = req.body;
    const storedInvoice = await invoiceDatamapper.create(data);

    res.status(201).json({data: storedInvoice});
  },

  async update(req, res, next) {
    const { total_value } = req.body;
    const id = Number.parseInt(req.params.id, this.RADIX_PARSEINT);

    const invoiceExist = await invoiceDatamapper.getOne(id);

    if(invoiceExist.length === 0) {
      const requestError = new Error('Bad request. The provided id don\'t exist')
      requestError.name = 'BadRequest';
      return next(requestError);
    }

    const updatedInvoices = await invoiceDatamapper.update(id, total_value);

    res.status(200).json({data: updatedInvoices});
  },

  async destroy(req, res) {
    const id = Number.parseInt(req.params.id, this.RADIX_PARSEINT);
    const deletedInvoice = await invoiceDatamapper.delete(id);

    res.status(204).json({});
  }
};


export default invoiceController;

