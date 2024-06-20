import client from "../config/pg.client";
import invoiceDatamapper from "../model/invoice.datamapper.js";

invoiceDatamapper.client = client;

export default invoiceDatamapper;