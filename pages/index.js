import Head from 'next/head'
import Image from 'next/image'
import { useEffect, useState } from 'react'
import styles from '../styles/Home.module.css'

const url='https://kitsu.io/api/edge/';

export default function Home() {
  const[seachAnime,setSeachAnime]=useState('Naruto');
  const[photos,setPhotos]=useState([])

  useEffect(()=>{
    fetch(`${url}anime?filter[text]=${seachAnime}&page[limit]=12`)    
       .then((res)=>res.json())
       .then((res)=>{
        setPhotos(res)
       })
       .catch((err)=>{console.log(err)})
        
   },[seachAnime])


  function photosRender(){
    if(photos.length >0)
  return photos.data.map((anime)=>{
     <li key={anime.id}><img
     src={anime.attributes.posterImage.small}
     alt={anime.attributes.canonicalTitle}
   /></li>
    })
    
   }
  

  return (
    <div >
      <Head>
        <title>Electron e NextJS</title>
      </Head>
      teste
      {/* {seachAnime && !photos.data && <span>Carregando...</span>} */}
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

      {photosRender}
    </div>
  )

}