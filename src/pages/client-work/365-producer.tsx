import React from "react"
import { Parallax } from "react-spring/renderprops-addons.cjs"
import Layout from "../../components/layout"
import Project from "../../components/project"
import Contact from "../../components/contact"

const Page = () => (
  <Layout>
    <Parallax pages={2}>
      <Project offset={0} factor={1} title={"365 Producer"}>
        <h2>Custom LMS and social platform for a local music studio. Powered by Wordpress, BuddyPress & Stripe</h2>
        <p>Before I showed up these guys were feeling stifled by their LMS. The solution we landed on was an integrated eCommerce and eLearning site all built on top of WordPress. It allowed students to register, enroll, pay for courses, and take the coursework all online – including lessons, reading, video lectures, discussion boards, homework, interactive web elements and more.</p>
        <img src="/img/screenshots/screencapture-365producer-2019-03-31-12_13_14.png" />
      </Project>
      <Contact offset={1} factor={1} />
    </Parallax>
  </Layout>
)

export default Page