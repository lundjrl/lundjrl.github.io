import React from "react"
import { Layout, Seo } from "../components"
import { Home } from '../screens'

const HomePage = () => (
  <>
  <Seo title="LundLabs" />
  <Layout>
    <Home />
  </Layout>
  </>
  )

  export default HomePage
