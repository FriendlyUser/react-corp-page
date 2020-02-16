
import React, {useContext} from 'react';
import {Context} from './ThemeProvider'
import {dark} from '../theme/dark'
import {light} from '../theme/light'
export const LandingAnimatedText: React.FunctionComponent = (props: any) => {
    return (
      <>
        <h3 style={{ fontSize: '3rem', color: props.mainColor }}>
          Corporate Landing Page
        </h3>
      </>
    )
  }

export const LandingHeroImageBG: React.FunctionComponent = () => {
  const [state, dispatch] = useContext(Context);
  const {theme=dark} = state
  let titleColor
  try {
    if (theme === dark) {
      titleColor= theme.palette.themePrimary
    } else {
      titleColor= theme.palette.neutralLighter
    }
  } catch(err) {
    titleColor = '#2b88d8'
  }
  return (
    <div className="ms-Grid-row" style={{ position: 'relative' }}>
      <div className="ms-Grid" dir="ltr" style={{
        position: 'absolute',
        zIndex: 5,
        minHeight: '400px',
        width: '100%',
        top: '50px'
      }}>
        <div className="ms-Grid-col ms-sm12">
          <h3 style={{ fontSize: '3rem', color: titleColor, textAlign:'center', marginTop: 0, marginBottom: 0 }}>
            Corporate Landing Page
          </h3>
          <h5 style={{ fontSize: '1.5rem', color: titleColor, textAlign: 'center', marginTop: 0, marginBottom: 0 }}>
            I do not have a company, but if I did I use Corporate Landing Page.
          </h5>
        </div>
      </div>
      <div style={{
        position: 'relative',
        width: '100%',
        backgroundImage: "url(" + `${require("./landing-hero.jpg")}` + ")",
        minHeight: '400px',
        backgroundSize: 'cover',
        backgroundPosition: "50% 25%",
        backgroundRepeat: 'no-repeat',
        filter: 'brightness(25%)',
        clipPath: 'polygon(0 0, 100% 0%, 100% 83%, 0 100%)',
        zIndex: 2
      }} />
    </div>
  )
}