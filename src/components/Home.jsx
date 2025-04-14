import React from 'react'
import ImagePreview from './ImagePreview.jsx';
import ImageUpload from './ImageUpload.jsx';
import {useState } from 'react';
import { enhancedImageAPI } from '../utils/enhancedApi.js';

const Home = () => {
 const [uploadImage, setuploadImage] = useState(null);
const [enhancedImage, setenhancedImage] = useState(null);
const [loading, setloading] = useState(false);
const UploadImageHandler = async (file)=>{
  setuploadImage(URL.createObjectURL(file))
  console.log(URL.createObjectURL(file));
  setloading(true)
  try {
    const enhanceURL = await enhancedImageAPI(file);
    setenhancedImage(enhanceURL);
    setloading(false)
  } catch (error) {
    console.log(error);
    alert('Error while enhancing the image. Please try again later');

    
    
  }
}
  return (
    <>
      <ImageUpload enhanced={enhancedImage?.image} UploadImageHandler={UploadImageHandler}/>
      <ImagePreview 
      loading={loading}
      enhanced={enhancedImage?.image}
      uploaded={uploadImage}
        />
    </>
  )
}

export default Home