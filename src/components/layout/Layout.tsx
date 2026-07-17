import React from "react";

interface WrapperProps {
    children: React.ReactNode;
}

const Wrapper: React.FC<WrapperProps> = ({ children }) => {
    return (
        <div id="wrapper" className="counter-scroll bg_dark position-relative">
            {children}
        </div>
    );
};

export default Wrapper;
