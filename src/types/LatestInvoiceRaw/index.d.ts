type LatestInvoiceRaw = Omit<LatestInvoice, "amount"> & {
  amount: number;
};

export default LatestInvoiceRaw;
