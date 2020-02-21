import React from 'react'
import {
  DocumentCard,
  DocumentCardActivity,
  DocumentCardTitle,
  DocumentCardLogo,
  IDocumentCardLogoProps,
  DocumentCardDetails
} from 'office-ui-fabric-react/lib-commonjs/DocumentCard'
import { useInView } from 'react-intersection-observer'
import { dark } from '@theme/dark'

type DocumentProps = {
  theme?: any
}

export const DocumentCardBasicExample: React.SFC<DocumentProps> = () => {
  const [ref, inView] = useInView({
    rootMargin: '-100px 0px',
  })
  const logoProps1: IDocumentCardLogoProps = {
    logoIcon: 'BullseyeTargetEdit'
  }
  const logoProps2: IDocumentCardLogoProps = {
    logoIcon: 'Money'
  }
  const logoProps3: IDocumentCardLogoProps = {
    logoIcon: 'Touch'
  }
  const cardStyle = {
    top: '-75px',
    zIndex: 5,
    display: 'inline-block',
    maxWidth: '320px'
  }
  return (
    <div style={{display: 'flex', justifyContent: 'space-around', flexWrap: 'wrap'}}>
      <DocumentCard
        aria-label="Providing Value."
        style={cardStyle}
      >
        <div style={{textAlign: 'center'}}>
          <DocumentCardLogo {...logoProps1} />
        </div>
        <DocumentCardDetails>
          <div className={ inView ? 'animate--bounce-up' : '' }>
            <br/>
            <DocumentCardTitle title="Providing Value" shouldTruncate />
            <DocumentCardTitle title="Committed to provided consistent and quality service to all our customers" showAsSecondaryTitle />
          </div>
        </DocumentCardDetails>
      </DocumentCard>
      <DocumentCard
        aria-label="A fantastic service that your business needs today."
        style={cardStyle}
      >
        <div style={{textAlign: 'center'}}>
          <DocumentCardLogo {...logoProps2} />
        </div>
        <DocumentCardDetails>
          <div className={ inView ? 'animate--bounce-up' : '' }>
            <br/>
            <DocumentCardTitle title="Affordable" shouldTruncate />
            <DocumentCardTitle title="A fantastic service that your business needs today." showAsSecondaryTitle />
          </div>
        </DocumentCardDetails>
      </DocumentCard>
      <DocumentCard
        aria-label="Companies that make their logos toggles need toggable websites."
        style={cardStyle}
      >
        <div style={{textAlign: 'center'}} ref={ref}>
          <DocumentCardLogo {...logoProps3} />
        </div>
        <DocumentCardDetails>
          <div className={ inView ? 'animate--bounce-up' : '' }>
            <br/>
            <DocumentCardTitle title="Toggably" shouldTruncate />
            <DocumentCardTitle title="Companies that make their logos toggles need toggable websites." showAsSecondaryTitle />
          </div>
        </DocumentCardDetails>
      </DocumentCard>
    </div>
  )
}

export const DocumentCardBasicExampleRef: React.SFC<DocumentProps> = (props) => {
  const logoProps: IDocumentCardLogoProps = {
    logoIcon: 'OutlookLogo'
  };
  const { theme } = props
  let textColor
  try {
    if (theme === dark) {
      textColor= theme.palette.neutralPrimary
    } else {
      textColor= theme.palette.neutralPrimary
    }
  } catch(err) {
    textColor = '#333333'
  }
  return (
    <DocumentCard
      aria-label="Default Document Card with large file name. Created by Annie Lindqvist a few minutes ago."
      style={{ top: '-50px', zIndex: 5 }}
    >
      <DocumentCardLogo {...logoProps} />
      <DocumentCardDetails>
        <DocumentCardTitle title="How to make a good design" shouldTruncate />
        <DocumentCardTitle title="This is the email content preview. It has a second line." showAsSecondaryTitle />
      </DocumentCardDetails>
    </DocumentCard>
  )
}


export const DocumentCardBasicExample2: React.FunctionComponent = () => {
  const logoProps: IDocumentCardLogoProps = {
    logoIcon: 'OutlookLogo'
  };
  return (
    <DocumentCard
      aria-label="Default Document Card with large file name. Created by Annie Lindqvist a few minutes ago."
      style={{ top: '-50px', zIndex: 5 }}
    >
      <DocumentCardLogo {...logoProps} />
      <DocumentCardTitle
        title="TFT"
        shouldTruncate={false}
      />
      <DocumentCardActivity
        activity="Created a few minutes ago"
        people={[{ name: 'Annie Lindqvist', profileImageSrc: '', initials: 'CB' }]}
      />
    </DocumentCard>
  )
}

