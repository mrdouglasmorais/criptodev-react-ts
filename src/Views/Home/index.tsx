import React, {useState, useEffect} from 'react';

import Nav from '../../Components/Nav';
import Footer from '../../Components/Footer';

import Constants from '../../Constants'

import { apiData } from '../../services/apiData';

import {IStore} from '../../interfaces';

const Home: React.FC = () => {

  const [data, setData] = useState<IStore[]>([]);

  useEffect(() => {
    apiData.get('stores').then(
      res => {
        setData(res.data)
      }
    )
  }, [])

  return(
    <>
      <Nav />
      <h1>Listando Lojas</h1>
      {data.map( (el, index) => (
        <>
          <div key={index}>
            <h2>{el.label}</h2>
            <img src={el.logo} alt={el.label} width={300} height={'auto'}/>
            <p>{el.address.street}</p>
            <p>{el.address.city}</p>
            <p>{el.address.state}</p>
          </div>
        </>
      ))}
      <Footer />
    </>
  )
}

export default Home;