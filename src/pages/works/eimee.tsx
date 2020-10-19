import Layout from "@/layouts/WorksLayout";
import React from "react";
import Helmet from "@/components/Helmet";
import styled from "@emotion/styled";
import Contents from "@/components/Contents";
import PageTitle from "@/components/PageTitle";
import Wrapper from "@/components/Works/WorksWrapper";
import TagList from "@/components/Works/TagList";
import ImageList from "@/components/Works/ImageList";
import CardList from "@/components/Works/CardList";
import AniLink from "gatsby-plugin-transition-link/AniLink";

const TopImage = styled.div`
  display: block;
  width: 100%;
  margin-bottom: 60px;

  @media screen and (max-width: 1024px) {
    width: calc(100% - 6vw);
    margin: 0 3vw 60px 3vw;
  }

  & > img {
    border: solid 1px #b1b1b1;
  }
  & > p {
    margin-top: 20px;
    font-size: 1.6rem;
    line-height: 1.5;
  }
`;

const ButtonLink = styled.div`
    & > .link {
      display: block;
      position: relative;
      padding: 10px 24px;
      margin-bottom: 40px;
      color: #ffffff;
      text-decoration: none;
      text-align: center;
      font-size: 1.6rem;
      border-radius: 6px;
      background: #679dff;
    }
`;

export default () => (
  <Layout>
    <Helmet title="Works" description="携わったプロダクト『エイミー株式会社様のコーポレートサイト』について紹介しています。" />
    <Contents>
    <PageTitle>Works</PageTitle>
    <Wrapper>
      <h2>Eimee Inc.</h2>
      <p>
        エイミー株式会社様のコーポレートサイト<br/>
        コーポレートサイトに加えて、会社案内パンフレットやその他印刷物も制作させて頂きました。
      </p>
      <TagList>
        <li>HTML/CSS/JavaScript コーディング</li>
        <li>Webサイトデザイン</li>
        <li>レスポンシブデザイン</li>
        <li>Web/誌面広告制作</li>
      </TagList>
      <ButtonLink><a className="link" href="https://eimee.co.jp/" target="_blank">Webサイトを見る</a></ButtonLink>
      <TopImage>
        <img src="/img/works/eimee.jpg" alt="Eimee Inc.トップ画像"/>
          <p>トップページでは会社の持つイメージを表した画像を大きく配置し、サイトの雰囲気が出るようにしてあります。</p>
      </TopImage>
      <ImageList>
        <li>
          <img src="/img/works/eimee_1.jpg" alt="eimeeイメージ01"/>
          <p>個人情報保護方針ページのトップ画像用の写真を撮影。被写体の制作から撮影、レタッチまで行いました。</p>
        </li>
        <li>
          <img src="/img/works/eimee_2.jpg" alt="eimeeイメージ02"/>
          <p>会社の制度を紹介したページではライティングのディレクションも行い、会社から求職者へ伝えるべき内容を精査しより伝わりやすいものに仕上げました。</p>
        </li>
        <li>
          <img src="/img/works/eimee_3.jpg" alt="eimeeイメージ03"/>
          <p>会社案内のパンフレットを制作も制作しました。こちらでは企画、提案から制作と入稿までの作業を行いました。</p>
        </li>
        <li>
          <img src="/img/works/eimee_4.jpg" alt="eimeeイメージ04"/>
          <p>印刷物では他にも採用関係のチラシや社内業務で使用する封筒などの制作も担当しました。</p>
        </li>
      </ImageList>
      <h2>Other Works</h2>
        <CardList>
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
          <AniLink cover to="/works/azuki" duration={0.75} bg="#4db789" direction="up">
              <div className="image"><img src="/img/works/azuki_portfolio.jpg" alt="azuki_portfolio" /></div>
            </AniLink>
            <b>Azuki's Portfolio</b>
          </li>
        </CardList>
    </Wrapper>
    </Contents>
  </Layout>
);
