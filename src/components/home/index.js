import React from 'react'
import { Link } from 'react-router-dom';
import { useNavigate } from "react-router-dom";


const Home = () => {

  const navigate = useNavigate()
  return (
    <div>
     <div>
      <img src='./images/bghome.jpg' style={{width:'100%'}}/>
    </div>
    
    </div>
  )
}

export default Home;