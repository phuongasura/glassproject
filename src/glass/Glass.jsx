import React, { Component } from "react";

class Glass extends Component {
  render() {
    const { imgSrc, render } = this.props;
    return (
      <div className="container row">
        <div className="model d-flex justify-content-center col-5">
          <div
            className="card text-left"
            style={{ width: 300, position: "relative" }}
          >
            <img
              className="card-img-top"
              src="./img/glassesImage/model.jpg"
              alt="hinh model"
            />
            <img
              src={imgSrc}
              alt="kinh"
              style={{
                width: 170,
                position: "absolute",
                left: "50%",
                transform: "translateX(-50%)",
                top: "16%",
              }}
            />
            <div className="card-body">
              <span className="card-title badge-danger h3 px-2 rounded">
                $30
              </span>
              <p className="card-text mt-2">GUCCI G8850U</p>
            </div>
          </div>
        </div>

        <div className="glasses__list mt-4 d-flex justify-content-around flex-wrap col-7">
          <div class="row">{render}</div>
        </div>
      </div>
    );
  }
}
export default Glass;
