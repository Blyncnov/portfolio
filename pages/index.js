import React from "react";

import Header from "../components/header";
import Services from "../components/services";
import Portfolio from "../components/portfolio";
// import Tech from "../components/tech";
import Quick from "../components/quick";
import Footer from "../components/footer";

const Home = () => {
  return (
    <>
      <Header></Header>
      <Services />
      <Portfolio />
      <Quick />
      {/* <Tech /> */}
      <Footer />
    </>
  );
};

export default Home;
