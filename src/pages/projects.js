import React from 'react'

import ListPage from '../components/list-page'

export default ({ data }) => {
  const projects = data.allContentYaml.nodes.find(
    list => list.projects !== null
  ).projects

  const ledeContent = (
    <>
      Explore what I’ve been working on below ↓ or on{' '}
      <a href="github.com/schwartzadev/">GitHub</a>.
    </>
  )

  const ctas = [
    { name: 'Explore my skills', href: '/skills' },
    { name: 'Check out my research', href: '/research' },
  ]

  return (
    <ListPage
      listItems={projects}
      title="Projects"
      ledeContent={ledeContent}
      ctaTitle="Learn more about me"
      callsToAction={ctas}
    />
  )
}

export const query = graphql`
  query {
    allContentYaml {
      nodes {
        projects {
          description
          title
          url
        }
      }
    }
  }
`
