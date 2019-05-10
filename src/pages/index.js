import React from 'react'
import { graphql, useStaticQuery } from 'gatsby'

import Layout from 'components/layout'
import AboutSection from 'components/about'
import ProjectsSection from 'components/projects'

const Index = () => {
  const data = useStaticQuery(query)
  const userData = data ? data.gitlabUser : ''
  const projectsData = data ? data.allGitlabProjects.edges : ''

  return (
    <Layout>
      <div className="bg-img" />
      <AboutSection data={userData} />
      <ProjectsSection data={projectsData} />
    </Layout>
  )
}
export default Index

const query = graphql`
  query {
    gitlabUser {
      id
      name
      email
      username
      avatar
      bio
    }
    allGitlabProjects {
      edges {
        node {
          id
          name
          description
          forks_count
          star_count
          web_url
        }
      }
    }
  }
`
