import React, {useEffect} from "react";
import PaymentCompleted from "../../components/item/PaymentCompleted";
import { useSearchParams } from 'react-router-dom';
import { apiClient } from "../../api/ApiClient";

const PaymentCompletePage = () => {
  const [searchParams] = useSearchParams();

  useEffect(() => {
    fetchData();
  }, [searchParams]);

  const fetchData = async() => {
    const pgToken = searchParams.get('pg_token');
    const tid = window.localStorage.getItem("tid");
    const response = await apiClient.post(`/payments/kakaoPay/approve`,
      {
        tid: tid,
        pgToken: pgToken,
      },
      {
        headers: {
          'Content-Type': 'application/json',
        },
      });
    console.log(response)
  };
 
  return (
    <>
        <PaymentCompleted />
    </>
  );
};

export default PaymentCompletePage;
