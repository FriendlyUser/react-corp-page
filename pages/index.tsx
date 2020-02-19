import React, {useContext} from 'react'
import { LandingHeroImageBG } from '@components/index/LandingImage'
import { DocumentCardBasicExample } from '@components/index/CardRow'
import {StatsSection} from "@components/index/StatsSection"
import {Carousel} from '@components/Carousel/index'
import {carouselSlidesData} from '@components/Carousel/testData'
// next cannot @layouts find this, maybe the module is already defined???
import Layout from '../layouts/Layout'
import { Context } from '@theme/ThemeProvider'
import { dark } from "@theme/dark"

const Index: React.FC = (props: any) => {
  const [state, dispatch] = useContext(Context);
  const {theme=dark} = state
  return (
    <Layout title='Corporate Landing Page'>
      <LandingHeroImageBG {...props} />
      <DocumentCardBasicExample theme={theme}/>
      <br />
      <StatsSection theme={theme} />
      <br />
      <br />
      <br />
      <Carousel slides={carouselSlidesData} theme={theme}/>
      <br />
      <br />
      <br />
    </Layout>
  )
}
export default Index