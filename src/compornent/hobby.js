import React from "react";
import Img from "./img";
import Article from "./article";

function Hobby(props) {
  const width = 400;
  const styles = {
    width: `${width}px`,
  };
  return (
    <li className="hobby" style={styles}>
      <Img
        src={props.imgSrc}
        imgSize={width}
        isModal={true}
        content={<Img src={props.imgSrc} />}
      ></Img>
      <Article message={props.description} />
    </li>
  );
}

export default Hobby;
