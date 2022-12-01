import react,{useState} from 'react';
import './Admin.css'
import { db } from '../Firebase-config/Firebase-config';
import { collection, getDocs } from 'firebase/firestore';
const Admin = ()=>{
const [users,setUsers]=useState([]);

const colRef= collection(db,'Appointment');
    getDocs(colRef).then((snapshot)=>{
        let Appointments=[]
        snapshot.docs.forEach((doc)=>{
            Appointments.push({...doc.data(),id:doc.id})
        })
        setUsers(Appointments);
    }).catch((err)=>{
        console.log(err.message);
    })

 return (
        <div className='main'>
        <div className='header'>Admin</div>
            <div className='t'>
            <table border='1'>
            <tr> 
                        <td>Address</td>
                        <td>Age</td>
                        <td>DateRequested</td>
                        <td>Gender</td>
                        <td>Mail</td>
                        <td>Mobile</td>
                        <td>Name</td>
                        <td>Purpose</td>
                        <td>TimeRequested</td>
                        </tr>
                {users.map(user=>(
                    <tr>
                        
                        
                    <td>{user.Address}</td>
                    <td>{user.Age}</td>
                    <td>{user.DateRequested}</td>
                    <td>{user.Gender}</td>
                    <td>{user.Mail}</td>
                    <td>{user.Mobile}</td>
                    <td>{user.Name}</td>
                    <td>{user.Purpose}</td>
                    <td>{user.TimeRequested}</td>
                    </tr>
                ))}
            </table>
            </div>
        </div>
    )
}

export default Admin;