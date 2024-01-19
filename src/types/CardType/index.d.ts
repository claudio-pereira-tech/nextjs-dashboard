type CardType = {
  title: string;
  value: number | string;
  type: "invoices" | "customers" | "pending" | "collected";
};

export default CardType;
