import './login.css'
import { useEffect } from 'react';
import { Link } from 'react-router-dom';
import bg from '../../Images/dashboard/bg.jpg'
import  log  from '../../Images/navbar/logo1.png'
import GoToTop from '../../GoToTop'

import { auth } from '../../Firebase-config/Firebase-config'
import { useRef } from 'react';
import { signInWithEmailAndPassword } from 'firebase/auth';
import { useNavigate } from 'react-router-dom'
import { useState } from 'react';
import { useAuth } from '../AuthContext/AuthContext'

const Login = (props) =>{

    const emailRef = useRef()
  const passwordRef = useRef()
  const { login } = useAuth()
  const [error, setError] = useState("")
  const [loading, setLoading] = useState(false)
  const navigate = useNavigate()


  async function handleSubmit(e) {
    e.preventDefault()

    try {
      setError("")
      setLoading(true)
      await login(emailRef.current.value, passwordRef.current.value)
      navigate("/dashboard")
    } catch {
      setError("Failed to log in")
    }

    setLoading(false)
  }

    useEffect(()=>{
        props.setNavShow(false)
    },[props.setNavShow])


    return(
        <>
            <div className='logIn-outer-div'>
                <img className='write-blog-bg' src={bg} alt='bg-img'></img>
                <form onSubmit={handleSubmit} className='logIn-inner-div'>
                    <img src={log} alt="logo"></img>
                    {error && <h2 style={{color:"red"}}>{error}</h2>}
                    <div className='user-pass-field'>
                        <input type='email' ref={emailRef} placeholder=' Username'></input>
                        <br/>
                        <input type='password' ref={passwordRef} placeholder=' Password'></input>
                    </div>
                    <div className='logIn-buttons'>
                        <button disabled={loading} className='logIn-btn'>Log In</button>
                    </div>
                </form>
            </div>
            <GoToTop/>
        </>
    );
}
export default Login;










// return (
//     <div className='login'>
//         {/* <form onSubmit={handleSubmit}>
//         <img src={require('../Images/navbar/logo1.png')}/>
//             <input type='email' placeholder=' email' onChange={(e)=>setEmail(e.target.value)}></input>
//             <input type='password' placeholder=' password' onChange={(e)=>setPassword(e.target.value)}></input>
//             <button type='submit'>Login</button>
//             {error && <span>Wrong username or password!</span>}
//         </form> */}
//     </div>
// )


// const [error,setError]=useState(false);
// const [email,setEmail]=useState('');
// const [password,setPassword]=useState('');
// const navigate=useNavigate();
// // const {dispatch}=useContext(AuthContext)

// const handleSubmit=(e)=>{
//     e.preventDefault();

//     signInWithEmailAndPassword(auth, email, password)
//     .then((userCredential) => {
//       // Signed in 
//       const user = userCredential.user;
//     //   dispatch({type:"LOGIN",payload:user})
//       navigate("/Admin");
//     })
//     .catch((error) => {
//       setError(true);
//     });
// }
