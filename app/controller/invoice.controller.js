// INTERNAL MODULES
import invoiceDatamapper from "../model/invoice.datamapper.js";

const invoiceController = {
  async index(req, res) {
    const invoices = await invoiceDatamapper.getAll();

    res.status(200).json(invoices);
  },
};


export default invoiceController;

