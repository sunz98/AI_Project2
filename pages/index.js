// _app.js 파일은 페이지 레이아웃과 애플리케이션 전체적인 설정을 관리하는 중요한 파일입니다. 페이지 전환과 관련된 이벤트 처리, 메타 데이터 설정, 레이아웃 구성 등을 수행할 수 있습니다.

import App, { Container } from 'next/app';
import React from 'react';
import NProgress from 'nprogress'; // 페이지 로딩 표시를 위한 라이브러리
import Router from 'next/router'; // 라우팅 관련 이벤트를 다루기 위한 라우터
import Helmet from 'react-helmet'; // 웹 페이지의 head 태그 설정을 위한 라이브러리
import moment from 'moment'; // 날짜 및 시간 처리를 위한 라이브러리

import Layout from '../components/Layout'; // 커스텀 레이아웃 컴포넌트
import '../styles/index.less'; // 스타일 시트

moment.locale('ko'); // moment.js를 한국어로 설정

Router.events.on('routeChangeStart', (url) => NProgress.start()); // 페이지 전환 시작 시 로딩 표시 시작
Router.events.on('routeChangeComplete', () => NProgress.done()); // 페이지 전환 완료 시 로딩 표시 종료
Router.events.on('routeChangeError', () => NProgress.done()); // 페이지 전환 중 오류 발생 시 로딩 표시 종료

export default class RootApp extends App {
    render() {
        const { Component, ...other } = this.props;
        return (
            <Container>
                <Helmet title="생리 불순 분류 모델" /> {/* 페이지의 head 태그에 제목 추가 */}
                <Layout {...other} {...this.state}>
                    {/* 페이지 컴포넌트 렌더링 */}
                    <Component {...other} {...this.state} />
                </Layout>
            </Container>
        );
    }
}