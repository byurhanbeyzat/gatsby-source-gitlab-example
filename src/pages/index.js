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
      website
      location
      profile_url
      organization
      socialMedia {
        skype
        twitter
        linkedin
      }
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
