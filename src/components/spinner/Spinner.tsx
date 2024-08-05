import React from "react";
import { ThreeDots } from 'react-loader-spinner';
import "./spinner.css";

const Spinner = () => (
  <ThreeDots
    visible={true}
    height="80"
    width="80"
    color="#3632ff"
    radius="9"
    ariaLabel="three-dots-loading"
    wrapperStyle={{}}
    wrapperClass="SpinnerOverlay"
  />
);

export default Spinner;
