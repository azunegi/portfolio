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
    <Helmet title="Works" description="携わったプロダクト『MediBang Paint』について紹介しています。" />
    <Contents>
    <PageTitle>Works</PageTitle>
    <Wrapper>
      <h2>MediBang Paint</h2>
      <p>
        イラストやマンガが描けるアプリ<br/>
        iPhone, iPad, Android, Windows/Mac, Steamで利用できるマルチプラットフォームのアプリケーション。クラウド機能を利用した環境を問わないシームレスな作業が魅力です。
      </p>
      <TagList>
        <li>改善施策の立案/WF作成/ディレクション/効果測定</li>
        <li>HTML/CSS/JavaScript コーディング</li>
        <li>Webサイトデザイン</li>
        <li>レスポンシブデザイン</li>
        <li>Web/誌面広告制作</li>
      </TagList>
      <ButtonLink><a className="link" href="https://medibangpaint.com/" target="_blank">Webサイトを見る</a></ButtonLink>
      <TopImage>
        <img src="/img/works/medibangpaint.jpg" alt="MediBang Paintトップ画像"/>
        <p>アプリケーションのグロースのための改善施策の立案から要件定義、デザインとWeb実装、効果測定まで一貫して行いました。
        </p>
      </TopImage>
      <ImageList>
        <li>
          <img src="/img/works/medibangpaint_1.jpg" alt="MediBang Paintイメージ01"/>
          <p>サブスクリプションサービスの実装に参加し、WFの作成やアプリ画面のデザイン、WebサイトのLP作成や既存ページの改修を行いました。</p>
        </li>
        <li>
          <img src="/img/works/medibangpaint_2.jpg" alt="MediBang Paintイメージ02"/>
          <p>サブスク機能の紹介ページの改善を内容の立案から参加し、アプリとの連携含めた要件定義も行いました。</p>
        </li>
        <li>
          <img src="/img/works/medibangpaint_3.jpg" alt="MediBang Paintイメージ03"/>
          <p>アプリ機能の周知のための記事制作を企画から記事内容の執筆、ページのデザインと実装、効果測定からの改善まで一貫して行いました。</p>
        </li>
      </ImageList>
      <h2>Other Works</h2>
        <CardList>
          <li>
          <AniLink cover to="/works/medibangtrade" duration={0.75} bg="#4db789" direction="up">
              <div className="image"><img src="/img/works/trade.jpg" alt="MediBang TraDe" /></div>
            </AniLink>
            <b>MediBang TraDe</b>
          </li>
          <li>
          <AniLink cover to="/works/mpc" duration={0.75} bg="#4db789" direction="up">
              <div className="image"><img src="/img/works/mpc.jpg" alt="MANGA Plus Creators" /></div>
            </AniLink>
            <b>MANGA Plus Creators</b>
          </li>
          <li>
          <AniLink cover to="/works/artstreet" duration={0.75} bg="#4db789" direction="up">
              <div className="image"><img src="/img/works/artstreet.jpg" alt="ART street" /></div>
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
    </Wrapper>
    </Contents>
  </Layout>
);
