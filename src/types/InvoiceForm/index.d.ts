type InvoiceForm = {
  id: string;
  customer_id: string;
  amount: number;
  status: "pending" | "paid";
};

export default InvoiceForm;
