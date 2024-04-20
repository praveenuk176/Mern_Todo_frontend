import React, { useState } from 'react'
import '../Css/Front.css'

const Front = () => {
    const [count, setCount]= useState(0);
    function likeCount(){
        setCount(count+1)
    }
    function dislikeCount(){
        if(count>0){
            setCount(count-1)
        }
    }
    const [change, setChange]= useState(0);
    function changeCount(){
        setChange(change+1)
    }

  return (
    <div className='container1'>
        <div className='container2'>
            <h1 id='he1'>Welcome to Praveen's Tech Training Hub!</h1>       
            <p id='p1'>Welcome, tech enthusiasts! I'm excited to welcome you to Praveen's Tech Training Hub, your go-to destination for top-notch tech education.</p>
            <p id='p1'>Whether you're a beginner or a seasoned pro, our goal is to provide you with high-quality, easy-to-understand training that helps you level up your skills and achieve your goals in the world of technology. </p>
            <h2 id='p1'>Happy learning!</h2>
        </div>
        
            
    </div>
  )
}

export default Front