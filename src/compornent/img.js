import React from "react";
import "../css/Img.css";

const { useState } = React;

// position: fixed がうまく適用されないので代替案
function scroll_control(event) {
  event.preventDefault();
}

function Img(props) {
  const [show, setShow] = useState(false);
  const getStyle = () => {
    if (props.imgSize) {
      return {
        width: `${props.imgSize}px`,
        height: `${props.imgSize}px`,
      };
    } else {
      return {
        width: "100%",
        height: "100%",
      };
    }
  };

  const openModal = () => {
    setShow(true);
    document.addEventListener("mousewheel", scroll_control, { passive: false });
  };

  return (
    <div className="img__wrapper">
      <img
        src={props.src}
        className={props.isModal && "img_hover" }
        alt=""
        style={getStyle(props.imgSize)}
        onClick={props.isModal && openModal}
      ></img>
      {props.isModal && <Modal show={show} setShow={setShow} content={props.content}/>}
    </div>
  );
}

function Modal({ show, setShow, content}) {
  const closeModal = () => {
    setShow(false);
    document.removeEventListener("mousewheel", scroll_control, { passive: false });
  };
  if (show) {
    return (
      <div id="overlay">
        <div id="content" onClick={(e) => e.stopPropagation()}>
          {content}
          <button onClick={closeModal}>Close</button>
        </div>
      </div>
    );
  } else {
    return null;
  }
}

export default Img;
