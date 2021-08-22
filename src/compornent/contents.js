import React from "react";
import Hobby from "./hobby";
import Skill from "./skill";
import Headding from "./headding";
import Article from "./article";

import "../css/Profile.css";
import "../css/HobbyList.css";

// skill img design
import img_html from "../img/skill/icons8-html-5-240.png";
import img_css from "../img/skill/icons8-css3-240.png";
import img_sass from "../img/skill/icons8-sass-384.png";

// skill img frontend
import img_javascript from "../img/skill/icons8-javascript-480.png";
import img_jquery from "../img/skill/icons8-jquery-250.png";
import img_vue from "../img/skill/icons8-vue-js-240.png";
import img_react from "../img/skill/icons8-react-480.png";
import img_typescript from "../img/skill/icons8-typescript-250.png";

// skill img backend
import img_java from "../img/skill/icons8-java-coffee-cup-logo-250.png";
import img_spring_framwork from "../img/skill/icons8-spring-100.png";
import img_c_sharp from "../img/skill/icons8-c-sharp-logo-240.png";
import img_node from "../img/skill/icons8-nodejs-240.png";

// skill img databalse
import img_sqlserver from "../img/skill/icons8-microsoft-sql-server-240.png";

// skill img Modeling
import img_fusion360 from "../img/skill/icons8-autodesk-fusion-360-250.png";
import img_zbrush from "../img/skill/icons8-zbrush-256.png";

//hobby img fusion
import fusion_test from "../img/hobby/test.png";
import fusion_led from "../img/hobby/led.jpg";

//hobby img zbrush
import zbrush_bom from "../img/hobby/bom.png";
import zbrush_shobe from "../img/hobby/shobe.png";

//hobby img program
import program_portfolio from "../img/hobby/portfolio.png";
import program_javascript_study from "../img/hobby/javascript_study.png";

// Server と通信を行い、各種情報を取得できるようにしたい。
class Compornents extends React.Component {
  render() {
    return (
      <main>
        <Profile />
        <SkillList />
        <HobbyList />
      </main>
    );
  }
}

function Profile() {
  const title = "Profile";
  return (
    <section id="profile" className="section">
      <Headding title={title} />
      <Article
        className="self_introduction"
        message={`東京在住のエンジニア。
        出身は山口県の田舎で、自然が好きです。
        趣味はDIYで、最近は3Dモデリングにはまっています。
        
        ユーザーが必要としているモノ、喜んでくれるモノを開発したいと思っています。
        また、メンバーやチーム全体をサポートすることが得意です。
        自主的に業務効率化のツールの作成や勉強会の開催をし、チームのサポートを行いました。
                
        フロントエンド技術に興味があり、Vue.js や React を学習しています。
        ここ数年は開発時に画面を作りこむ事が多く、画面部品にまとまりのないことに疑問を覚えました。
        そんな時に、Vue.js や React といったモダンなフレームワークを知りました。
        画面部品をコンポーネント単位で管理する方法は、いまある課題を解決できる！
        だんだんと複雑になっている画面開発に必要な技術であると思い、現在も日々学習を続けています。
        
        このページは React で作っています。
        １か月足らずの自己学習で作ったページですので拙い部分はご容赦ください（笑）`}
      />
    </section>
  );
}

function SkillList() {
  const title = "Skills";
  const designList = [
    {
      img: img_html,
      name: "HTML5",
      year: "5",
      level: "3",
    },
    {
      img: img_css,
      name: "css3",
      year: "5",
      level: "3",
    },
    {
      img: img_sass,
      name: "Sass",
      year: "2",
      level: "3",
    },
  ];

  const frontendlist = [
    {
      img: img_javascript,
      name: "JavaScript",
      year: "5",
      level: "4",
    },
    {
      img: img_jquery,
      name: "jQuery",
      year: "4",
      level: "3",
    },
    {
      img: img_vue,
      name: "Vue.js",
      year: "1",
      level: "2",
    },
    {
      img: img_react,
      name: "react",
      year: "0",
      level: "1",
    },
    {
      img: img_typescript,
      name: "TypeScript",
      year: "0",
      level: "1",
    },
  ];

  const backendlist = [
    {
      img: img_java,
      name: "Java",
      year: "5",
      level: "4",
    },
    {
      img: img_spring_framwork,
      name: "Spring Framework",
      year: "5",
      level: "3",
    },
    {
      img: img_c_sharp,
      name: "C#",
      year: "1",
      level: "2",
    },
    {
      img: img_node,
      name: "Node.js",
      year: "1",
      level: "2",
    },
  ];

  const databaseList = [
    {
      img: img_sqlserver,
      name: "SQLServer",
      year: "2",
      level: "3",
    },
  ];

  const modelingList = [
    {
      img: img_fusion360,
      name: "Fusion360",
      year: "3",
      level: "3",
    },
    {
      img: img_zbrush,
      name: "ZBrush",
      year: "2",
      level: "2",
    },
  ];

  return (
    <section id="skills" className="section">
      <Headding title={title} />
      <Skill
        icon={"icon_design"}
        skillTitle={"デザイン"}
        skillList={designList}
        description={"基本的な実装は問題なく行えます。"}
      />
      <Skill
        icon={"icon_frontend"}
        skillTitle={"フロントエンド"}
        skillList={frontendlist}
        description={"JavaScript の扱いには自信があります。現在は TypeScript や React等について学習しています。"}
      />
      <Skill
        icon={"icon_backend"}
        skillTitle={"バックエンド"}
        skillList={backendlist}
        description={"Java および Spring Framework については問題なく扱えます。"}
      />
      <Skill
        icon={"icon_database"}
        skillTitle={"データベース"}
        skillList={databaseList}
        description={"基本的なCRUD操作は問題なく行えます。"}
      />
      <Skill
        icon={"icon_modeling"}
        skillTitle={"3DModeling"}
        skillList={modelingList}
        description={"趣味レベルです。"}
      />
    </section>
  );
}

function HobbyList() {
  const title = "Hobby";
  const hobbyList = [
    {
      imgSrc: program_portfolio,
      description: `このページです。
      React を使い初めて作成しましたページです。
      ソースコードは GitHub にあります。
      `
    },
    {
      imgSrc: program_javascript_study,
      description: `初心者 ~ 中級者を対象とした、JavaScript勉強会の資料です。理解が難しい非同期処理を理解できるように作成しました。`,
    },
    {
      imgSrc: fusion_led,
      description: `Fusion360 で作成した電気スタンドです。ピクサー映画の冒頭に登場する電気スタンドを見て作りたくなったので作りました。`
    },
    {
      imgSrc: fusion_test,
      description: `「劇場版 機動戦士ガンダム00 -A wakening of the Trailblazer-」のセラヴィーⅡというガンダムです。Fusion360 を始めたきっかけです。`,
    },
    {
      imgSrc: zbrush_bom,
      description: `『IdentityV 第五人格』のボンボンというキャラクターです。ZBrush を使って作成しました。`,
    },
    {
      imgSrc: zbrush_shobe,
      description: `ZBrush を使って作成したショベルカーです。`,
    },
  ];


  return (
    <section id="hobby" className="section hobby_section">
      <Headding title={title} />
      <ul className="hobby_list">
        {hobbyList.map((hobby,index) => (
          <Hobby
            imgSrc={hobby.imgSrc}
            imgSize={400}
            description={hobby.description}
            key={index}
          />
        ))}
      </ul>
    </section>
  );
}
export default Compornents;
