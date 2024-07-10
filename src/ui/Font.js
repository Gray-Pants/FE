// src/globalStyles.js
import { createGlobalStyle } from "styled-components";

const GlobalStyle = createGlobalStyle`
@font-face {
    font-family: 'TheJamsil1Thin';
    src: url('https://fastly.jsdelivr.net/gh/projectnoonnu/noonfonts_2302_01@1.0/TheJamsil1Thin.woff2') format('woff2');
    font-weight: 100;
    font-style: normal;
}
            @font-face {
    font-family: 'TheJamsil2Light';
    src: url('https://fastly.jsdelivr.net/gh/projectnoonnu/noonfonts_2302_01@1.0/TheJamsil2Light.woff2') format('woff2');
    font-weight: 300;
    font-style: normal;
}
            @font-face {
    font-family: 'TheJamsil3Regular';
    src: url('https://fastly.jsdelivr.net/gh/projectnoonnu/noonfonts_2302_01@1.0/TheJamsil3Regular.woff2') format('woff2');
    font-weight: 400;
    font-style: normal;
}
            @font-face {
    font-family: 'TheJamsil4Medium';
    src: url('https://fastly.jsdelivr.net/gh/projectnoonnu/noonfonts_2302_01@1.0/TheJamsil4Medium.woff2') format('woff2');
    font-weight: 500;
    font-style: normal;
}
            @font-face {
    font-family: 'TheJamsil5Bold';햐
    src: url('https://fastly.jsdelivr.net/gh/projectnoonnu/noonfonts_2302_01@1.0/TheJamsil5Bold.woff2') format('woff2');
    font-weight: 700;
    font-style: normal;
}
            @font-face {
    font-family: 'TheJamsil6ExtraBold';
    src: url('https://fastly.jsdelivr.net/gh/projectnoonnu/noonfonts_2302_01@1.0/TheJamsil6ExtraBold.woff2') format('woff2');
    font-weight: 800;
    font-style: normal;
}
  body {
    font-family: 'TheJamsil3Regular';
  }
`;

export default GlobalStyle;
