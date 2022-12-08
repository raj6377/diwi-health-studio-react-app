import './login.css'
import { useContext, useState, useEffect } from 'react';
import {signInWithEmailAndPassword} from 'firebase/auth'
// import {auth} from '../Firebase-config/Firebase-config'
import { useNavigate } from 'react-router-dom';
// import { AuthContext } from '../context/AuthContext';

import  log  from '../../Images/navbar/logo1.png'

const Login = (props) =>{

    useEffect(()=>{
        props.setNavShow(false)
    },[props.setNavShow])

    
    return(
        <>
            <div className='logIn-outer-div'>
                <div className='logIn-inner-div'>
                    <img src={log}></img>
                    <div className='user-pass-field'>
                        <input type='text' placeholder=' Username'></input>
                        <br/>
                        <input type='password' placeholder=' Password'></input>
                    </div>
                <div className='logIn-buttons'>
                    <button className='logIn-btn'>Log In</button>
                </div>
                </div>
            </div>
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
