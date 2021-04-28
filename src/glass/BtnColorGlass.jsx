import React, { Component } from "react";

class BtnColorGlass extends Component {
  render() {
    const { btn, handleClick } = this.props; // es6
    return (
      <div className="col-3">
        <button
          className="btn btn-outline-secondary"
          onClick={() => handleClick(btn.name)}
        >
          <img
            src={btn.imgSrc}
            alt="kinh"
            style={{
              width: 100,
              borderRadius: 20,
            }}
          />
        </button>
      </div>
    );
  }
}
export default BtnColorGlass;
