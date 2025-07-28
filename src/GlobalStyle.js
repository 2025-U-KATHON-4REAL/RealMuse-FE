import { createGlobalStyle } from "styled-components";

export const GlobalStyle = createGlobalStyle`
  body {
    height: 100%;
    margin: 0;
    padding: 0;
    font-family: sans-serif;
    background-color: #f8f8f8;
    display: flex;
    justify-content: center;
    align-items: center;
  }

  #root {
    width: 375px;
    height: 812px;
    background-color: #fff;
    box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);
    border-radius: 12px;
    position: relative;
    overflow: hidden;
  }

  .App {
    width: 100%;
    height: 100%;
    position: relative;
    padding-bottom: 60px; /* 바텀바 높이만큼 콘텐츠 공간 확보 */
    box-sizing: border-box;
  }

`;
