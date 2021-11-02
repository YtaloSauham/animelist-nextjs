import Head from 'next/head'
import Image from 'next/image'
import { useEffect, useState } from 'react'
import styles from '../styles/Home.module.css'
import { Container } from 'react-bootstrap'
import SearchInput  from '../src/components/SeachInput'

const url='https://kitsu.io/api/edge/';

export default function Home() {
  const[seachAnime,setSeachAnime]=useState('');
  const[anime,setAnime]=useState({})

  useEffect(()=>{
    if(seachAnime){
      setAnime({})
    fetch(`${url}anime?filter[text]=${seachAnime}&page[limit]=12`)    
    .then((res)=>res.json())
    .then((res)=>{
     setAnime(res)
    })
    .catch((err)=>{console.log(err)})
     }
    
   },[seachAnime])


  function animeRender(){
  return anime.data && anime?.data.map((anime)=>{
     return(<>
     
    <li key={anime.id}><img src={anime.attributes.posterImage.small} alt={anime.attributes.canonicalTitle}/>{anime.attributes.canonicalTitle}</li></>)
    })
   }
  

  return (
    <div className={styles.main}>
      <Head>
        <title>Animes List Seac</title>
      </Head>
      <div className={styles.seachInput}>
      <SearchInput value={seachAnime} onChange={(e)=>{setSeachAnime(e)}}/>
      </div>
      {seachAnime && !anime.data && <span>Carregando...</span>} 
      <div className={styles.anime_Container}>

      {animeRender()}
      </div>
      
    </div>
  )

}



//Paginação