import * as React from 'react'
import {
  DocumentCard,
  DocumentCardTitle,
  DocumentCardLogo,
  DocumentCardDetails,
  IDocumentCardLogoProps
} from 'office-ui-fabric-react/lib-commonjs/DocumentCard'
import {
  Text
} from 'office-ui-fabric-react/lib-commonjs/Text'
import { DefaultPalette, Stack, IStackStyles, IStackTokens } from 'office-ui-fabric-react'
import { mergeStyles } from 'office-ui-fabric-react/lib-commonjs/Styling'

// Tokens definition
const sectionStackTokens: IStackTokens = { childrenGap: 10 };
const wrapStackTokens: IStackTokens = { childrenGap: 30 };

export const PricingTable: React.FunctionComponent = () => {
  const [stackWidth, setStackWidth] = React.useState<number>(100);
  // Mutating styles definition
  const stackStyles: IStackStyles = {
    root: {
      width: `${stackWidth}%`
    }
  }
  const cardStyle = {
    zIndex: 5,
    display: 'inline-block',
    minWidth: '300px',
    maxHeight: '500px'
  }
  const basicLogoProps: IDocumentCardLogoProps = {
    logoIcon: 'EntitlementPolicy'
  }
  const businessLogoProps: IDocumentCardLogoProps = {
    logoIcon: 'BusinessCenterLogo'
  }
  const subTitleClasses = mergeStyles({
    marginBottom: 0,
    height: 'inherit'
  })
  return (
    <div style={{ display: 'flex', justifyContent: 'center' }}>
    <Stack tokens={sectionStackTokens}>
      <Stack horizontal wrap styles={stackStyles} tokens={wrapStackTokens}>
        <DocumentCard
          aria-label="Companies that make their logos toggles need toggable websites."
          style={cardStyle}
        > 
          {/** Updating Color with background colors */}
          <div style={{textAlign: 'center'}}>
           <DocumentCardLogo {...basicLogoProps} />
          </div>
          <DocumentCardDetails>
            <div>
              <DocumentCardTitle title="Personal" shouldTruncate />
              <hr />
              <DocumentCardTitle title="Up to 10 Users" showAsSecondaryTitle className={subTitleClasses}/>
              <hr />
              <DocumentCardTitle title="Up to 10 Domains" showAsSecondaryTitle className={subTitleClasses}/>
              <hr />
              <DocumentCardTitle title="Always Open Source" showAsSecondaryTitle className={subTitleClasses}/>
            </div>
          </DocumentCardDetails>
        </DocumentCard>
        <DocumentCard
          aria-label="Business Class."
          style={cardStyle}
        > 
          {/** Updating Color with background colors */}
          <div style={{textAlign: 'center'}}>
           <DocumentCardLogo {...businessLogoProps} />
          </div>
          <DocumentCardDetails>
            <div>
              <DocumentCardTitle title="Business" shouldTruncate />
              <hr />
              <DocumentCardTitle title="Up to 100 Users" showAsSecondaryTitle className={subTitleClasses}/>
              <hr />
              <DocumentCardTitle title="Custom Support" showAsSecondaryTitle className={subTitleClasses}/>
              <hr />
              <DocumentCardTitle title="HTTPS and SSL" showAsSecondaryTitle className={subTitleClasses}/>
            </div>
          </DocumentCardDetails>
        </DocumentCard>
        <DocumentCard
          aria-label="Companies that make their logos toggles need toggable websites."
          style={cardStyle}
        > 
          {/** Updating Color with background colors */}
          <div style={{textAlign: 'center'}}>
           <DocumentCardLogo {...basicLogoProps} />
          </div>
          <DocumentCardDetails>
            <div>
              <DocumentCardTitle title="Enterprise" shouldTruncate />
              <hr />
              <DocumentCardTitle title="Unlimited Users" showAsSecondaryTitle className={subTitleClasses}/>
              <hr />
              <DocumentCardTitle title="Unlimited Domains" showAsSecondaryTitle className={subTitleClasses}/>
              <hr />
              <DocumentCardTitle title="Top Quality" showAsSecondaryTitle className={subTitleClasses}/>
            </div>
          </DocumentCardDetails>
        </DocumentCard>
      </Stack>
    </Stack>
    </div>
  )
}
