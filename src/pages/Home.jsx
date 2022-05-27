import { useState, useEffect } from 'react'
import axios from 'axios'
import Card from '../components/Card'


const Home = () => {

  const [data, setData] = useState([])
  
  useEffect(() => {
    axios.get('https://thronesapi.com/api/v2/Characters')
    .then(function (response) {
      console.log(response.data);
      setData(response.data)
    })
    .catch(function (error) {
      console.log(error);
    })
    
  },[])

  return (
    <div className="personajes-grid">
      {
        data.length > 0 ? data.map(personaje => <Card key={personaje.id} personaje={personaje} />) : <div>Loading...</div>
      }
    </div>
  )
}

export default Home