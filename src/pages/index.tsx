import Layout from "@/layouts/Layout";
import React from "react";
import Helmet from "@/components/Helmet";
import styled from "@emotion/styled";
import Contents from "@/components/Contents";
import CardList from "@/components/Works/CardList";
import ImageList from "@/components/Works/ImageList";
import AniLink from "gatsby-plugin-transition-link/AniLink";
import Contact from "@/components/Contact";

const LogoTitle = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-wrap: wrap;
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
`;

const Logo = styled.img`
  width: 240px;
  animation: rotate 3.6s infinite;
  animation-timing-function: cubic-bezier(0.43, 0.11, 0.54, 0.88);
  
  @keyframes rotate {
    0%{ transform:rotateY(0);}
    100%{ transform:rotateY(360deg); }
  }
`;

const Title = styled.h1`
  position: relative;
  overflow: hidden;
  width: 100%;
  margin-top: 16px;
  text-align: center;
  font-size: 4rem;
  font-family: "Ubuntu";
  color: #424242;
  z-index: 1;

  &:after {
    content: "";
    display: block;
    width: 30px;
    height: 100%;
    position: absolute;
    top: -180px;
    left: 0;
    background-color: #FFF;
    opacity: 0;
    transform: rotate(45deg);
    animation: reflect 3.6s ease-in-out infinite;
    animation-delay: 1.8s;
  }

  @keyframes reflect {
    0% { transform: scale(0) rotate(45deg); opacity: 0; }
    80% { transform: scale(0) rotate(45deg); opacity: 0.5; }
    81% { transform: scale(4) rotate(45deg); opacity: 1; }
    100% { transform: scale(50) rotate(45deg); opacity: 0; }
  }
`;

const Cursor = styled.img`
  width: 50px;
  position: absolute;
  bottom: 40px;
  left: calc(50% - 25px);

  animation: cursor 2s infinite;
  animation-timing-function: cubic-bezier(0.43, 0.11, 0.54, 0.88);
  
  @keyframes cursor {
    0%{ transform: translateY(-20px); opacity: 0;}
    30%{ opacity: 100%;}
    70%{ opacity: 100%;}
    100%{ transform: translateY(0); opacity: 0;}
  }
`;

const ContentTitle = styled.h2`
  position: relative;
  overflow: hidden;
  width: 100%;
  margin-bottom: 40px;
  text-align: center;
  font-size: 3.6rem;
  font-family: "Ubuntu";
  color: #424242;
`;

const Profile = styled.div`
  display: grid;
  grid-template:
    "icon  ..... name " auto
    "..... ..... ....." 20px
    "text  text  text " auto
    "..... ..... ....." 20px
    "skill skill skill" auto/60px 20px 1fr;
  width: 100%;
  padding: 20px;
  border: solid 3px #b1b1b1;
  border-radius: 3px;
  background: #ffffff;

  @media screen and (max-width: 1024px) {
    width: calc(100% - 6vw);
    margin: 0 3vw;
  }
`;

const Icon = styled.div`
  grid-area: icon;
  width: 60px;
  height: 60px;
  display: flex;
  overflow: hidden;
  border-radius: 50%;

  & > img {
    width: 100%;
  }
`;

const Name = styled.h3 `
  grid-area: name;
  display: flex;
  justify-content: left;
  align-items: center;
  font-size: 2.4rem;
  font-family: "Ubuntu";
`;

const Description = styled.p`
  grid-area: text;
  padding: 20px 0 0 0;
  border-top: solid 1px #e3e3e3;
  font-size: 1.6rem;
  line-height: 1.5;
`;

const Skill = styled.div`
  grid-area: skill;
  padding: 20px 0 0 0;
  border-top: solid 1px #e3e3e3;
  font-size: 1.6rem;
  line-height: 1.5;
`;

const H4 = styled.h4`
  font-size: 2.4rem;
  font-family: "Ubuntu";
`;

const H5 = styled.h5`
margin-top: 20px;
font-size: 2rem;
font-family: "Ubuntu";
`;

const Works = styled.div`
  display: flex;
  flex-wrap: wrap;
  width: 100%;
`;

const Text = styled.p`
  margin-bottom: 40px;
  font-size: 1.6rem;
  line-height: 1.5;
