import * as React from 'react'
import Layout from '../../components/layout'
import { graphql, Link } from 'gatsby'

function BlogPage({data}) {

  console.log(data.allMdx.nodes)
  return (
    <Layout pageTitle='My Blog Posts'>
      <ul>
        {
          data.allMdx.nodes.map(node => (
            <article key={node.id}>
              <h2>
                <Link to={`/blog/${node.slug}`}>
                  {node.frontmatter.title}
                </Link>
              </h2>
              <p>Posted: {node.frontmatter.date}</p>
            </article>
          ))
        }
      </ul>
    </Layout>
  )
}

export const query = graphql`
query {
  allMdx(sort: {fields: frontmatter___date, order: DESC}) {
    nodes {
      frontmatter {
        date
        title
      }
      id
      slug
    }
  }
}`

export default BlogPage
