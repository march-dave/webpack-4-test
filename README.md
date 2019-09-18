# Webpack 4 version

 This code React JS / Webpack 4 latest version setting for start kit.


 Do not worry about webpack setting!!!


 I use this webpack setting for my production.


heroku create app-react-mvp --buildpack https://github.com/mars/create-react-app-buildpack.git


1. ___dirname은 현재 실행중인 스크립트가 포함된 디렉토리의 이름을 나타내는 node.js 의 전역 변수이다.

2. webpack 개발 서버 (webpack-dev-server) 란 
 - node.js + express로 구성되어 있어서 별도의 http 서비스를 작성하지 않아도 됨
 - 정적 파일을 제공함

devServer: {
    contentBase: './public',
    inline: true,
    historyFallBack: true, -- 라우터 정보
    port: 8080
}

contentBase: 프로젝트 루트가 아니라 다른 경로를 contentBase로 지정할 때
inline: true로 설정 하면 클라이언트 엔트리를 번들에 삽입해 페이지가 변경되면 새로 고침
historyFallBack: HTML5 history API를 이용하는 SPA를 개발할 때 유용, 이값이 true이면 매핑 하지 않은 개발 서버에 대한 요청시 /index.html로 라우팅 됨
