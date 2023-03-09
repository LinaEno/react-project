import { useEffect, useState } from 'react';
import axios from 'axios';

export async function fetchMonoApi() {
  const { data } = await axios('https://api.monobank.ua/bank/currency');
  const currency = [data[0], data[1]];
  return currency;
}

export const useFetchCurrency = () => {
  const [details, setDetails] = useState([]);

  useEffect(() => {
    fetchMonoApi().then(data => {
      setDetails(data);
    });
  }, [details]);

  return details;
};
