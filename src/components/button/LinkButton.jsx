import React from "react";
import { Link } from "react-router-dom";
import CustomButton from "./CustomButton";

const LinkButton = ({
  onclick, children, extraClass, path
}) => {

  return (
    <Link to={path}>
      <CustomButton 
        onclick={onclick} 
        children={children}
        extraClass={extraClass}/>
    </Link>
  );
};

export default LinkButton;
