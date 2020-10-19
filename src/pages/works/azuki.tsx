import Layout from "@/layouts/WorksLayout";
import React from "react";
import Helmet from "@/components/Helmet";
import styled from "@emotion/styled";
import Contents from "@/components/Contents";
import PageTitle from "@/components/PageTitle";
import Wrapper from "@/components/Works/WorksWrapper";
import TagList from "@/components/Works/TagList";
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
    <Helmet title="Works" description="制作したプロダクト『Azuki's Portfolio』について紹介しています。" />
    <Contents>
    <PageTitle>Works</PageTitle>
    <Wrapper>
      <h2>Azuki's Portfolio</h2>
      <p>
        当サイト管理人のWebデザイナー「Azuki」のポートフォリオサイトです。<br/>
        ReactとGatsbyJsの勉強を兼ねて制作しました。
      </p>
      <TagList>
        <li>HTML/CSS/JavaScript コーディング</li>
        <li>Webサイトデザイン</li>
        <li>レスポンシブデザイン</li>
      </TagList>
      <ButtonLink><a className="link" href="/" target="_blank">Webサイトを見る</a></ButtonLink>
      <TopImage>
        <img src="/img/works/azuki_portfolio.jpg" alt="Azuki's Portfolioトップ画像"/>
        <p>流れるようにに私自身について知ってもらえるよう、基本1ページ構成になるように制作しました。シンプルなデザインで分かりやすい配置になるよう調整しています。ちなみにロゴマークは家紋の「鷹の羽」からインスピレーションを得て作りました。</p>
      </TopImage>
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
          <AniLink cover to="/works/eimee" duration={0.75} bg="#4db789" direction="up">
              <div className="image"><img src="/img/works/eimee.jpg" alt="eimee" /></div>
            </AniLink>
            <b>Eimee Inc.</b>
          </li>
        </CardList>
    </Wrapper>
    </Contents>
  </Layout>
);
