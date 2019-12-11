import React from 'react'

function error(){
  return (
    <div className="alert alert-danger mx-5" role="alert">
      Lütfen Şehir ve Ülkeyi Giriniz!
    </div>
  );
}

export default function Form(props) {
    return (
        
            <div className="container">
                <form onSubmit={props.submitWeather}>
                    <div> {props.error ? error() : null } </div>
                    <div className="row mt-4">  
                        < div className = "col-md-3 offset-md-2 mt-3" >
                            <input type="text" className="form-control" name="city" autoComplete="off" placeholder="City" />
                        </div>
                        <div className="col-md-3 mt-3">
                            <input type="text" className="form-control" name="country" autoComplete="off" placeholder="Country" />
                        </div>
                        < div className = "col-md-3 mt-md-0 text-md-left" >
                            <button className="btn btn-warning mb-4 mt-3">Ara</button>
                        </div>
                    </div>
                </form>
            </div>
        
    )
}
