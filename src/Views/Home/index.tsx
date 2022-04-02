import React, {useState, useEffect} from 'react';

import Nav from '../../Components/Nav';
import Footer from '../../Components/Footer';

import Constants from '../../Constants'

import { apiData } from '../../services/apiData';

import {IBlockChainData} from '../../interfaces';

const Home: React.FC = () => {

  const [data, setData] = useState<IBlockChainData>({} as IBlockChainData);

  useEffect(() => {
    apiData.get('stores').then(
      res => console.log(res.data)
    )
  }, [])

  return(
    <>
      <Nav />
      <h1>Home page</h1>
      <Footer />
    </>
  )
}

export default Home;