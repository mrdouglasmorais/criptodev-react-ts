import React, {useState, useEffect} from 'react';

import Nav from '../../Components/Nav';
import Footer from '../../Components/Footer';

import { apiData } from '../../services/apiData'

const Home: React.FC = () => {

  const [data, setData] = useState({});

  return(
    <>
      <Nav />
      <h1>Home page</h1>
      <Footer />
    </>
  )
}

export default Home;