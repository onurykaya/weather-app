import React from 'react'




const minMax = (min, max) =>{
  return (
    <h3>
      <span className="mx-4"> {Math.floor(min-273)}&deg; </span>
      <span className="mx-4"> {Math.floor(max-273)}&deg; </span>
    </h3>
  );
}

export default function Weather(props) {
    return (
      <div className="container">
        <div className="cards">
          <h1> {props.city}</h1>
          <h5 className="py-4">
            <i className={`wi ${props.icon} display-1`}></i>
          </h5>
          <h1 className="py-3"> {Math.floor(props.temp-273)}&deg; </h1>
          {
            <span className="py-3">
              {
                minMax(props.temp_min, props.temp_max)
              }
            </span>
          }
          <h5 className="py-3"> {props.description} </h5>
        </div>
      </div>
    );
}
