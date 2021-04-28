import React, { Component } from "react";
import BtnColorGlass from "./BtnColorGlass";
import Glass from "./Glass";

class ShowGlass extends Component {
  glassImg = "./img/glassesImage/v1.png";

  state = {
    glassImg: "./img/glassesImage/v1.png",
    btnChoiceColorList: [
      {
        name: "g1",
        imgSrc: "./img/glassesImage/v1.png",
      },
      {
        name: "g2",
        imgSrc: "./img/glassesImage/v2.png",
      },
      {
        name: "g3",
        imgSrc: "./img/glassesImage/v3.png",
      },
      {
        name: "g4",
        imgSrc: "./img/glassesImage/v4.png",
      },
      {
        name: "g5",
        imgSrc: "./img/glassesImage/v5.png",
      },
      {
        name: "g6",
        imgSrc: "./img/glassesImage/v6.png",
      },
      {
        name: "g7",
        imgSrc: "./img/glassesImage/v7.png",
      },
      {
        name: "g8",
        imgSrc: "./img/glassesImage/v8.png",
      },
      {
        name: "g9",
        imgSrc: "./img/glassesImage/v9.png",
      },
    ],
  };

  handleClick = (color) => {
    console.log(color);
    let urlImage = "";
    switch (color) {
      case "g1":
        urlImage = "./img/glassesImage/v1.png";
        break;
      case "g2":
        urlImage = "./img/glassesImage/v2.png";
        break;
      case "g3":
        urlImage = "./img/glassesImage/v3.png";
        break;
      case "g4":
        urlImage = "./img/glassesImage/v4.png";
        break;
      case "g5":
        urlImage = "./img/glassesImage/v5.png";
        break;
      case "g6":
        urlImage = "./img/glassesImage/v6.png";
        break;
      case "g7":
        urlImage = "./img/glassesImage/v7.png";
        break;
      case "g8":
        urlImage = "./img/glassesImage/v8.png";
        break;
      default:
        urlImage = "./img/glassesImage/v9.png";
        break;
    }

    console.log("trước setState ", this.state.glassImg);

    this.setState(
      {
        glassImg: urlImage,
      },
      () => {
        console.log("sau setState ", this.state.glassImg);
      }
    );
  };

  renderBtnChoiceColorList = () => {
    return this.state.btnChoiceColorList.map((btn, index) => {
      return (
        <BtnColorGlass key={index} btn={btn} handleClick={this.handleClick} />
      );
    });
  };

  render() {
    return (
      <section className="glasses-app bg-dark" style={{ height: "100vh" }}>
        <h2 className="text-center h2 text-white py-1">Glasses App</h2>
        <div className="d-flex justify-content-center align-items-center">
          <Glass
            imgSrc={this.state.glassImg}
            render={this.renderBtnChoiceColorList()}
          />
        </div>
      </section>
    );
  }
}
export default ShowGlass;
