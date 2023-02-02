import React from 'react';
import { ThreeDots } from 'react-loader-spinner';

const Loader = () => {
  return (
    <ThreeDots
      height="50"
      width="50"
      radius="7"
      color="#4fa94d"
      ariaLabel="three-dots-loading"
      wrapperClassName=""
      visible={true}
    />
  );
};

export default Loader;
