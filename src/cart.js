import React from "react";
import ele from "./ele.json";

function Cart() {
  return (
    <div className="pricing py-5">
      <div className="container">
        <div className="row">
          {ele.map((value, index) => {
            return (
              <div className="col-lg-4">
                <div className="card mb-5 mb-lg-0">
                  <div className="card-body">
                    <h5 className="card-title text-muted text-uppercase text-center">
                      {ele[index].Title}
                    </h5>
                    <h6 className="card-price text-center">
                      {ele[index].price[0]}
                      <span className="period">{ele[index].price[1]}</span>
                    </h6>
                    <hr />
                    <ul className="fa-ul">
                      <li>
                        <span className="fa-li">
                          <i className="fas fa-check"></i>
                        </span>
                        {ele[index].Title !== "FREE" ? (
                          <strong>{ele[index].user}</strong>
                        ) : (
                          ele[index].user
                        )}
                      </li>
                      <li>
                        <span className="fa-li">
                          <i className="fas fa-check"></i>
                        </span>
                        {ele[index].storage}
                      </li>
                      <li>
                        <span className="fa-li">
                          <i className="fas fa-check"></i>
                        </span>
                        {ele[index].projects}
                      </li>
                      <li>
                        <span className="fa-li">
                          <i className="fas fa-check"></i>
                        </span>
                        {ele[index].access}
                      </li>
                      <li
                        className={
                          ele[index].Title === "FREE" ? "text-muted" : " "
                        }
                      >
                        <span className="fa-li">
                          <i
                            className={`fas ${
                              ele[index].Title === "FREE"
                                ? "fa-times"
                                : "fa-check"
                            }`}
                          ></i>
                        </span>
                        {ele[index].privatePro}
                      </li>
                      <li
                        className={
                          ele[index].Title === "FREE" ? "text-muted" : " "
                        }
                      >
                        <span className="fa-li">
                          <i
                            className={`fas ${
                              ele[index].Title === "FREE"
                                ? "fa-times"
                                : "fa-check"
                            }`}
                          ></i>
                        </span>
                        {ele[index].support}
                      </li>
                      <li
                        className={
                          ele[index].Title === "FREE" ? "text-muted" : " "
                        }
                      >
                        <span className="fa-li">
                          <i
                            className={`fas ${
                              ele[index].Title === "FREE"
                                ? "fa-times"
                                : "fa-check"
                            }`}
                          ></i>
                        </span>
                        {ele[index].Title == "PRO" ? (
                          <strong>{ele[index].subdomain}</strong>
                        ) : (
                          ele[index].subdomain
                        )}
                      </li>
                      <li
                        className={
                          ele[index].Title === "PRO" ? " " : "text-muted"
                        }
                      >
                        <span className="fa-li">
                          <i
                            className={`fas ${
                              ele[index].Title === "FREE" ||
                              ele[index].Title === "PLUS"
                                ? "fa-times"
                                : "fa-check"
                            }`}
                          ></i>
                        </span>
                        {ele[index].reports}
                      </li>
                    </ul>
                    <div className="d-grid">
                      <a href="#" className="btn btn-primary text-uppercase">
                        Button
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
}

export default Cart;
