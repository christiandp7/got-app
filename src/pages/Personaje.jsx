import React, {useState, useEffect} from 'react'
import axios from 'axios'
import { useParams } from "react-router-dom";

const Personaje = () => {
  const [personaje, setPersonaje] = useState({})

  let { id } = useParams();

  useEffect(() => {
    axios.get(`https://thronesapi.com/api/v2/Characters/${id}`)
    .then(function (response) {
      console.log(response);
      setPersonaje(response.data)
    })
    .catch(function (error) {
      console.log(error);
    })
    
  },[])

  return (
    <div className="personaje-page">
      <img src={personaje.imageUrl} alt="" />
      <h1>{personaje.fullName}</h1>
      <h2>"{personaje.title}"</h2>
      <h4><b>Family:</b> {personaje.family}</h4>
    </div>
  )
}

export default Personaje