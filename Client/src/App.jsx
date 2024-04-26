import React, { useEffect, useState } from 'react'
import Navbar from './Component/Navbar'
import Button from './Component/Button'
import Grid from './Component/Grid'
import axios from 'axios'
import { message } from 'antd'


const App = () => {

  const [photos, setPhotos]=useState([])
// console.log(photos);

const getData=async()=>{
  try {
    let res=await axios.get('http://localhost:3000/getData')
  // console.log(res.data.data);
  setPhotos(res.data.data)
  // message.success('Successfully Fetched')

  } catch (error) {
    message.error(`${error}`)
  }
}


  useEffect(()=>{
   getData();
  }, [])
  
  return (
    <>
    <Navbar/>
    <Button/>
    <Grid photos={photos}/>
    </>
  )
}

export default App