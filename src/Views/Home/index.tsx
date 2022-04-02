import React, {useState, useEffect} from 'react';

import Nav from '../../Components/Nav';
import Footer from '../../Components/Footer';

import { apiData } from '../../services/apiData';

import {IStore} from '../../interfaces';

import styles from './Home.module.css'

const Home: React.FC = () => {

  const [data, setData] = useState<IStore[]>([]);
  const [isLoad, setIsload] = useState<boolean>(false);

  useEffect(() => {
    setIsload(true)
    apiData.get('stores').then(
      res => {
        setData(res.data)
      }
    ).finally( () => setIsload(false))
  }, [])

  return(
    <>
      <Nav />
      <div className={styles.container}>
        <h1>Listando Lojas</h1>
        { isLoad ? (
          <>
          <div>
            <h3>Aguarde carregando</h3>
          </div>
          </>
        ) : (
          <>
          {data.map( (el, index) => (
            <div className={styles.storeLists}>
              <div key={index}>
                <h2>{el.label}</h2>
                <img src={el.logo} alt={el.label} width={300} height={'auto'}/>
                <p>{el.address.street}</p>
                <p>{el.address.city}</p>
                <p>{el.address.state}</p>
              </div>
            </div>
          ))}
          </>
        )}
      </div>
      
      <Footer />
    </>
  )
}

export default Home;