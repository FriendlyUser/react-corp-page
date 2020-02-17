import React, {useContext} from 'react'
import Layout from '../components/Layout'
import { LandingHeroImageBG } from '../components/LandingImage'
import { DocumentCardBasicExample } from '../components/DocumentCardBasicExample'
import { Context } from '../components/ThemeProvider'
import { dark } from "../theme/dark"
const Index: React.FC = (props: any) => {
  const [state, dispatch] = useContext(Context);
  const {theme=dark} = state
  return (
    <Layout title='Corporate Landing Page'>
      <LandingHeroImageBG {...props} />
      <DocumentCardBasicExample theme={theme}/>
      <h3>Content Goes here</h3>
    </Layout>
  )
}
export default Index