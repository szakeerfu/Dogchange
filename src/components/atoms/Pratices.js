
import React, { useEffect, useState } from 'react'
import './Pratice.css'

export const Pratices = () => {
  const [image, setImage] = useState("");




  const getDogs = async () => {
    try{
      const response = await fetch(" https://dog.ceo/api/breeds/image/random");
    
      const data = await response.json()
      console.log(data)
      setImage(data.message)

    }catch (error) {
      console.error(error);
  }
    
    


  }

  useEffect(() => {

    getDogs();


  }, []);




  return (
    <div>
      <div className='main'>
        <h1>
          Every Refresh Get a new Dog image
        </h1>
      <img src={image} alt="Random dog" />

      </div>


 


    </div>
  )
}
