import React from "react";
import PropTypes from "prop-types";
import Head from "next/head";
import "antd/dist/antd.css";

// import wrapper from "../store/configureStore";

const PJFoodT = ({ Component }) => (
  <>
    <Head>
      <meta charSet="utf-8" />
      <title>Food T</title>
    </Head>
    <Component />
  </>
);

PJFoodT.propTypes = {
  Component: PropTypes.elementType.isRequired,
};

// export default wrapper.withRedux(PJFoodT);
export default PJFoodT;
