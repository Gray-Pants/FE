import React from 'react'
import './Home.modeule.css'
import PaymentCompleted from '../components/PaymentCompleted'

const Home = () => {
  return (
    <>
    <PaymentCompleted />
        
      <WishList />
      {/* <FooterNav /> */}
    </>
  );
};

export default Home;
