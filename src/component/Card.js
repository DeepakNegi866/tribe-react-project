import React from 'react'
import {useState,useEffect} from 'react';
import { FaRegThumbsDown, FaRegThumbsUp } from 'react-icons/fa';
// import { NavLink } from 'react-router-dom'

function Card() {

    const [cardData,setCardData] = useState([]);
    const [like,setLike]=useState(0);
    const [dislike,setDislike]=useState(0);

    const fetchApi=async ()=>{
       const res = await fetch("https://jsonplaceholder.typicode.com/photos");
       const result=await res.json();
       console.log(JSON.stringify(result));
       setCardData(result);
    }

    const likeHndler=(id)=>{
      setLike(like+1);
    }
    const dislikeHandler=(id)=>{
      setDislike(dislike+1);
    }

    useEffect(()=>{
         fetchApi();
    },[])

  return (
    <>
    <div className='container'>
    
        {
            cardData.map((current,index)=>{
                return(
                <>
                <div className="card " style={{width: "15rem", height: "24rem"}}>
                <img src={current.thumbnailUrl} className="card-img-top" alt="noimage" />
                <div className="card-body">
                <h5 className="card-title">{current.title}</h5>
                <div><h4>FeedBack here</h4>
                <input type="textarea"/>
                <div className='d-flex mt-3'>
                <span><FaRegThumbsUp onClick={(e)=>likeHndler(index)}/></span>
                <h3>{like}</h3>
                <span><FaRegThumbsDown onClick={(e)=>dislikeHandler(index)}/></span>
                <h3>{dislike}</h3>
                </div>
                
                
               
                
                </div>
                </div>
    
    </div>
                </>
                )
            })
        }
  
</div>

    </>
  )
}

export default Card