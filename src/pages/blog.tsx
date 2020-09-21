import React from "react"
import { Parallax } from "react-spring/renderprops-addons.cjs"
import Layout from "../components/layout"
import Blog from "../components/blog"

const Page = () => (
  <Layout>
    <Parallax pages={1}>
      <Contact offset={0} factor={1} />
    </Parallax>
  </Layout>
)

export default Page