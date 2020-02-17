import React, {useContext} from 'react'
import Layout from '../components/Layout'
import { LandingHeroImageBG } from '../components/LandingImage'
import { DocumentCardBasicExample } from '../components/DocumentCardBasicExample'
import { Context } from '../components/ThemeProvider'
import { dark } from "../theme/dark"
import { InfoRow } from "../components/InfoSection"
import {StatsSection} from "../components/StatsSection"
const Index: React.FC = (props: any) => {
  const [state, dispatch] = useContext(Context);
  const {theme=dark} = state
  return (
    <Layout title='Corporate Landing Page'>
      <LandingHeroImageBG {...props} />
      <DocumentCardBasicExample theme={theme}/>
      <br />
      <StatsSection theme={theme} />
    </Layout>
  )
}
export default Index