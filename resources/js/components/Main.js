import React,{useState,useEffect} from 'react'
import axios from 'axios'
import {Loading} from './Loading'

const Main = () => {
  const [user,setUser] = useState([])
  const [loading,setloading] = useState(false)

  const getUser = () => {
    axios('https://randomuser.me/api/?results=50')
    .then(response => setUser([...response.data.results]))
    .then(setloading(false))
  }
  useEffect(() => {
    setloading(true)
    getUser()
  },[])

  const handleSubmit = e => {
    e.preventDefault();
    getUser();
    console.log('more users')
  }
  
  return (
    <div className="App">
      <form onSubmit={handleSubmit}>
        <input type="submit" value="load users"/>
      </form>
      <hr/>
      {!loading ? (
        user.map((use,index) => (
        <div key={index}>
          <h3 style={{ color:'red' }} >{use.name.first}</h3>
          <p>{use.email}</p>
          <hr/>
        </div>
        )) 
      ) : (
        <Loading message='loading' />
      )}
    </div>
  )
}

export default Main
