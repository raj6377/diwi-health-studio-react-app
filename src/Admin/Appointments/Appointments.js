import react, { useState, useEffect } from 'react';
import './Appointments.css'
import { db } from '../../Firebase-config/Firebase-config';
import { collection, getDocs, orderBy, query } from 'firebase/firestore';
import { Link } from 'react-router-dom';

const Admin = (props) => {
    const [data, setData] = useState([]);
    
    useEffect(()=>{
        props.setNavShow(false)
    },[props.setNavShow])

    useEffect(() => {
        db.collection('Appointment').onSnapshot((snapshot) => {
            const Appointments = [];
            snapshot.forEach((doc) => {
                Appointments.push({ ...doc.data(), id: doc.id });
            });

            setData(Appointments);
            console.log(data);
        })
    }, []);

    const onDelete = (id) => {
        if (window.confirm("Are you sure you want to delete?")) {
            db.collection('Appointment').doc(id).delete();
        }
    }

    return (
        <div className="table-outer-container">
            <div className='emp-div-nav'></div>
            <div className="table-inner-container1">
                <div className="table-inner-container2">
                    <div className="table-heading">
                        <h1>Appointments</h1>
                    </div>

                    <table className="table-content">

                        <thead className='thead-dark'>
                            <tr>
                                <th >No.</th>
                                <th >Name</th>
                                <th >Mobile</th>
                                <th >Mail</th>
                                <th >Address</th>
                                <th >Age</th>
                                <th >Gender</th>
                                <th >Date Requested</th>
                                <th >Time Requested</th>
                                <th >Purpose</th>
                                <th >Action</th>
                            </tr>
                        </thead>

                        <tbody>
                            {
                            data.map((item, index) => {
                                let even = false

                                    if((index+1)%2===0){
                                        even = true
                                    }
                                    else{
                                        even = false
                                    }

                                return (
                                    <tr key={item.id} className={`${even ? 'even-row':''}`}>
                                        <th >{index + 1}</th>
                                        <td>{item.Name}</td>
                                        <td>{item.Mobile}</td>
                                        <td>{item.Mail}</td>
                                        <td>{item.Address}</td>
                                        <td>{item.Age}</td>
                                        <td>{item.Gender}</td>
                                        <td>{item.DateRequested}</td>
                                        <td>{item.TimeRequested}</td>
                                        <td>{item.Purpose}</td>
                                        <td className='new-record-operations'>
                                            <Link to={`/update/${item.id}`}>
                                                <a >
                                                    <i className="fas fa-pencil-alt fa-lg update-btn" />
                                                </a>
                                            </Link>
                                            <a onClick={() => onDelete(item.id)}>
                                                <i className="fas fa-trash-alt fa-lg delete-btn" />
                                            </a>
                                            <Link to={`/view/${item.id}`}>
                                                <a >
                                                    <i className="fa-sharp fa-solid fa-check fa-lg tick-btn" />
                                                </a>
                                            </Link>
                                        </td>
                                    </tr>
                                );
                            })
                            }
                        </tbody>
                    </table>
                </div>
            </div>
        </div>
    )
}

export default Admin;