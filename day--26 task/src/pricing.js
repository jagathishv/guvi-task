import React from "react";

function pricing({ name, price, curency, priceper, features }) {
    return (
        <div className="col-lg-4">
            <div className="card mb-5 mb-lg-0">
                <div className="card-body">
                    <h5 className="card-title text-muted text-uppercase text-center">{name}</h5>
                    <h6 className="card-price text-center">{curency}{price}<span class="period">{priceper}</span></h6>
                    <hr />
                    <ul className="fa-ul">
                         { features.map(({ name, access }) => {
                            return access ? (<li><span class="fa-li"><i class="fas fa-check"></i></span>{name}</li>)
                                : (
                                    <li class="text-muted"><span class="fa-li"><i class="fas fa-times"></i></span>{name}</li>
                                );
                            })}             
                    
                    </ul>
                    <div className="d-grid">
                        <a href="#" className="btn btn-primary text-uppercase">Button</a>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default pricing;