import React from 'react';

import { Link  } from 'react-router-dom';

import Logo from '../../img/logo.png'

const Nav: React.FC = () => {
  return (
    <div>
      <img src={Logo} alt="Logotipo" width={200} height={'auto'}/>
      <Link to='/'>Home</Link>
      <Link to='/contact'>Contato</Link>
    </div>
  )
}

export default Nav