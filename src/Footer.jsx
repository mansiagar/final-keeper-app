import React from "react";

const CurrentTime= new Date();


function Footer(){
return(
    
        <footer>
            <h1>Copyright@{CurrentTime.getFullYear()}</h1>
        </footer>
    
);

}
 export default Footer;