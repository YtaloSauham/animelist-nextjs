import Head from 'next/head'
import Image from 'next/image'
import { useEffect, useState } from 'react'
import styles from '../styles/Home.module.css'

const url='https://kitsu.io/api/edge/';

export default function Home() {
  const[seachAnime,setSeachAnime]=useState('');
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

   return photos?.map((photos)=>{
      <li key={photos.id}>{photos.id}</li>
    })
 
   }
  

  return (
    <div >
      <Head>
        <title>Electron e NextJS</title>
      </Head>
      teste
      <ul>
        {photosRender()}
      </ul> 
      {console.log(photos)}
     
      

    </div>
  )

}