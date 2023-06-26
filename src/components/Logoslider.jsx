import React from "react";
import "./logoslider.css";

const Logoslider = () => {
    return (
        <div className="slider-area">
            {/* <h2>Our Clients</h2> */}
            <div className="wrapper">
                <div className="item"><img alt="" src="https://www.infosys.com/content/dam/infosys-web/en/global-resource/media-resources/infosys-logo-jpeg.jpg"/></div>
                <div className="item"><img alt="" src="./logo.png"/></div>
                <div className="item"><img alt="" src="https://purepng.com/public/uploads/large/purepng.com-ibm-logologobrand-logoiconslogos-251519939176ka7y8.png"/></div>
                
                <div className="item"><img alt="midas" src="https://midasfloor.com/_next/static/media/midaslogo.9e0725e4.svg"/></div>
               
               
                {/* <div className="item"><img alt="" src="./logo.png"/></div> */}
            </div>
	    </div>
    );
};

export default Logoslider;