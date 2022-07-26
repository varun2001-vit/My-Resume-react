import React from 'react';
import Layout from "../../components/Layout"
import  "../../styles/projects.css"
import { Link, graphql } from 'gatsby'
import { GatsbyImage } from "gatsby-plugin-image"

function resume({data}) {
    const projects=data.allMarkdownRemark.nodes

    return (
        <Layout>
        <div className="portfolio">
            <h2>Resume</h2>
            <h3>These are the projects and websites I have created</h3>
            <div className="projects">
          {projects.map(project => (
            <Link to={"/projects/" + project.frontmatter.slug} key={project.id}>
              <div>
              <GatsbyImage image={project.frontmatter.thumb.childImageSharp.gatsbyImageData} />
                <h3>{ project.frontmatter.title }</h3>
                <p>{ project.frontmatter.stack }</p>
              </div>
            </Link>
          ))}
        </div>
        </div>
        </Layout>
        
      );
}

export default resume;
// export page query
export const query = graphql`
query ProjectsPage {
    allMarkdownRemark {
      nodes {
        frontmatter {
          slug
          stack
          title
          thumb {
            childImageSharp {
                gatsbyImageData(layout: FULL_WIDTH)
            }
          }
        }
        id
      }
    }
  }
  
`