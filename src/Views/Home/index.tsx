import React, {useState, useEffect} from 'react';

import Nav from '../../Components/Nav';
import Footer from '../../Components/Footer';

import { apiData } from '../../services/apiData';

import {IBlockChainData} from '../../interfaces';
import Constants from '../../Constants'

const Home: React.FC = () => {

  const [data, setData] = useState<IBlockChainData>({} as IBlockChainData);

  useEffect(() => {
    apiData.get('blockchain-data/bitcoin/testnet/blocks/height/673852/transactions?context=yourExampleString&limit=50&offset=0')
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