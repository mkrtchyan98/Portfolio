import '../styles/index.css'
import 'bootstrap/dist/css/bootstrap.min.css'
import '@fortawesome/fontawesome-free/css/all.css'
import App from 'next/app'
import React from 'react'
import { PageTransition } from 'next-page-transitions'
export default class MyApp extends App {



  render() {
    const { Component, router } = this.props
    return (
    	<div id="wrapper">
        <PageTransition timeout={300} classNames="page-transition">
          <Component  key={router.route} />
        </PageTransition>
        <style jsx global>{`
          .page-transition-enter {
            opacity: 0;
          }
          .page-transition-enter-active {
            opacity: 1;
            transition: opacity 300ms;

          }
          .page-transition-exit {
            opacity: 1;
          }
          .page-transition-exit-active {
            opacity: 0;
            transition: opacity 300ms;
          }
        `}</style>
        </div>
    )
  }
}