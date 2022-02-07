import * as React from "react"
import Layout from "../components/layout"
import { StaticImage } from "gatsby-plugin-image"

const HomePage = () => {
  return (
    <Layout pageTitle='Home'>
      <p>Im following the tutorial.</p>
      <StaticImage
        alt="picture of a dog"
        src="../images/fav.png"
      />
    </Layout>
  )
}


export default HomePage
