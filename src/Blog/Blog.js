import React,{useState,useEffect} from 'react'
import './blog.css'
import { db } from '../Firebase-config/Firebase-config';
import bgImg from '../Images/Blog/bgx.jpg'
import GoToTop from '../GoToTop';

export default function Blog() {

    const [data,setData]=useState([]);

   
useEffect(()=>{
    db.collection('Blogs').onSnapshot((snapshot)=>{
        const blog=[];
        snapshot.forEach((doc)=>{
            blog.push({...doc.data(),id:doc.id});
        });       
        setData(blog);
        console.log(data);
    })
},[]);

    return (
    <div className="main-blog-div">
        <div className='bg-img'>
            <img className='bg-img' src={bgImg}/>
        </div>
        <h2 className='blog-head' >Blogs</h2>

        <div className='next-div'/>

        <div className='blog-cards'>
            {data.map((item)=>{
                return(
                    <div>
                    <img src='https://picsum.photos/200'/>
                    <h2>{item.Title}</h2>
                    </div>
                )
            })}
            
        </div>

        <div className='next-div'/>
    <GoToTop/>
    </div>
  )
}