`;

const line = {
  width: '100%',
  height: '0',
  margin: '0',
  border: 'none',
};

export default () => (
  <Layout>
    <Helmet />
    <Contents>
      <LogoTitle>
        <Logo src="/img/logo.svg" alt="ロゴ"/>
        <Title>Azuki's Portfolio</Title>
      </LogoTitle>
      <Cursor src="/img/cursor.svg" alt="cursor"/>
    </Contents>
    <hr style={line} id="profile"/>
    <Contents>
      <ContentTitle>Profile</ContentTitle>
      <Profile>
      <Icon><img src="/img/icon.svg" alt="アイコン"/></Icon>
      <Name>Azuki</Name>
    <Description>
      都内でWebデザイナーとしてWebサービスの開発、社内全般の広告や印刷物の制作等を行っていました。<br/>
      最近はデザインのみに留まらずフロントエンド開発にも挑戦しています。<br/><br/>
      イラスト、写真、プラモデル、造形、裁縫、人形製作と趣味が多く、手広くオタクをしており漫画、アニメ、ゲームも大好きです。<br/>
      自身のスキルを活かしたり、様々なことに挑戦できるようなお仕事を探しています!
    </Description>
    <Skill>
      <H4>Skills</H4>
      <H5>Languages</H5>
      <p>JavaScript, HTML5, CSS3(SCSS, PostCSS)</p>
      <H5>Frontend</H5>
      <p>Vue.js, Nuxt.js, GatsbyJS, React</p>
      <H5>Tools</H5>
      <p>Adobe Photoshop, Illustrator, Lightroom, Adobe XD, Aftereffect, Dreamweaver, Figma</p>
    </Skill>
    </Profile>
      <Cursor src="/img/cursor.svg" alt="cursor"/>
    </Contents>
    <hr style={line} id="works"/>
    <Contents>
    <ContentTitle>Works</ContentTitle>
      <Works>
        <CardList>
          <li>
            <AniLink cover to="/works/medibangpaint" duration={0.75} bg="#4db789" direction="up">
              <div className="image"><img src="/img/works/medibangpaint.jpg" alt="medibangpaint" /></div>
            </AniLink>
            <b>MediBang Paint</b>
          </li>
          <li>
            <AniLink cover to="/works/medibangtrade" duration={0.75} bg="#4db789" direction="up">
              <div className="image"><img src="/img/works/trade.jpg" alt="medibangtrade" /></div>
            </AniLink>
            <b>MediBang TraDe</b>
          </li>
          <li>
            <AniLink cover to="/works/mpc" duration={0.75} bg="#4db789" direction="up">
              <div className="image"><img src="/img/works/mpc.jpg" alt="mpc" /></div>
            </AniLink>
            <b>MANGA Plus Creators</b>
          </li>
          <li>
            <AniLink cover to="/works/artstreet" duration={0.75} bg="#4db789" direction="up">
              <div className="image"><img src="/img/works/artstreet.jpg" alt="artstreet" /></div>
            </AniLink>
            <b>ART street</b>
          </li>
          <li>
            <AniLink cover to="/works/kuchikomu" duration={0.75} bg="#4db789" direction="up">
              <div className="image"><img src="/img/works/kuchikomu.jpg" alt="kuchikomu" /></div>
            </AniLink>
            <b>クチコム</b>
          </li>
          <li>
          <AniLink cover to="/works/elchika" duration={0.75} bg="#4db789" direction="up">
              <div className="image"><img src="/img/works/elchika.jpg" alt="elchika" /></div>
            </AniLink>
            <b>elchika</b>
          </li>
          <li>
          <AniLink cover to="/works/eimee" duration={0.75} bg="#4db789" direction="up">
              <div className="image"><img src="/img/works/eimee.jpg" alt="eimee" /></div>
            </AniLink>
            <b>Eimee Inc.</b>
          </li>
          <li>
          <AniLink cover to="/works/azuki" duration={0.75} bg="#4db789" direction="up">
              <div className="image"><img src="/img/works/azuki_portfolio.jpg" alt="azuki_portfolio" /></div>
            </AniLink>
            <b>Azuki's Portfolio</b>
          </li>
        </CardList>
      </Works>
      <Cursor src="/img/cursor.svg" alt="cursor"/>
    </Contents>
    <hr style={line} id="hobby"/>
    <Contents>
      <ContentTitle>Hobby</ContentTitle>
      <Text>最近のお気に入りをピックアップ</Text>
      <ImageList>
        <li><img src="/img/hobby/hobby_1.jpg" alt="舞浜イルミネーション"/></li>
        <li><img src="/img/hobby/hobby_2.jpg" alt="江の島イルミネーション"/></li>
        <li><img src="/img/hobby/hobby_3.jpg" alt="ドール寝そべり"/></li>
        <li><img src="/img/hobby/hobby_4.jpg" alt="タイプライター"/></li>
      </ImageList>
      <Cursor src="/img/cursor.svg" alt="cursor"/>
    </Contents>
    <hr style={line} id="contact"/>
    <Contents>
    <ContentTitle>Contact</ContentTitle>
    <Contact />
    </Contents>
  </Layout>
);
