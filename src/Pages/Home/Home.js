import React from "react";
import Banner from "../../components/Banner/Banner";
import NewsLetter from "../../components/NewsLetter/NewsLetter";
import OurService from "../../components/OurService/OurService";
import HomeInvoices from "../HomeInvoices/HomeInvoices";
import "./Home.css";

const Home = () => {
  return (
    <div>
      <Banner></Banner>
      <OurService></OurService>
      <HomeInvoices></HomeInvoices>
      <NewsLetter></NewsLetter>
    </div>
  );
};

export default Home;
