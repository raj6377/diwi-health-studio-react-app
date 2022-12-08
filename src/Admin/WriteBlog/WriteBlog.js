import { useState } from 'react';
import './WriteBlog.css'
import { db } from '../../Firebase-config/Firebase-config';
import { addDoc, collection } from 'firebase/firestore'
import {useNavigate} from 'react-router-dom'


const WriteBlog = () => {
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



    return (
        <div className='write-blog-outer-div'>
          <div className='write-blog-inner-div'>
            <form className='write-blog-form'>
                     <div >
                        <label >Title</label>
                        <input type="text" placeholder='Title' onChange={(event) => setTitle(event.target.value)}/>
                    </div>
                    <div >
                        <label >Text</label>
                        <textarea className='txt'  rows="20" cols="100" onChange={(event) => setText(event.target.value)}/>
                     </div>
                     <div className='new-blog-content'>
                        <button className='bttn' onClick={createAppointment}>SUBMIT</button>
                     </div>
                     <div >
                        <input type='file' onChange={(e)=>{setImageUpload(e.target.files[0])}}/>
                        <button className='bttn' onClick={uploadImage}>Upload Image</button>
                     </div>
            </form>
          </div>
        </div>
    )
}
export default WriteBlog;