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
    <Helmet title="Works" description="携わったプロダクト『Manga Plus Creators』について紹介しています。" />
    <Contents>
    <PageTitle>Works</PageTitle>
    <Wrapper>
      <h2>Manga Plus Creators</h2>
      <p>
        集英社様と開発したマンガ作品を投稿できるサービス<br/>
        ジャンプ本誌への掲載権の獲得チャンスがある月間賞やユーザー同士のコミュニケーション機能などがある、海外のユーザーをターゲットにしたWebサービスです。
      </p>
      <TagList>
        <li>要件定義/サイト構成/WF作成/ディレクション</li>
        <li>HTML/CSS/JavaScript コーディング</li>
        <li>Webサイトデザイン</li>
        <li>レスポンシブデザイン</li>
        <li>Web/広告制作</li>
      </TagList>
      <ButtonLink><a className="link" href="https://medibang.com/mpc/" target="_blank">Webサイトを見る</a></ButtonLink>
      <TopImage>
        <img src="/img/works/mpc.jpg" alt="MPCトップ画像"/>
        <p>Webサービス全体の要件定義から参加し、サイト構成、WF作成を経て、クライアント様とのイメージの擦り合わせのための外渉も行いました。</p>
      </TopImage>
      <ImageList>
        <li>
          <img src="/img/works/mpc_1.jpg" alt="MPCイメージ01"/>
          <p>デザイナーと協力し海外ユーザーの視点を取り入れた利用しやすいUI/UXデザインを作り上げました。</p>
        </li>
        <li>
          <img src="/img/works/mpc_2.jpg" alt="MPCイメージ02"/>
          <p>投稿画面では従来のレガシーな機能を維持しつつ、見た目の新しさのバランスを追求しました。</p>
        </li>
        <li>
          <img src="/img/works/mpc_3.jpg" alt="MPCイメージ03"/>
          <p>ジャンプ本誌掲載権のチャンスがある月刊賞の魅力が海外のユーザーに伝わるようにアピールすべきポイントを吟味しLPを作成しました。</p>
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
