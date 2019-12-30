import React from 'react'
import miranha from '../assets/miranha.jpg'
function Header(){
  return(
    <header>
      <nav>
        <h1>facebook</h1>
        <div id="perfil">
          <span>Meu Perfil</span>
          <img src={miranha}/>
        </div>
      </nav>
    </header>

  )
}

export default Header