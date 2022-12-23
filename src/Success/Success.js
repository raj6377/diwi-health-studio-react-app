import {Link} from 'react-router-dom'
import {useEffect} from 'react'
import './Success.css'

const Success = (props) =>{
    useEffect(()=>{
        props.setNavShow(false)
    },[props.setNavShow])
    
return(
    <div className='success'>
        <div className="success-header">
            <h1>Payment Successfull!</h1>
        </div>
        <div className="success-span">
            <Link className='success-link' to={'/'}>Click here to go to home</Link>
        </div>
    </div>
)
}

export default Success;