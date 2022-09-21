import React from "react";

const CustomButton = ({
  onclick, children, extraClass
}) => {

  return (
    <button onClick={onclick} className={extraClass}>
      {children}
    </button>
  );
};

export default CustomButton;
