import React from 'react'
import Head from 'next/head'
import Navbar from './Navbar'
type LayoutProps = {
  children: JSX.Element,
  title: string
}

const Layout = (props: LayoutProps) => (
  <div>
    <Head>
      <title>{props.title}</title>
    </Head>
    <Navbar />
    {props.children}
  </div>
);

export default Layout
