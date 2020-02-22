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
import { ImageFit } from 'office-ui-fabric-react/lib-commonjs/Image'
export const InfoRow: React.FunctionComponent = () => {
  const logoProps: IDocumentCardLogoProps = {
    logoIcon: 'OutlookLogo'
  };
  const imgSrc = "https://images.unsplash.com/photo-1498050108023-c5249f4df085?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=700&q=80"
  const cardStyle = {
    zIndex: 5,
    display: 'inline-block',
    maxWidth: '240px'
  }
  return (
    <div className="ms-Grid" dir="ltr">
      <div className="ms-Grid-row"  style={{display: 'flex', justifyContent: 'space-around'}}>
        <div className="ms-Grid-col ms-sm12 ms-md6" style={{display: "inline-block"}} >
          <DocumentCard
            aria-label="Document Card."
            style={{ top: '-50px', zIndex: 5, textAlign: 'center' }}
          >
            <DocumentCardImage height={350} imageFit={ImageFit.cover} imageSrc={imgSrc} />
            <DocumentCardDetails>
              <DocumentCardTitle title="Providing Value" shouldTruncate />
              <DocumentCardTitle title="Committed to provided consistent and quality service to all our customers" showAsSecondaryTitle />
            </DocumentCardDetails>
          </DocumentCard>
        </div>
        <div className="ms-Grid-col ms-sm12 ms-md6" style={{display: "inline-flex", width: "50%", justifyContent: 'center'}}>
          <div style={{ display: 'flex', justifyContent: 'space-around', flexWrap: 'wrap' }}>
            <DocumentCard
              aria-label="Document Card."
              style={cardStyle}
            >
              <DocumentCardLogo {...logoProps} />
              <DocumentCardDetails>
                <DocumentCardTitle title="Providing Value" shouldTruncate />
                <DocumentCardTitle title="Committed to provided consistent and quality service to all our customers" showAsSecondaryTitle />
              </DocumentCardDetails>
            </DocumentCard>
            <DocumentCard
              aria-label="Document Card."
              style={cardStyle}
            >
              <DocumentCardLogo {...logoProps} />
              <DocumentCardDetails>
                <DocumentCardTitle title="Providing Value" shouldTruncate />
                <DocumentCardTitle title="Committed to provided consistent and quality service to all our customers" showAsSecondaryTitle />
              </DocumentCardDetails>
            </DocumentCard>
          </div>
        </div>
      </div>
    </div>
  )
}
