import React from "react";
import Img from "./img";
import Article from "./article";
import "../css/Skill.css";

function Skill(props) {
  const getYearsExperience = (year) => {
    return year > 0 ? `${year}年` : "1年未満";
  };

  const getLevel = (level) => {
    return [...Array(5)].reduce(function (a, b, i) {
      return level < i + 1 ? a + "☆" : a + "★";
    }, "");
  };

  return (
    <div className="skill_wrapper">
      <p className={`${props.icon} skillTitle`}>{props.skillTitle}</p>
      <Article className={"skill_description"} message={props.description} />

      <div className="skill_list">
        {props.skillList.map((skill) => (
          <div className="skill_card" key={skill.name}>
            <Img src={skill.img} imgSize={150} />
            <p>{skill.name}</p>
            <p>{`経験年数: ${getYearsExperience(skill.year)}`}</p>
            <p>{getLevel(skill.level)}</p>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Skill;
