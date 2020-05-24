import React from 'react'

import Layout from '../components/layout'
import Header from '../components/header'
import Section from '../components/section'

import ProjectsData from '../../content/projects.yaml'

export default () => (
  <Layout title="Projects">
    <Header />
    <Section items={ProjectsData.projects} />
  </Layout>
)
