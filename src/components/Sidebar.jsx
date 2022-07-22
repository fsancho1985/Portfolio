import React from 'react'
import SocialNetwork from './SocialNetwork'

import Image from '../img/Profile.jpg'
import Resume from '../assets/Cv Francisco de Souza Sancho.pdf'

import '../styles/components/sidebar.sass'
import InformationContainer from './InformationContainer'

const Sidebar = () => {
  return (
    <aside id="sidebar">
      <img src={Image} alt="Francisco de Souza Sancho" />
      <p className='title'>Desenvolvedor Web Front-End</p>
      <SocialNetwork />
      <InformationContainer />
      <a href={Resume} target='_blank' className='btn'>
        Download currículo
      </a>
    </aside>
  )
}

export default Sidebar
