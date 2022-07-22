import React from 'react'
import { FaLinkedinIn, FaGithub, FaInstagram } from 'react-icons/fa'

import '../styles/components/socialnetwork.sass'

const socialNetworks = [
  {name: "linkedin", icon: <FaLinkedinIn />, link:'https://www.linkedin.com/in/francisco-de-souza-sancho/'},
  {name: "github", icon: <FaGithub />, link: 'https://github.com/fsancho1985'},
]

const SocialNetwork = () => {
  return (
    <section id='social-networks'>{socialNetworks.map((network)=>(
      <a href={network.link} target='_blank' className='social-btn' id={network.name} key={network.name}>{network.icon}</a>
    ))}</section>
  )
}

export default SocialNetwork