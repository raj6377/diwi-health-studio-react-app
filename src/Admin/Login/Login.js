import "./login.css";
import { useEffect } from "react";
import { Link } from "react-router-dom";
import bg from "../../Images/dashboard/bg.jpg";
import log from "../../Images/navbar/logo1.png";
import GoToTop from "../../GoToTop";

const Login = (props) => {
  // useEffect((props)=>{
  //     props.setNavShow(false)
  // },[props.setNavShow])

  return (
    <>
      <div className="logIn-outer-div">
        <img className="write-blog-bg" src={bg} alt="bg-img"></img>
        <div className="logIn-inner-div">
          <img src={log} alt="logo"></img>
          <div className="user-pass-field">
            <input type="text" placeholder=" Username"></input>
            <br />
            <input type="password" placeholder=" Password"></input>
          </div>
          <div className="logIn-buttons">
            <Link to="/Dashboard">
              <button className="logIn-btn">Log In</button>
            </Link>
          </div>
        </div>
      </div>
      <GoToTop />
    </>
  );
};
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
