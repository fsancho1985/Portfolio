import React from 'react'
import { AiFillPhone, AiOutlineMail, AiFillEnvironment } from 'react-icons/ai'

import '../styles/components/informationcontainer.sass'

const InformationContainer = () => {
  return (
    <section id="information">
      <div className="info-card">
        <AiFillPhone id="phone-icon" />
        <div>
          <h4>Telefone</h4>
          <p>(71) 99130-9384</p>
        </div>
      </div>
      <div className="info-card">
        <AiOutlineMail id="email-icon" />
        <div>
          <h4>E-mail</h4>
          <p>fr_sancho@hotmail.com</p>
        </div>
      </div>
      <div className="info-card">
        <AiFillEnvironment id="pin-icon" />
        <div>
          <h4>Localização</h4>
          <p>Salvador / Bahia</p>
        </div>
      </div>
    </section>
  )
}

export default InformationContainer
