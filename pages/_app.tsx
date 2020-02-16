import './preloader.css'
import './app.css'
import { initializeIcons } from 'office-ui-fabric-react/lib-commonjs/Icons'
import ThemeProvider from '../components/ThemeProvider'
initializeIcons(undefined, { disableWarnings: true })
type AppProps = {
  Component: any,
  pageProps: any
}

let hideLoader = () => {}
if(typeof window !== 'undefined') {
  const loader: any = document.querySelector('#loader')
  // if you want to show the loader when React loads data again
  hideLoader = () => loader.classList.add('loader--hide')
} 

// This default export is required in a new `pages/_app.js` file.
export default function MyApp({ Component, pageProps }: AppProps) {
  hideLoader()
  return <ThemeProvider> <Component {...pageProps} /> </ThemeProvider>
}
