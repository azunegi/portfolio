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

const TopImage = styled.img`
  display: block;
  width: 100%;
  margin-bottom: 20px;
  border: solid 1px #b1b1b1;

  @media screen and (max-width: 1024px) {
    width: calc(100% - 6vw);
    margin: 0 3vw 20px 3vw;
  }
`;

const ButtonLink = styled.div`
    position: relative;
    padding: 10px 24px;
    margin-bottom: 40px;
    color: #e3e3e3;
    text-align: center;
    font-size: 1.6rem;
    font-weight: bold;
    border: solid 2px #e3e3e3;
    border-radius: 30px;
    pointer-events: none;

    &:after {
      content: "※現在はサービスを終了しています";
      width: 200px;
      position: absolute;
      bottom: -20px;
      left: calc(50% - 100px);
      color: #b1b1b1;
      font-size: 1.2rem;
      font-weight: normal;
    }
`;

export default () => (
  <Layout>
    <Helmet title="Works" description="携わったプロダクト『クチコム』について紹介しています。" />
    <Contents>
    <PageTitle>Works</PageTitle>
    <Wrapper>
      <h2>クチコム</h2>
      <p>
        全国のお店やオンラインで申し込めるサービス（保険やウォーターサーバー等）を探したり口コミを投稿できるサービス。<br/>
        投稿された口コミをユーザー同士で精査しあう独自のシステムや多彩な検索機能でお店探しを行うことが可能です。
      </p>
      <TagList>
        <li>HTML/CSS/JavaScript コーディング</li>
        <li>Webサイトデザイン</li>
        <li>モバイルサイトデザイン</li>
        <li>モバイルサイト制作</li>
        <li>宣伝用チラシ制作</li>
      </TagList>
      <ButtonLink>Webサイトを見る</ButtonLink>
      <TopImage src="/img/works/kuchikomu.jpg" alt="クチコムTop画像"></TopImage>
      <ImageList>
        <li><img src="/img/works/kuchikomu_1.jpg" alt="クチコムイメージ01"/></li>
        <li><img src="/img/works/kuchikomu_2.jpg" alt="クチコムイメージ02"/></li>
        <li><img src="/img/works/kuchikomu_3.jpg" alt="クチコムイメージ03"/></li>
        <li><img src="/img/works/kuchikomu_4.jpg" alt="クチコムイメージ04"/></li>
      </ImageList>
      <h2>Other Works</h2>
        <CardList>
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
    </Wrapper>
    </Contents>
  </Layout>
);
