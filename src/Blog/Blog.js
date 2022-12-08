import React,{useState,useEffect} from 'react'
import './blog.css'
import { db } from '../Firebase-config/Firebase-config';
import bgImg from '../Images/Blog/bgx.jpg'
import GoToTop from '../GoToTop';
import { collection, onSnapshot } from 'firebase/firestore';
import { useNavigate } from 'react-router-dom';

export default function Blog() {
    const [users,setUsers] = useState([]);
    const [loading,setLoading] = useState(false);
    const navigate=useNavigate();
   
useEffect(()=>{
    setLoading(true);
    const unsub=onSnapshot(collection(db,'Blogs'),(snapshot)=>{
        let list = []
        snapshot.docs.forEach((doc)=>{
            list.push({id:doc.id,...doc.data()})
        });
        setUsers(list);
        setLoading(false);
    },(error)=>{
        console.log(error);
    });
   return ()=>{
    unsub();
   };
},[]);

    return (
    <div className="main-blog-div">
        <div className='bg-img'>
            <img className='bg-img' src={bgImg}/>
        </div>
        <h2 className='blog-head' >Blogs</h2>

        <div className='next-div'/>

        <div className='blog-cards'>
            {users && users.map((item)=>{
                return(
                    <div>
                    <img src={item.img}/>
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
