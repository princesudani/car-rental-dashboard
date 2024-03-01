import React from "react";
import "../styles/sell-car.css";
import sellCar from "../assets/images/sell-car.png";
import TrackingChart from "../charts/TrackingChart";
// import { CircularProgressbar, buildStyles } from "react-circular-progressbar";
import {
  CircularProgressbarWithChildren,
  buildStyles,
} from "react-circular-progressbar";

const SellCar = () => {
  // const percentage = 55;
  // const percentage02 = 45;
  return (
    <div className="sell__car">
      <div className="sell__car-wrapper">
        <h2 className="sell__car-title">Sell Cars</h2>
        <div className="sell__car-top">
          <div className="sell__car-img">
            <h2>2022 Mercedes Benz</h2>
            <img src={sellCar} alt="" />
          </div>

          <div className="tracking__history">
            <h3>Tracking History</h3>
            <TrackingChart />
          </div>
        </div>

        <div className="offer__wrapper">
          <div className="offer__top">
            <h2 className="sell__car-title">Offers</h2>

            <div className="filter__widget-01">
              <select>
                <option value="toyota">Toyota</option>
                <option value="bmw">Bmw</option>
                <option value="audi">Audi</option>
              </select>
            </div>
          </div>

          <div className="offer__list">
            <div className="offer__item">
              <div className="box__01">
                <h3 className="client__name">Killian James</h3>
                <h6 className="avg__price">
                  $16,605 <span>average price</span>
                </h6>

                <h6 className="market__price">Market average is $16,244</h6>
                <span className="arrow__key">
                  <i className="ri-arrow-right-line"></i>
                </span>
              </div>

              <div className="circle__wrapper">
                <div className="box__02">
                  {/* <CircularProgressbar
                    value={percentage}
                    text={`${percentage}%`}
                    styles={buildStyles({
                      pathColor: "#01d293",
                      textColor: "#fff",
                      trailColor: "#0b0c28",
                      textSize: "18px",
                    })}
                  ></CircularProgressbar> */}

                  <CircularProgressbarWithChildren
                    value={55}
                    styles={buildStyles({
                      pathColor: "#01d293",
                      trailColor: "#0b0c28",
                    })}
                  >
                    <div
                      style={{ fontSize: 17, marginBottom: 15, color: "#fff" }}
                    >
                      <strong>55%</strong>
                    </div>
                  </CircularProgressbarWithChildren>
                </div>
                <h4>Impression Share</h4>
              </div>

              <div className="box__03">
                <span className="model__spend-icon">
                  <i className="ri-car-line"></i>
                </span>
                <h6 className="spend__amount">$1174</h6>
                <p className="spend__title">Model Spend</p>
              </div>

              <div className="box__04">
                <span className="model__spend-icon">
                  <i className="ri-share-forward-line"></i>
                </span>
                <h6 className="spend__amount">$1174</h6>
                <p className="spend__title">Model Spend</p>
              </div>

              <div className="box__05">
                <span className="model__spend-icon">
                  <i className="ri-money-dollar-circle-line"></i>
                </span>
                <h6 className="spend__amount">$811</h6>
                <p className="spend__title">Spend Per Unit Turned</p>
              </div>
            </div>
            <div className="offer__item">
              <div className="box__01">
                <h3 className="client__name">Jhon Doe</h3>
                <h6 className="avg__price">
                  $11,605 <span>average price</span>
                </h6>

                <h6 className="market__price">Market average is $11,244</h6>
                <span className="arrow__key">
                  <i className="ri-arrow-right-line"></i>
                </span>
              </div>

              <div className="circle__wrapper">
                <div className="box__02">
                  {/* <CircularProgressbar
                    value={percentage02}
                    text={`${percentage02}%`}
                    styles={buildStyles({
                      pathColor: "#01d293",
                      textColor: "#fff",
                      trailColor: "#0b0c28",
                      textSize: "18px",
                    })}
                  /> */}

                  <CircularProgressbarWithChildren
                    value={45}
                    styles={buildStyles({
                      pathColor: "#01d293",
                      trailColor: "#0b0c28",
                    })}
                  >
                    <div
                      style={{ fontSize: 17, marginBottom: 15, color: "#fff" }}
                    >
                      <strong>45%</strong>
                    </div>
                  </CircularProgressbarWithChildren>
                </div>
                <h4>Impression Share</h4>
              </div>

              <div className="box__03">
                <span className="model__spend-icon">
                  <i className="ri-car-line"></i>
                </span>
                <h6 className="spend__amount">$1174</h6>
                <p className="spend__title">Model Spend</p>
              </div>

              <div className="box__04">
                <span className="model__spend-icon">
                  <i className="ri-share-forward-line"></i>
                </span>
                <h6 className="spend__amount">$1174</h6>
                <p className="spend__title">Model Spend</p>
              </div>

              <div className="box__05">
                <span className="model__spend-icon">
                  <i className="ri-money-dollar-circle-line"></i>
                </span>
                <h6 className="spend__amount">$811</h6>
                <p className="spend__title">Spend Per Unit Turned</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SellCar;
