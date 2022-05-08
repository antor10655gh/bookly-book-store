import { useEffect, useState } from "react";

const useInventory = () => {
  const [invoices, setInvoices] = useState([]);

  useEffect(() => {
    fetch("https://warm-castle-28299.herokuapp.com/inventory")
      .then((res) => res.json())
      .then((json) => setInvoices(json));
  }, []);
  return [invoices, setInvoices];
};

export default useInventory;
