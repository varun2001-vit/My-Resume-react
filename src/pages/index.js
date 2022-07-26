import React from "react"
import { Link, graphql} from 'gatsby'
import Layout from "../components/Layout"
import  '../styles/home.css'
import { GatsbyImage } from "gatsby-plugin-image"

export default function Home({data}) {
  console.log(data)
  
  return (
    <Layout>
      <section className="header">
        <div>
          <h2>Explore</h2>
          <h3>Learn & React</h3>
          <p>web developer based in India.</p>
          <Link className="btn" to="/projects/resume">Check My Work</Link>
        </div>
        <GatsbyImage image={data.file.childImageSharp.gatsbyImageData} />
      </section>
    </Layout>
  )
}
export const query =graphql`
query Banner {
  file(relativePath: {eq: "banner.png"}) {
    childImageSharp {
      gatsbyImageData(layout: FULL_WIDTH)
    }
  }
}


`