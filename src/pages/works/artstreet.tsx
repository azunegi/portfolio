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
    <Helmet title="Works" description="携わったプロダクト『ART street』について紹介しています。" />
    <Contents>
    <PageTitle>Works</PageTitle>
    <Wrapper>
      <h2>ART street</h2>
      <p>
        自身が描いたイラスト・マンガを共有できるサービス<br/>
        定期的に開催されるコンテスト企画やユーザー同士のコミュニティ機能などがあり、日本のみならず海外のユーザーが多く利用されているサイトです。
      </p>
      <TagList>
        <li>改善施策の立案/ディレクション/効果測定</li>
        <li>HTML/CSS/JavaScript コーディング</li>
        <li>Webサイトデザイン</li>
        <li>レスポンシブデザイン</li>
        <li>Web/広告制作</li>
      </TagList>
      <ButtonLink><a className="link" href="https://medibang.com/" target="_blank">Webサイトを見る</a></ButtonLink>
      <TopImage>
        <img src="/img/works/artstreet.jpg" alt="ART streetトップ画像"/>
        <p>トップページの改善を行いました。訪れた利用者にメインコンテンツであるイラストを多く見せること、ログイン状況やユーザーの状態に合わせて霊供されるコンテンツがフレキシブルに変わるようにしました。</p>
      </TopImage>
      <ImageList>
        <li>
          <img src="/img/works/artstreet_1.jpg" alt="ART streetイメージ01"/>
          <p>デイリーランキングの実装を行いました。既存のランキングシステムでは測れないタイムリーなランキングを届けることを目的とし、画面内の表示数と作品を魅力的にうつせるバランスを追求しました。</p>
        </li>
        <li>
          <img src="/img/works/artstreet_2.jpg" alt="ART streetイメージ02"/>
          <p>ユーザー同士の新たなコミュニケーションの場となるコミュニティ機能の実装に携わりました。言語を問わずコミュニケーションが取れるよう、要件検討からデザイン、初期の運用まで幅広く担当させていただきました。</p>
        </li>
        <li>
          <img src="/img/works/artstreet_3.jpg" alt="atrstreetイメージ03"/>
          <p>サブスクリプションサービスの開始時期用のLPを作成しました。</p>
        </li>
        <li>
          <img src="/img/works/artstreet_4.jpg" alt="atrstreetイメージ04"/>
          <p>サービス内での活動を楽しくするためのアチーブメント機能のバッジを一部デザインしました。</p>
        </li>
      </ImageList>
      <h2>Other Works</h2>
        <CardList>
        <li>
          <AniLink cover to="/works/medibangpaint" duration={0.75} bg="#4db789" direction="up">
              <div className="image"><img src="/img/works/medibangpaint.jpg" alt="MediBang Paint" /></div>
            </AniLink>
            <b>MediBang Paint</b>
          </li>
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
