import React from 'react'
import { useLocation } from 'react-router-dom';
import {useState, useEffect} from 'react';
import axios from 'axios';

const UserMemes = () => {
    const location = useLocation();
    const data = location.state.data;
    const [memes, setMemes] = useState([])
    const [text, setText] = useState('')
    const [image, setImage] = useState('')

   const formData = new FormData();
   formData.append('text', text)
   if(image) {
    formData.append('image', image);
  }

  const authToken = localStorage.getItem('token');
  console.log("muhieddin", authToken)
  
      useEffect(() => {
          axios.get(`http://localhost:4000/user/${data.id}`, {headers:{
    'Authorization': `Bearer ${authToken}`
          }
          })
          .then((response) => {
              setMemes(response.data)
              console.log(response.data)
          }).catch((error) => {
              console.log(error)
          })
      }, [])

      const handleEdit = async (meme) => {
        try{
        const response = await axios.patch(`http://localhost:4000/meme/${meme.id}`, formData,{
          headers: {
            'Content-Type': 'multipart/form-data'
          }
        })
        console.log(response)
        }catch(error) {
          console.log(error)
        }
      }
      const handleDelete = async (meme) => {
        try{
        const response = await axios.delete(`http://localhost:4000/meme/${meme.id}`)
        console.log(response)
        setMemes((prevMemes) => ({
          ...prevMemes,
          Memes: prevMemes.Memes.filter((m) => m.id !== meme.id)
        }));
        }catch(error) {
          console.log(error)
        }
        }
        const handleCreate = async () => {
          try{
          const response = await axios.post(`http://localhost:4000/meme/${data.id}`, formData)
          console.log(response)
          setMemes((prevMemes) => ({
            ...prevMemes,
            Memes: [...prevMemes.Memes, response.data]
          }));
          }catch(error) {
            console.log(error)
          }
          }

      

  return (
    <div>
    <div className='text-'>Welcome {data.username}</div>
      <div>Your Memes:{memes?.Memes?.map((meme, index) => (<div key={index}>
        <div className='d-flex flex-column'>
        {meme.text}
        <img src={`http://localhost:4000/${meme.image}`} className="card-img-top m-5 w-25" alt="Fissure in Sandstone"/>
        <div className='d-flex justify-content-start gap-5 w-50 m-3'>
        <button className='btn btn-danger w-50' onClick={() => handleDelete(meme)}>Delete</button>
        </div>
        <div className='d-flex flex-column m-3'>
          <h3>Edit the Meme </h3>
          <label htmlFor="text">Image Text</label>
          <input type='text' id='text' className='m-3 w-25 form-control' 
          onChange={(e) => setText(e.target.value)}
          value={text}
          />
          <label htmlFor="text">Image</label>
          <input type='file' id='text' className='m-3 w-25 form-control'onChange={(e) => setImage(e.target.files[0])}/>
        <button className='btn btn-success w-25 ' onClick={() => handleEdit(meme)}>Edit</button>
        </div>
        </div>
        </div>))}</div>
      <div>          <h3>Create a Meme </h3>
          <label htmlFor="text" className='m-3'>Image Text</label>
          <input type='text' id='text' className='m-3 w-25 form-control' 
          onChange={(e) => setText(e.target.value)}
          value={text}
          />
          <label htmlFor="text" className='m-3'>Image</label>
          <input type='file' id='text' className='m-3 w-25 form-control'onChange={(e) => setImage(e.target.files[0])}/> 
          <button onClick={handleCreate} className='btn btn-success w-25 m-3'>Create</button>
          </div>
    </div>
  )
}
    
export default UserMemes