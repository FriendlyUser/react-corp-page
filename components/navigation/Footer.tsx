import React, { useEffect, useContext } from 'react'
import {Context} from '@theme/ThemeProvider'
import { dark } from '@theme/dark'
export const Footer: React.FunctionComponent = () => {
  const [state, dispatch] = useContext(Context)
  const dt = new Date();
  const year = dt.getFullYear()
  const {theme=dark} = state
  let bgColor
  let textColor
  try {
    if (theme === dark) {
      bgColor= '-internal-root-color'
      textColor='black'
    } else {
      bgColor= theme.palette.black
      textColor=theme.palette.white
    }
  } catch(err) {
    bgColor = 'white'
    textColor = 'black'
  }
  const cardStyle = {
    top: '-75px',
    zIndex: 5,
    display: 'inline-block',
    maxWidth: '320px'
  }
  const headingStyle = {
    fontSize: '1.15rem',
    alignText: 'left',
    color: textColor
  }
  const paragraphStyle = {
    color: textColor
  }
  const inputStyle = {
    width: '100%'
  }
  return (
    <div style={{
      display: 'flex',
      justifyContent: 'space-around',
      flexWrap: 'wrap',
      minHeight: '400px',
      backgroundColor: bgColor
    }}>
     <div style={cardStyle}>
       <h6 style={headingStyle}>Contact Us</h6>
       <form
          action="https://formspree.io/FORM_ID"
          method="POST"
        >
          <label style={paragraphStyle}>
            Your Name:
            <input type="text" name="name" style={inputStyle}/>
          </label>
          <label style={paragraphStyle}>
            Your Email:
            <input type="email" name="_replyto" style={inputStyle} />
          </label>
          <label style={paragraphStyle}>
            Message:
            <textarea name="message" style={inputStyle}></textarea>
          </label>
          <br />
          <input type="submit" value="Send" />
        </form>
     </div>
     <div style={cardStyle}>
       <h6 style={headingStyle}>© React Corporate Landing Page</h6>
       <p style={paragraphStyle}>
         Last Updated  {year}
       </p>
     </div>
     <div style={cardStyle}>
       <h6 style={headingStyle}>Explore</h6>
     </div>
    </div>
  )
}