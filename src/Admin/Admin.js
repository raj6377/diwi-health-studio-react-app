import react,{useState,useEffect} from 'react';
import './Admin.css'
import { db } from '../Firebase-config/Firebase-config';
import { collection, getDocs, orderBy, query } from 'firebase/firestore';
import { Link } from 'react-router-dom';
const Admin = ()=>{
const [data,setData]=useState([]);


useEffect(()=>{
    db.collection('Appointment').onSnapshot((snapshot)=>{
        const Appointments=[];
        snapshot.forEach((doc)=>{
            Appointments.push({...doc.data(),id:doc.id});
        });
        
        setData(Appointments);
        console.log(data);
    })
},[]);

const onDelete=(id)=>{
    if(window.confirm("Are you sure you want to delete?")){
        db.collection('Appointment').doc(id).delete();
    }
}

 return (
    <div className="container-fluid mt-5">
    <div className="row">
        <div className="col-lg-12">
            <div className="jumbotron">
                <h2 className="display-2">List Of Records</h2>
            </div>
            <table className="table table-bordered table-striped">
                <thead className='thead-dark'>
                    <tr>
                        <th scope='col'>No.</th>
                        <th scope='col'>Name</th>
                        <th scope='col'>Mobile</th>
                        <th scope='col'>Mail</th>
                        <th scope='col'>Address</th>
                        <th scope='col'>Age</th>
                        <th scope='col'>Gender</th>
                        <th scope='col'>Date Requested</th>
                        <th scope='col'>Time Requested</th>
                        <th scope='col'>Purpose</th>                      
                        <th scope='col'>Action</th>
                    </tr>
                </thead>
                <tbody>
                    {data.map((item,index)=>{
                        return(
                            <tr key={item.id}>
                                <th scope='row'>{index+1}</th>
                                <td>{item.Name}</td>
                                <td>{item.Mobile}</td>
                                <td>{item.Mail}</td>
                                <td>{item.Address}</td>
                                <td>{item.Age}</td>
                                <td>{item.Gender}</td>
                                <td>{item.DateRequested}</td>
                                <td>{item.TimeRequested}</td>
                                <td>{item.Purpose}</td>
                                <td>
                                    <Link to={`/update/${item.id}`}>
                                        <a className="btn text-primary">
                                            <i className="fas fa-pencil-alt"/>
                                        </a>
                                    </Link>
                                        <a className="btn text-danger" onClick={()=>onDelete(item.id)}>
                                            <i className="fas fa-trash-alt"/>
                                        </a>
                                    <Link to={`/view/${item.id}`}>
                                        <a className="btn text-info">
                                            <i className="fas fa-eye"/>
                                        </a>
                                    </Link>
                                </td>
                            </tr>
                        );
                    })}
                </tbody>
            </table>
        </div>
    </div>
</div>
    )
}

export default Admin;