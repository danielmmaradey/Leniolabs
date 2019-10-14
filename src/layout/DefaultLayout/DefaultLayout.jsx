// Module Dependencies
import React, { useState } from "react";

// Module Components
import Header from "../../components/Header/Header";
import Footer from "../../components/Footer/Footer";

// Module routes
import Routes from "../../routes/Routes";

// Module main Component
const DefaultLayout = () => {
  const [routes] = useState(true);

  return (
    <div id="defaultlayout">
      <Header />
      <div
        className="dv-container-l"
        style={{ minHeight: "calc(100vh - 60px)" }}
      >
        {routes ? <Routes /> : null}
      </div>
      <Footer />
    </div>
  );
};

export default DefaultLayout;
