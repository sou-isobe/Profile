import Img from "./img";

import "../css/Header.css";

import img_header from "../img/header/IMG_2084.jpg";
import img_profile from "../img/header/profile.jpg";

function Header() {
  return (
    <div className="header">
      <div className="header_img">
        <Img src={img_header} imgSize={""} />
        <div className="head_wrapper">
          <div>
            <Img src={img_profile} imgSize={"200"} />
            <div className="perfect-circle"></div>
          </div>
        </div>
      </div>
      <div className="header_about_me">
        <p className="header_about_me__name">ISB</p>
        <p className="header_about_me__description">
          このページは私のポートフォリオ（自己紹介、作品紹介）です。
        </p>
      </div>
      <div className="header_content">
        <ul>
          <li>
            <a href="#profile" className="icon_header icon_header__profile">
              Profile
            </a>
          </li>
          <li>
            <a href="#skills" className="icon_header icon_header__skill">
              Skills
            </a>
          </li>
          <li>
            <a href="#hobby" className="icon_header icon_header__hobby">
              Hobby
            </a>
          </li>
        </ul>
      </div>
    </div>
  );
}

export default Header;
