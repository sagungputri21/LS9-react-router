import React from "react";
import Navbar from "../navbar/Navbar";

const Container = ({ children }) => {
    return (
    <div className="min-h-screen w-full max-w-screen-xl mx-auto px-5">
        {children}
    </div>
    )
}

export default Container;