import React from 'react'

import Layout from '../components/layout'
import Header from '../components/layout/header'
import Section from '../components/section'
import Lede from '../components/lede'

import ProjectsData from '../../content/projects.yaml'

export default () => (
  <Layout title="Projects">
    <Header />
    <Lede>
      Explore what I’ve been working on below ↓ or on{' '}
      <a href="github.com/schwartzadev/">GitHub</a>.
    </Lede>
    <Section items={ProjectsData.projects} title="Projects" />
  </Layout>
)
