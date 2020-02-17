
import React, {useContext} from 'react';
import {Context} from './ThemeProvider'
import {dark} from '../theme/dark'
import {light} from '../theme/light'
import { DefaultButton, PrimaryButton, Stack, IStackTokens, IIconProps } from 'office-ui-fabric-react';
export interface IButtonExampleProps {
  // These are set based on the toggles shown above the examples (not needed in real code)
  disabled?: boolean;
  checked?: boolean;
}

// Example formatting
const stackTokens: IStackTokens = { childrenGap: 40 };

export const ButtonDefaultExample: React.FunctionComponent<IButtonExampleProps> = props => {
  const { disabled, checked } = props
  const gitGraph: IIconProps = { iconName: 'GitGraph' }
  const mailAlert: IIconProps = { iconName: 'MailAlert'}
  return (
    <Stack horizontal tokens={stackTokens}>
      <DefaultButton
        iconProps={gitGraph}
        text="Github"
        href="https://github.com"
        allowDisabledFocus
        disabled={disabled}
        checked={checked} />
      <DefaultButton
        text="Contact"
        iconProps={mailAlert}
        href="mailto:davidli012345@gmail.com"
        allowDisabledFocus
        disabled={disabled}
        checked={checked}
      />
    </Stack>
  )
}

export const LandingAnimatedText: React.FunctionComponent = (props: any) => {
    return (
      <>
        <h3 style={{ fontSize: '3rem', color: props.mainColor }}>
          Corporate Landing Page
        </h3>
        <ButtonDefaultExample />
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
    <div className="ms-Grid">
      <div style={{
        zIndex: 5,
        position: "absolute",
        width: "100%"
      }}>
        <div className="ms-Grid-row" dir="ltr">
          <div className="ms-Grid-col ms-sm12">
            <h3 style={{ fontSize: '3rem', color: titleColor, textAlign:'center', marginTop: 0, marginBottom: 0 }}>
              Corporate Landing Page
            </h3>
            <h5 style={{ fontSize: '1.5rem', color: titleColor, textAlign: 'center', marginTop: 0, marginBottom: 0 }}>
              I do not have a company, but if I did I would use Corporate Landing Page.
              <br />
              <div style={{ display: 'flex', justifyContent: 'center', marginTop: '15px' }}>
                <ButtonDefaultExample />
              </div>
            </h5>
          </div>
        </div>
      </div>
      <div style={{
        backgroundImage: "url(" + `${require("./landing-hero.jpg")}` + ")",
        minHeight: '400px',
        backgroundSize: 'cover',
        backgroundPosition: "50% 25%",
        backgroundRepeat: 'no-repeat',
        filter: 'brightness(25%)',
        clipPath: 'polygon(0 0, 100% 0%, 100% 83%, 0 100%)',
        zIndex: 2,
        marginLeft: '-8px',
        marginRight: '-8px'
      }}></div>
    </div>
  )
}