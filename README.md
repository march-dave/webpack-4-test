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
 loader(로딩 할때) 는 (js, css, image, html) 을 로딩할 때 동작
 plugin(번들링 할때) 은 빌드 프로세스 과정에서 동작


ExtractTextPlugin
A.js + B.js ==>  새로운 파일 하나로 만들고 링크 Tag로 만든다
모든 css에 대한 require, import를 별도의 css출력 파일로 옮겨서 JS 에서 스타일을 인라인으로 추가할 필요가 없도록 해줌
- css 텍스트 파일을 묶어서 번들링한 뒤 하나 또는 여러개의 css 파일을 생성함

use: ExtractTextPlugIn.extract({

})

plugins: [
    new ExtractTextPlugin("[name]-[hash].css")
]

style.css, style2.css (npm run build) 

번들링 후 아래와 같은 파일로 생성 된다
table._3shfkkkkf{ width: 600px,.....}
table._fhidhfkkkkf{ width: 600px,.....}
...


Common Chunks Plugin
현재 까지의 번들링 결과물은 단 하나의 js 파일
- 하지만 이 내부에는 변경될 일이 없는 react, react-dom 등의 라이브러리가 있음
- 변경되지 않는 부분을 분리 해서 별도의 파일로 생성 한다면 (캐시 기능 활용, 로딩 속도 개선)
- 여러개의 파일로 쪼개 져서 생성된다
index.html
main-jsdfsdklj.css
main-djflsdj.js
- CRA2.x 에서는 기본 내장 되어 있음
Webpack 4.0부터는 SplitChunks Plugin을 사용함s

entry: {
    main: __dirname + 'src/main.js',
    vendor: [
        'react',
        'react-dom'
    ]
}

plugin: [
....
    new webpack.optimize.CommonsChunkPlugin({
        name: 'vendor'
    })
]


path.resolve(...) 는 상대 경로를 절대 경로로 변경해 준다.
__dirname 는 현재 경로를 보여 준다 i.e) /TempTest/webpack-4-quickstart

webpack 4 webpack-cli 를 꼭 함께 설치 해야 한다.