import React from 'react'
import Layout from '../components/Layout'
import {LandingHeroImageBG} from '../components/LandingImage'

const Index: React.FC = (props: any) => {

  return (
    <Layout title='Corporate Landing Page'>
      <LandingHeroImageBG {...props} />
      <h3>Content Goes here</h3>
    </Layout>
  )
}
export default Index