import React, { useState } from 'react'
import { useEffect } from 'react'
import { useParams } from 'react-router-dom'
import { db } from '../Firebase-config/Firebase-config';

export default function SingleBlog(props) {
  const initialState={
    Title:'',
    Text:'',
  };
  const [data,setData]=useState(initialState);
  const {Title,Text}=data;
  const [users,setUsers] = useState([]);

 let currentId=useParams();
    const {id}=currentId;
    const cid=id;

    let obj={};

     
    useEffect(()=>{
      db.collection('Blogs').onSnapshot((snapshot)=>{
          const list=[];
          snapshot.forEach((doc)=>{
              obj = doc.data();
            if(doc.id===cid)

              list.push({...doc.data(),id:doc.id});
              
          });
          setUsers(list);
      })
  },[cid]);

    useEffect(()=>{
        props.setNavShow(false)
    },[props.setNavShow])

  return (
    <div class="single-blog-outer-div">
        <div class='single-blog-inner-div'>
          {users && users.map((item)=>{
            return(
              <div>
              <img src={item.img}></img>
              <h1 >{item.Title}</h1>
              <h3>{item.Text}</h3>
              </div>
            )
          })}
        </div>
    </div>
  )
}
