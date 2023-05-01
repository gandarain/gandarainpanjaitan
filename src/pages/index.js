import React, { useState } from 'react'
import { Provider } from '../context'
import { Analytics } from '@vercel/analytics/react'

import Header from '@/components/header/Header'
import Home from '@/components/home/Home'
import About from '@/components/about/About'
import Skills from '@/components/skills/Skills'
import Footer from '@/components/footer/Footer'
import Portfolio from '@/components/portfolio/Portfolio'
import Qualification from '@/components/qualification/Qualification'
import Contact from '@/components/contact/Contact'
import ProjectDetail from '@/components/projectDetail/ProjectDetail'
import Snackbar from '@/components/snackbar/Snackbar'
import Certificate from '@/components/certificate/Certificate'
import Publication from '@/components/publication/Publication'
import Loader from '@/components/loader/Loader'

const renderProjectDetail = ({ setShowProjectDetail, selectedProject }) => (
  <ProjectDetail
    onClose={() => setShowProjectDetail(false)}
    {...selectedProject}
  />
)

const usePortfolio = () => {
  const [showProjectDetail, setShowProjectDetail] = useState(false)
  const [selectedProject, setSelectedProject] = useState({})

  return {
    showProjectDetail,
    setShowProjectDetail,
    selectedProject,
    setSelectedProject
  }
}

const useLoading = () => {
  const [showLoading, setShowLoading] = useState(false)

  return {
    showLoading,
    setShowLoading
  }
}

const Container = () => {
  const state = usePortfolio()
  const [emailResult, setEmailResult] = useState({
    status: false
  })
  const {showLoading, setShowLoading} = useLoading()

  return (
    <>
      <Provider>
        <Header />
        <main className="main">
          <Home />
          <About />
          <Qualification />
          <Skills />
          <Portfolio {...state} />
          <Certificate />
          <Publication />
          <Contact
            emailResult={emailResult}
            setEmailResult={setEmailResult}
            setShowLoading={setShowLoading}
          />
          <Footer />
          {showLoading && <Loader />}
        </main>
        {state.showProjectDetail && renderProjectDetail(state)}
        {emailResult.status && <Snackbar {...emailResult} onClose={() => setEmailResult({ status: false })} />}
      </Provider>
      <Analytics />
    </>
  )
}

export default Container
