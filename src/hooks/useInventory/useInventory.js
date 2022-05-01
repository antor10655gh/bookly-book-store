import { useEffect, useState } from "react";

const useInventory = () => {
  const [invoices, setInvoices] = useState([]);

  useEffect(() => {
    fetch("http://localhost:5000/inventory")
      .then((res) => res.json())
      .then((json) => setInvoices(json));
  }, []);
  return [invoices, setInvoices];
};

export default useInventory;
