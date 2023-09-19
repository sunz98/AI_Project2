// 환경 설정 파일 / 라우팅, typescript, less 등의 webpack 플러그인 설정

const withLess = require('@zeit/next-less'); // Less 스타일 시트를 사용하기 위한 패키지를 불러옵니다.
const withTypescript = require('@zeit/next-typescript'); // TypeScript를 사용하기 위한 패키지를 불러옵니다.

// fix: prevents error when .less files are required by node
// Node.js 환경에서 .less 파일을 require 할 때 발생하는 오류를 방지하는 코드입니다.
if (typeof require !== 'undefined') {
    require.extensions['.less'] = file => {} // .less 파일을 무시하고 처리하지 않습니다.
}

module.exports = withTypescript(withLess({
    lessLoaderOptions: {
        javascriptEnabled: true, // Less 로더 옵션으로 JavaScript 활성화
    },
    exportPathMap: () => ({
        // 페이지 경로와 해당 페이지 컴포넌트를 정의하는 부분입니다.
        '/': { page: '/' }, // 루트 페이지
        '/about': { page: '/about' }, // about 페이지
        '/readme.md': { page: '/readme' }, // readme 페이지
        '/p/hello-nextjs': { page: '/post', query: { title: 'hello-nextjs' } }, // 포스트 페이지 (타이틀 매개변수 전달)
        '/p/learn-nextjs': { page: '/post', query: { title: 'learn-nextjs' } },
        '/p/deploy-nextjs': { page: '/post', query: { title: 'deploy-nextjs' } }
    }),
}));