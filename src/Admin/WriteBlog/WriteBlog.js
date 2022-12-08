import { useState, useEffect } from 'react';
import './WriteBlog.css'
import { db } from '../../Firebase-config/Firebase-config';
import { addDoc, collection } from 'firebase/firestore'
import {useNavigate} from 'react-router-dom'
import bg from '../../Images/write-blog/bgx.jpg'


const WriteBlog = (props) => {
  const [newTitle,setTitle] = useState("");
  const [newText,setText] = useState('');
  const [imageUpload,setImageUpload]=useState(null);

  const appointmnetCollectionRef = collection(db,"Blogs");
  const navigate=useNavigate();

  const createAppointment = async ()=>{
    await addDoc(appointmnetCollectionRef,{Title:newTitle , Text:newText })
  }
  const uploadImage = () =>{
    if(imageUpload==null) return;

  }

  useEffect(()=>{
    props.setNavShow(false)
},[props.setNavShow])


    return (
      <>
        <img className='write-blog-bg' src={bg}></img>
        <div className='write-blog-outer-div'>
          <div className='write-blog-inner-div'>
            <form className='write-blog-form'>
                    <div className='wb-one-ele' >
                        <input type="text" placeholder=' Title' className='wb-title' onChange={(event) => setTitle(event.target.value)}/>
                    </div>
                    <div className='wb-one-ele'>
                        <textarea  placeholder=' Context' className='wb-context' rows="20" cols="100" onChange={(event) => setText(event.target.value)}/>
                    </div>
                    <div className='wb-one-ele'>
                        <input type='file' onChange={(e)=>{setImageUpload(e.target.files[0])}}/>
                        {/* <button className='bttn' onClick={uploadImage}>Upload Image</button> */}
                    </div>
                    <div className='wb-one-ele'>
                       <button className='wb-post-btn' onClick={createAppointment}>Post</button>
                    </div>
            </form>
          </div>
        </div>
      </>
    )
}
export default WriteBlog;