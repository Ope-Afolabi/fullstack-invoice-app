import {
  getSingleInvoice,
  updateInvoice,
} from "@/controllers/invoice/invoiceController";

export default async function handler(req, res) {
  if (req.method === "GET") {
    getSingleInvoice(req, res);
  }

  if (req.method === "PUT") {
    updateInvoice(req, res);
  }
}
