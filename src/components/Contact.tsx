import React from "react"
import styled from "@emotion/styled"
import { useForm } from "react-hook-form";

type Inputs = {
  name: string,
  email: string,
  content: string,
};

const Wrapper = styled.div`
width: 100%;

@media screen and (max-width: 1024px) {
  padding: 0 3vw;
}

& > form {
  display: flex;
  flex-wrap: wrap;
  align-items: flex-start;
  justify-content: center;
  width: 100%;
  padding: 40px 20px;
  border: solid 3px #b1b1b1;
  background: #ffffff;

  & > p {
    wiidth: 100%;
    margin-bottom: 40px;
    text-align: center;
    font-size: 1.6rem;
    line-height: 1.5;
  }

  & > label {
    width: 100%;
    padding-left: 10px;
    margin-bottom: 10px;
    font-size: 1.8rem;
    font-weight: bold;
  }

  & > .box {
    width: 100%;
    position: relative;

    & > input {
      width: 100%;
      height: 50px;
      padding:10px;
      margin-bottom: 40px;
      font-size: 1.6rem;
      border: solid 1px #e1e1e1;
      border-radius: 6px;
      background: #ffffff;

      &:focus {
        border-color: #4db789;
        border-width: 2px;
      }
    }
  
    & > textarea {
      width: 100%;
      min-width: 100%;
      max-width: 100%;
      min-height: 300px;
      padding:10px;
      margin-bottom: 40px;
      font-size: 1.6rem;
      border: solid 1px #e1e1e1;
      border-radius: 6px;
      background: #ffffff;

      &:focus {
        border-color: #4db789;
        border-width: 2px;
        outline: none;
      }
    }

    & > span {
      position: absolute;
      bottom: 20px;
      left: 10px;
      width: 100%;
      color: #ef0000;
      font-size: 1.2rem;
    }
  }
  & > button {
    display: block;
    width: 300px;
    height: 50px;
    color: #ffffff;
    -webkit-text-decoration: none;
    text-decoration: none;
    text-align: center;
    font-size: 1.6rem;
    font-weight: bold;
    border-radius: 6px;
    background: #679dff;
  }
}
`;

export default function App() {
  const { register, handleSubmit, errors } = useForm<Inputs>();
  const onSubmit = data => console.log(data);

  return (
    <Wrapper>
      <form 
        name="contact"
        method="post"
        data-netlify="true"
        netlify-honeypot="bot-field"
        onSubmit={handleSubmit(onSubmit)}
      >
        <input type="hidden" name="bot-field" />
        <input type="hidden" name="form-name" value="contact" />
        <p>
          採用関係や質問・バグ報告・その他についても受け付けております。<br/>
          ただしセールス・勧誘などは固くお断りしていますのでご了承ください。
        </p>
        <label>名前 (社名)</label>
        <div className="box">
          <input name="name" ref={register({ required: true })} />
          {errors.name && <span>※お名前(社名)は入力必須です。</span>}
        </div>
        <label>メールアドレス</label>
        <div className="box">
          <input 
            name="email" 
            ref={register({
              required: true,
              pattern: {
                value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i,
                message: "",
              },
            })} 
          />
          {errors.email && <span>※メールアドレスが正しくありません。</span>}
        </div>
        <label>内容</label>
        <div className="box">
          <textarea name="content" ref={register({ required: true })} />
          {errors.content && <span>※内容は入力必須です。</span>}
        </div>
        <button type="submit">送信</button>
      </form>
    </Wrapper>
  );
};