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


"build" "cross-env NODE_ENV=production webpack",
"start": "cross-env NODE_ENV=development webpack-dev-server --hot --open"

cross-env 은 윈도우즈와 리눅스 맥에서 환경 변수 설정이 다른기 때문에 cross-env을 사용 하기 권장 (cross-env 는 npm package)

--hot: HMR(Hot Module Replacement) 지원, 코드 수정 후 저장 하면 즉시 화면에 반영됨
--open: webpack 개발 서버 구동 후 브라우저 자동 열림 


로더(loader)란?
외부 스크립트와 도구를 이용해 소스파일 css, html, image등에 대한 전처리, 변환 등의 작업을 적용할 수 있음
로더 리스트 공식 site https://webpack.js.org/loaders

특별히 loader를 모듈화를 할 수 있는데 왜 필요 하냐?
- 여러 컴포넌트에서 같은 이름의 클래스명을 사용 했어도 로컬라이즈 한다
- create-react-app에는 없는 기능으로 필요 한 경우에 eject 를 해야한다

use: [
    {loader: "style-loader"},
    {loader: "css-loader",
     options: {
         module: true   // css 이름이 충될 될때 
     }   
    }
]

plugin 이란?
- webpack에서 사용가능한 추가 기능 제공
- 빌드 프로세스 과정에 플로그인을 주입시켜 Custom 동작이 가능 하게 함
- loader vs plugin 
 loader 는 (js, css, image, html) 을 로딩할 때 동작
 plugin은 빌드 프로세스 과정에서 동작