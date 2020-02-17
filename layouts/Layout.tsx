import React, { useContext } from 'react'
import Head from 'next/head'
import { Navbar } from '../components/navigation/Navbar'
import { dark } from "../theme/dark"
import {Context} from '../theme/ThemeProvider'
type LayoutProps = {
  children: Array<JSX.Element>|JSX.Element,
  title: string,
}

const Layout = (props: LayoutProps) => {
  const [state, dispatch] = useContext(Context);
  const {theme=dark} = state
  // use effects
  let bgColor
  try {
    if (theme === dark) {
      bgColor= theme.palette.black
    } else {
      bgColor= '#000000'
    }
  } catch(err) {
    bgColor = '#2b88d8'
  }
  return (
    <div style={{
      backgroundColor: bgColor,
      minWidth: '100vh'
    }}>
      <Head>
        <title>{props.title}</title>
      </Head>
      <Navbar />
      {props.children}
    </div>
  )
}

export default Layout
