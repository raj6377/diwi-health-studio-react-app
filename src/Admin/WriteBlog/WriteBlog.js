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
        <div className='cntnr'>
        <div className='bx'>
            <form className='frm'>
                     <div className="frm-grp">
                        <label className='lbl'>Title</label>
                        <input type="text" placeholder='Title' onChange={(event) => setTitle(event.target.value)}/>
                    </div>
                    <div className="frm-grp">
                        <label className='lbl'>Text</label>
                        <textarea className='txt'  rows="20" cols="100" onChange={(event) => setText(event.target.value)}/>
                     </div>
                     <div className='frm-grp'>
                        <button className='bttn' onClick={createAppointment}>SUBMIT</button>
                     </div>
                     <div className='frm-grp'>
                        <input type='file' onChange={(e)=>{setImageUpload(e.target.files[0])}}/>
                        <button className='bttn' onClick={uploadImage}>Upload Image</button>
                     </div>
            </form>
        </div>
        </div>
    )
}
export default WriteBlog;