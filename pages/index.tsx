import React, {useContext} from 'react'
import Layout from '../layouts/Layout'
import { LandingHeroImageBG } from '@components/index/LandingImage'
import { DocumentCardBasicExample } from '@components/index/CardRow'
import { Context } from '../theme/ThemeProvider'
import { dark } from "../theme/dark"
import { InfoRow } from "@components/index/InfoSection"
import {StatsSection} from "@components/index/StatsSection"
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