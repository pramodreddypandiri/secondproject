import React from "react";
//import App from "./App";
function Card ({details}) {
    console.log(details.phone);
    return(
        <>
          <div className="card">
  <img src={details.picture?.thumbnail} alt="Avatar" />
  <div className="container">
    <h4><b>{details.phone}</b></h4>
    <p>{details.name?.first}</p>
  </div>
</div>
        </>
        
    )

}

export default Card