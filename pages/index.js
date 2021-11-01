import Head from 'next/head'
import Image from 'next/image'
import { useEffect, useState } from 'react'
import styles from '../styles/Home.module.css'
import { Container } from 'react-bootstrap'
import SearchInput  from '../src/components/SeachInput'
const url='https://kitsu.io/api/edge/';

export default function Home() {
  const[seachAnime,setSeachAnime]=useState('');
  const[photos,setPhotos]=useState({})

  useEffect(()=>{
    if(seachAnime){
      setPhotos({})
    fetch(`${url}anime?filter[text]=${seachAnime}&page[limit]=12`)    
    .then((res)=>res.json())
    .then((res)=>{
     setPhotos(res)
    })
    .catch((err)=>{console.log(err)})
     }
    
   },[seachAnime])


  function photosRender(){
  return photos.data && photos?.data.map((anime)=>{
     return(<>
     <Container>
    <li key={anime.id}><img src={anime.attributes.posterImage.small} alt={anime.attributes.canonicalTitle}/>{anime.attributes.canonicalTitle}</li></Container></>)
    })
   }
  

  return (
    <div >
      <Head>
        <title>Electron e NextJS</title>
      </Head>
      <SearchInput value={seachAnime} onChange={(e)=>{setSeachAnime(e)}}/>
      {seachAnime && !photos.data && <span>Carregando...</span>} 
      {/* {photos.data && (
        <ul className="animes-list">
          {photos.data.map((anime) => (
            <li key={anime.id}>
              <img
                src={anime.attributes.posterImage.small}
                alt={anime.attributes.canonicalTitle}
              />
              {anime.attributes.canonicalTitle}
            </li>
          ))}
        </ul>
      )} */}

      {photosRender()}
    </div>
  )

}