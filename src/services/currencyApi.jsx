import { useEffect, useState } from 'react';
import axios from 'axios';

export async function fetchMonoApi() {
  const response = await axios('https://api.monobank.ua/bank/currency');
  return response.data;
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
