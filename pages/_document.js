// HTML Document

import Document, { Head, Main, NextScript } from 'next/document';

export default class RootDocument extends Document {
    render() {
        return (
            <html>
                <Head>
                    <meta charSet="utf-8" />
                    {/* 뷰포트 설정 */}
                    <meta name="viewport" content="width=device-width, initial-scale=1.0, maximum-scale=1, user-scalable=no" />
                    {/* 설명 */}
                    <meta name="description" content="생리 불순 분류 모델"/>
                    {/* 아이콘 */}
                    <link rel="shortcut icon" href="/static/calendar.png" />
                    {/* 폰트 스타일 시트 */}
                    <link rel="stylesheet" href="https://fonts.googleapis.com/earlyaccess/notosanskr.css" />
                    {/* Github Markdown 스타일 시트 */}
                    <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/github-markdown-css/3.0.1/github-markdown.min.css" />
                    {/* Syntax highlighting 스타일 시트 */}
                    <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/highlight.js/9.15.6/styles/railscasts.min.css" />
                </Head>
                <body>
                    {/* 본문 내용을 정의 */}
                    <Main />
                    {/* Next.js에서 필요한 JS 코드를 렌더링 */}
                    <NextScript />
                </body>
            </html>
        );
    }
}