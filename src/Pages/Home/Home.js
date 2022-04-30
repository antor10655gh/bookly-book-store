import React from "react";
import Banner from "../../components/Banner/Banner";
import OurService from "../../components/OurService/OurService";
import HomeInvoices from "../HomeInvoices/HomeInvoices";
import "./Home.css";

const Home = () => {
  return (
    <div>
      <Banner></Banner>
      <OurService></OurService>
      <HomeInvoices></HomeInvoices>
    </div>
  );
};

export default Home;
