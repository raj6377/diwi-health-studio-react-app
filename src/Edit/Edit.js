import { db } from "../Firebase-config/Firebase-config"
import { useState, useEffect} from 'react'
import { useNavigate, useParams } from 'react-router-dom'
import { isEmpty } from 'lodash'

const Edit=()=>{

    const [data,setData]=useState([]);
    
    const values = {
        name:"",
        mobile:"",
        email:'',
        address:'',
        TimeRequested:''
    };

    const [initialState,setState]=useState(values);
    const {name,mobile,email,address,TimeRequested}=initialState;
    const navigate = useNavigate();

    let currentId = useParams();
    const {id}=currentId;

    let obj={};
    
    useEffect(()=>{
        db.collection('Appointment').onSnapshot((snapshot)=>{
            const contacts=[];
            snapshot.forEach((doc)=>{
                obj = doc.data();

                contacts.push({...doc.data(),id:doc.id});
                
            });

            setData(contacts);
        })
    },[id]);

    useEffect(()=>{
        if(isEmpty(id)){
            setState({...values});
        }
        else{
            setState({...obj[id]})
        }
    },[id,data])
    
    const handleInputChange = (e)=>{
        let { name, value } = e.target;
        setState({...initialState,[name]:value});
    };

    const handleSubmit=(e)=>{
        e.preventDefault();
        if(isEmpty(id)){
            db.collection("Appointment").doc().set(initialState);
        }else{
            
            db.collection('Appointment').doc(`${id}`).update(initialState);

        }
        navigate('/Admin')
    };

    return(
    <div className="table-outer-container">
        <div className="emp-div-nav"></div>
        <div className="table-inner-container1">
            <div className="table-inner-container2 edit-container">
                <form onSubmit={handleSubmit}>
                    <div className="form-group">
                        <label className="bmd-label-floating">Allot Time Slot </label>
                        <input type="time"  value={TimeRequested} name='TimeRequested' onChange={handleInputChange}/>
                    </div>
                    {/* <div className="form-group">
                        <label className="bmd-label-floating">mobile</label>
                        <input type="number" className='form-control' value={mobile} name='mobile' onChange={handleInputChange}/>
                    </div>
                    <div className="form-group">
                        <label className="bmd-label-floating">email</label>
                        <input type="email" className='form-control' value={email} name='email' onChange={handleInputChange}/>
                    </div>
                    <div className="form-group">
                        <label className="bmd-label-floating">address</label>
                        <input type="text" className='form-control' value={address} name='address' onChange={handleInputChange}/>
                    </div> */}
                    <div className="operation-btns">
                        <button className='cancel-btn'>Cancel</button>
                        <button type='submit' className='submit-btn'>Submit</button>
                    </div>
                </form>

            </div>
        </div>
    </div>    
    )
}
export default Edit