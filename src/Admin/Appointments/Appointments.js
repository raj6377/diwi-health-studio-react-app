import react, { useState, useEffect } from 'react';
import './Appointments.css'
import { db } from '../../Firebase-config/Firebase-config';
import { collection, getDocs, orderBy, query,addDoc} from 'firebase/firestore';
import { Link } from 'react-router-dom';
import AppNav from '../AppointmentNav/AppointmentNav'

const Admin = (props) => {
    const [data, setData] = useState([]);
    const [value,setValue] = useState(0)


    // const {DateRequested,Age,Gender,Mail,Mobile,Name,Purpose,TimeRequested} = data[value] || {};
    var Address = '';
    var DateRequested = '';
    var Age = '';
    var Gender = '';
    var Mail = '';
    var Mobile = '';
    var Name = '';
    var Purpose = '';
    var TimeRequested = '';
    
    
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
            // console.log(data);
        })
    }, []);

    const onDelete = (id) => {
        if (window.confirm("Are you sure you want to delete?")) {
            db.collection('Appointment').doc(id).delete();
        }
    };

    const AccAppointmnetCollectionRef = collection(db,"AccAppointment");

    const pushToAccAppointments = async (id) => {
        
        var ind = 0

        data.forEach((block) => {
            if(block.id===id){
                Address=block.Address
                Name = block.Name
                Age = block.Age
                Mail=block.Mail
                Mobile = block.Mobile
                Purpose = block.Purpose
                TimeRequested = block.TimeRequested
                DateRequested = block.DateRequested
                Gender=block.Gender
                ind = data.indexOf(block)
            }
        });        

        db.collection('Appointment').doc(data[ind].id).delete();

        await addDoc(AccAppointmnetCollectionRef,{Name:Name,Address:Address,Age:Age,Gender:Gender,Mail:Mail,Mobile:Mobile,Purpose:Purpose,TimeRequested:TimeRequested,DateRequested:DateRequested})
       
    }

    return (
        <div className="table-outer-container">
            <div className='emp-div-nav'></div>
            <div className="table-inner-container1">
                <div className="table-inner-container2">
                    <div className="table-heading">
                        <h1>{<AppNav/>}</h1>
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
                                            <a >
                                                <i onClick={() => onDelete(item.id)} className="fas fa-trash-alt fa-lg delete-btn" />
                                            </a>
                                                <a >
                                                    <Link to={`/AccAppointments`}>
                                                    <i onClick={() => pushToAccAppointments(item.id)} className="fa-sharp fa-solid fa-check fa-lg tick-btn" />
                                                    </Link>
                                                </a>
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