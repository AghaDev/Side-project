import React from 'react'
import { useState,useEffect } from 'react'
import axios from 'axios'

const Memes = () => {
    const [memes, setMemes] = useState([])

    useEffect(() => {
        axios.get('http://localhost:4000/meme')
        .then((response) => {
            setMemes(response.data)
            console.log(response)
        }).catch((error) => {
            console.log(error)
        })
    }, [])
    

  return (
    <div className='d-flex flex-wrap gap-5 justify-content-center  vh-100 w-100'>
        {memes.map((meme, index) => (
            <div key={index}>
<div className="card w-50">
  <img src={`http://localhost:4000/${meme.image}`} className="card-img-top w-100" alt="Fissure in Sandstone"/>
  <div className="card-body">
    <p className="card-text">{meme.text}</p>
  </div>
</div>
            </div>
        ))}
    </div>
  )
}

export default Memes