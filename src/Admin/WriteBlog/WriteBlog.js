import { useEffect, useState } from 'react';
import './WriteBlog.css'
import { db } from '../../Firebase-config/Firebase-config';
import { storage } from '../../Firebase-config/Firebase-config';
import { addDoc, collection, serverTimestamp } from 'firebase/firestore'
import {getDownloadURL, ref, uploadBytesResumable} from 'firebase/storage';
import {useNavigate} from 'react-router-dom'
import bg from '../../Images/write-blog/bgx.jpg'
 
const WriteBlog = (props) => {
  
  const initialState={
    Title:'',
    Text:'',
  };

  const [data,setData]=useState(initialState);
  const {Title,Text}=data;
  const [file,setFile]=useState(null);
  const [progress,setProgress]=useState({});
  const [isSubmit, setIsSubmit]=useState(false);

  useEffect(()=>{
    const uploadFile= ()=>{
      const name = new Date().getTime() + file.name;
      const storageRef=ref(storage,file.name);
      const uploadTask=uploadBytesResumable(storageRef,file);

      uploadTask.on("state_changed",(snapshot)=>{
        const progress=(snapshot.bytesTransferred/snapshot.totalBytes) * 100;
        setProgress(progress);
        switch(snapshot.state){
          case "paused":
            console.log('uplaod is pause');
            break;
          case "running":
            console.log('uplaod is running');
            break;
            default:
            break;
        }
      },(error)=>{
        console.log(error);
      },
      ()=>{
        getDownloadURL(uploadTask.snapshot.ref).then((downloadURL)=>{
          setData((prev)=>({...prev,img:downloadURL}))
        });
      }
      );
    };
    file && uploadFile();
  },[file])


  const navigate=useNavigate();

  // const createAppointment = async ()=>{
  //   await addDoc(appointmnetCollectionRef,{Title:newTitle , Text:newText })
  // }
const handleChange=(e)=>{
  setData({...data,[e.target.name]:e.target.value})
}
const handleSubmit = async (e) => {
  e.preventDefault();
  setIsSubmit(true);
  await addDoc(collection(db,'Blogs'),{
    ...data,
    timestamp:serverTimestamp(),
  });
  navigate('/Blog');
}

  useEffect(()=>{
    props.setNavShow(false)
},[props.setNavShow])

  return (
      <>
        <img className='write-blog-bg' src={bg}></img>
        <div className='write-blog-outer-div'>
          <div className='write-blog-inner-div'>
            <form onSubmit={handleSubmit} className='write-blog-form'>
                     <div className='wb-one-ele'>
                        <input className='wb-title' type="text" name='Title' placeholder=' Title' onChange={handleChange} value={Title} autofocus />
                    </div>
                    <div className='wb-one-ele'>
                        <textarea placeholder=' Context' className='wb-context' name='Text' onChange={handleChange} value={Text}  rows="20" cols="100" />
                     </div>
        
                     <div className='wb-one-ele'>
                        <input type='file' onChange={(e)=>{setFile(e.target.files[0])}}/>
                     </div>
                     <div className='wb-one-ele'>
                        <button primary type='submit' disabled={progress !==null && progress < 100} className='wb-post-btn'>Post</button>
                     </div>

            </form>
          </div>
        </div>
      </>
    )
}
export default WriteBlog;