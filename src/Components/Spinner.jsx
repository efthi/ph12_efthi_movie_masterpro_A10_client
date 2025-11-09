import React from 'react';
import { HashLoader } from "react-spinners";

const Spinner = () => {
    return (
        <>
         <div className="flex justify-center items-center mt-[200]">
            <HashLoader
                color="#41f315"
                cssOverride={null}
                loading
                size={200}
            />
        </div>   
        </>
    );
};

export default Spinner;