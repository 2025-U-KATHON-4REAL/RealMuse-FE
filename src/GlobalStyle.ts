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
    height:100%;
    display: flex;
    /*border & padding 포함한 전체 크기fh width, height 계산*/
    box-sizing: border-box;
    flex-direction: column;
  }

  .AppContent{
    flex:1;
    overflow-y: auto;
    padding-bottom:60px;
  }

`;
