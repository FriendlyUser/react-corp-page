import React, { useEffect, useState} from 'react'
import {
  DocumentCard,
  DocumentCardActivity,
  DocumentCardTitle,
  DocumentCardLogo,
  IDocumentCardLogoProps,
  DocumentCardDetails,
  IDocumentCardPreviewProps,
  DocumentCardImage
} from 'office-ui-fabric-react/lib-commonjs/DocumentCard'
import { FontIcon } from 'office-ui-fabric-react/lib-commonjs/Icon';
import { ImageFit } from 'office-ui-fabric-react/lib-commonjs/Image';
import { dark } from '../theme/dark'
import { useInView } from 'react-intersection-observer'
type ThemeProps = {
  theme?: any
  children?: any
}

export const StatsSection: React.FunctionComponent<ThemeProps> = (props) => {
  const [ref, inView] = useInView({
    rootMargin: '-100px 0px',
  })
  const imgSrc = "https://images.unsplash.com/photo-1498050108023-c5249f4df085?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=700&q=80"
  const { theme=dark } = props
  let iconColor
  let textColor
  try {
    if (theme === dark) {
      iconColor= theme.palette.themePrimary
      textColor='-internal-root-color'
    } else {
      iconColor= theme.palette.white
      textColor=theme.palette.themePrimary
    }
  } catch(err) {
    iconColor = '#333333'
  }
  const titleStyle = {
    fontSize: '1.5rem',
    fontFamily: 'Coda Caption',
    color: textColor
  }
  const subtitleStyle = {
    color: textColor
  }
  const iconStyle = {
    fontSize: '1.2rem',
    color: iconColor
  }
  return (
    <div style={{ justifyContent: 'space-around' }} className='stats-wrapper'>
      <div style={{ margin: 'auto', textAlign: 'center' }} className='card-image-section'>
        <DocumentCard
            aria-label="Document Card."
            style={{ textAlign: 'center', maxWidth: '100%' }}
          > 
            <div style={{backgroundColor: iconColor, height: 350, width: '100%', background: iconColor}}>
              <DocumentCardImage height={350} imageFit={ImageFit.cover} imageSrc={imgSrc}/>
            </div>
            <DocumentCardDetails>
              <DocumentCardTitle title="Providing Value" shouldTruncate />
              <DocumentCardTitle title="Committed to provided consistent and quality service to all our customers" showAsSecondaryTitle />
            </DocumentCardDetails>
          </DocumentCard>
      </div>
      <div style={{width: '50%', margin: 'auto', textAlign: 'left'}} ref={ref}>
        <div style={{ padding: '0 10%'}}  className={ inView ? 'box bounce-1' : '' }>
          <h4 style={titleStyle}>
            Awesome Features
          </h4>

          <span style={subtitleStyle}>
            We provide excellent software engineers on demand and can deliver projects on time and on budget.
          </span>

          <p style={iconStyle}><FontIcon iconName="Globe" /> Work with our global team</p>
          <p style={iconStyle}><FontIcon iconName="IncidentTriangle" /> Swift Bug Squashing</p>
          <p style={iconStyle}><FontIcon iconName="LightningBolt" /> Finish ahead of time</p>

        </div>
      </div>
    </div>
  )
}
