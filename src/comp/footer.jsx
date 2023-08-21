import React from "react";

function Footer(){
    const nd = new Date();
    const curyear = nd.getFullYear();
    return <footer>
        <p>Copyright Ahmed Mohammed {curyear}</p>
    </footer>
}

export default Footer;