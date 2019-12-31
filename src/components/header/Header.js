import React from 'react'

//Importing images
import Miranha from '../../assets/miranha.jpg'

// Importing Style
import './style.css'

function Header(){
  return(
    <header>
      <nav>
      <h1>Facebook</h1>
        <div id="perfil">
          <span>Meu Perfil</span>
          <img src={Miranha}/>
        </div>
      </nav>
    </header>
  )
}

export default Header