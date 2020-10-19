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
    <Helmet title="Works" description="携わったプロダクト『elchika』について紹介しています。" />
    <Contents>
    <PageTitle>Works</PageTitle>
    <Wrapper>
      <h2>elchika</h2>
      <p>
        電子工作のナレッジを共有できるサービス<br/>
        タグ百科や団体機能などがあり、SNSアカウントがあればパスワードなしで登録することが可能です。
      </p>
      <TagList>
        <li>HTML/CSS/JavaScript コーディング</li>
        <li>Webサイトデザイン</li>
        <li>レスポンシブデザイン</li>
        <li>Web/誌面広告制作</li>
      </TagList>
      <ButtonLink><a className="link" href="https://elchika.com/" target="_blank">Webサイトを見る</a></ButtonLink>
      <TopImage>
        <img src="/img/works/elchika.jpg" alt="elchihkaトップ画像"/>
        <p>ファーストビューで初めてサイトを訪れた利用者にサービスの内容を理解してもらえるようにしつつ、記事やログイン等の導線へ行きやすくするための画面内に置けるバランス調整に力を入れました。</p>
      </TopImage>
      <ImageList>
        <li>
          <img src="/img/works/elchika_1.jpg" alt="elchikaイメージ01"/>
          <p>記事ページでは「記事を読む」という行為を邪魔せずに、ページ内で行えるアクションやリンクを如何に使いやすい形で配置するかを考えました。</p>
        </li>
        <li>
          <img src="/img/works/elchika_2.jpg" alt="elchikaイメージ02"/>
          <p>ユーザーページではユーザーそのものをメインとしつつ、各コンテンツへの導線を含めたレイアウト作成に注力しました。</p>
        </li>
        <li>
          <img src="/img/works/elchika_3.jpg" alt="elchikaイメージ03"/>
          <p>タグ百科機能では記事との見た目の差別化を図りつつ、アクションへの導線は共通した形になるよう調整しました。</p>
        </li>
        <li>
          <img src="/img/works/elchika_4.jpg" alt="elchikaイメージ04"/>
          <p>キャンペーン用のメッセージカードの制作も担当しました。使用する紙の選定、デザインと制作、入稿まで行いました。</p>
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
