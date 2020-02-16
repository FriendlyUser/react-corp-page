
import React, {useContext} from 'react';
import {Context} from './ThemeProvider'
export const LandingAnimatedText: React.FunctionComponent = () => {
    return (
      <>
        <h3 style={{ fontSize: '3rem' }}>
          Corporate Landing Page
        </h3>
      </>
    )
  }

export const LandingHeroImageBG: React.FunctionComponent = () => {
  const [state, dispatch] = useContext(Context);
  const {theme} = state
  if (theme == {}) {
    return null
  }
  const mainColor = theme.palette.white
  return (
    <div className="ms-Grid-row" style={{ position: 'relative' }}>
      <div className="ms-Grid" dir="rtl" style={{
        position: 'absolute',
        zIndex: 5,
        color: mainColor,
        minHeight: '400px',
        width: '100%',
        top: '35%'
      }}>
        <div className="ms-Grid-col ms-sm12">
          <LandingAnimatedText />
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