import React from 'react'
import Head from 'next/head'
import { Navbar } from './Navbar'
type LayoutProps = {
  children: Array<JSX.Element>|JSX.Element,
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
