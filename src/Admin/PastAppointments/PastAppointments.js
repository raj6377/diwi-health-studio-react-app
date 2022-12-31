import React, { useState, useEffect } from "react";
import { db } from "../../Firebase-config/Firebase-config";
import AppNav from "../AppointmentNav/AppointmentNav";

import { useAuth } from '../AuthContext/AuthContext'
import { useNavigate } from 'react-router-dom';

export default function PastAppointments(props) {
  const [data, setData] = useState([]);
  const [sortedData, setSortedData] = useState([]);
  const [sort, setSort] = useState(false);

  // const {Address,DateRequested,Age,Gender,Mail,Mobile,Name,Purpose,TimeRequested} = data;

  useEffect(() => {
    props.setNavShow(false);
  }, [props.setNavShow]);

  useEffect(() => {
    db.collection("PastAppointment").onSnapshot((snapshot) => {
      const PastAppointments = [];
      snapshot.forEach((doc) => {
        PastAppointments.push({ ...doc.data(), id: doc.id });
      });

      setData(PastAppointments);
      // console.log(data);
    });
  }, []);

  const onDelete = (id) => {
    if (window.confirm("Are you sure you want to delete?")) {
      db.collection("PastAppointment").doc(id).delete();
    }
  };

  // const appointmnetCollectionRef = collection(db,"AccAppointment");

  // const pushToAccAppointments = async (id) => {
  //     await addDoc(appointmnetCollectionRef ,{id, Name, Age, Gender, Mobile, Mail, Address, Purpose, DateRequested, TimeRequested})
  // }

    // Log out button 

    const { logout } = useAuth()
    const navigate = useNavigate()
  
    const logOut = async function(){
      try{
          await logout()
          navigate("/login")
      }
      catch(error){
          console.log("error :",error)
      }
  }


  const handleChange = (e) => {
    setSort(true);
    db.collection("PastAppointment")
      .orderBy(`${e.target.value}`)
      .onSnapshot((snapshot) => {
        let sortedData = [];
        snapshot.forEach((snap) => {
          sortedData.push({ ...snap.data(), id: snap.id });
        });
        setSortedData(sortedData);
      });
  };
  const handleReset = () => {
    setSort(false);
  };

  return (
    <div>
      <div className="table-outer-container">
        <div className="emp-div-nav">
          <h1>Appointments</h1>
          <button className="cancel-btn app-logout-btn-pos" onClick={logOut} >log out</button>
        </div>

        <div className="dropdown-outer">
          <label>Sort By:</label>
          <select className="dropdown" name="colValue" onChange={handleChange}>
            <option>Please Select</option>
            <option value="Name">Name</option>
            <option value="TimeRequested">Time Requested</option>
            <option value="DateRequested">Date Requested</option>
          </select>
          <button className="submit-btn select-reset-btn" onClick={handleReset}>
            Reset
          </button>
        </div>

        <div className="table-inner-container1">
          <div className="table-inner-container2">
            <div className="table-heading">
              <h1>{<AppNav />}</h1>
            </div>
            <table className="table-content">
              <thead className="thead-dark">
                <tr>
                  <th>No.</th>
                  <th>Name</th>
                  <th>Mobile</th>
                  <th>Mail</th>
                  <th>Address</th>
                  <th>Age</th>
                  <th>Gender</th>
                  <th>Date Requested</th>
                  <th>Time Requested</th>
                  <th>Purpose</th>
                  <th>Action</th>
                </tr>
              </thead>
              {!sort && (
                <tbody>
                  {data.map((item, index) => {
                    let even = false;

                    if ((index + 1) % 2 === 0) {
                      even = true;
                    } else {
                      even = false;
                    }

                    return (
                      <tr key={item.id} className={`${even ? "even-row" : ""}`}>
                        <th>{index + 1}</th>
                        <td>{item.Name}</td>
                        <td>{item.Mobile}</td>
                        <td>{item.Mail}</td>
                        <td>{item.Address}</td>
                        <td>{item.Age}</td>
                        <td>{item.Gender}</td>
                        <td>{item.DateRequested}</td>
                        <td>{item.TimeRequested}</td>
                        <td>{item.Purpose}</td>
                        <td className="new-record-operations">
                          {/* <Link to={`/update/${item.id}`}>
                                        <a >
                                            <i className="fas fa-pencil-alt fa-lg update-btn" />
                                        </a>
                                    </Link> */}
                          <a>
                            <i
                              onClick={() => onDelete(item.id)}
                              className="fas fa-trash-alt fa-lg delete-btn"
                            />
                          </a>
                          {/* <Link to='/AccAppointments'>
                                        <a onClick={() => pushToAccAppointments(item.id)}>
                                            <i className="fa-sharp fa-solid fa-check fa-lg tick-btn" />
                                        </a>
                                    </Link> */}
                        </td>
                      </tr>
                    );
                  })}
                </tbody>
              )}
              {sort && (
                <tbody>
                  {sortedData.map((item, index) => {
                    let even = false;

                    if ((index + 1) % 2 === 0) {
                      even = true;
                    } else {
                      even = false;
                    }

                    return (
                      <tr key={item.id} className={`${even ? "even-row" : ""}`}>
                        <th>{index + 1}</th>
                        <td>{item.Name}</td>
                        <td>{item.Mobile}</td>
                        <td>{item.Mail}</td>
                        <td>{item.Address}</td>
                        <td>{item.Age}</td>
                        <td>{item.Gender}</td>
                        <td>{item.DateRequested}</td>
                        <td>{item.TimeRequested}</td>
                        <td>{item.Purpose}</td>
                        <td className="new-record-operations">
                          {/* <Link to={`/update/${item.id}`}>
                                        <a >
                                            <i className="fas fa-pencil-alt fa-lg update-btn" />
                                        </a>
                                    </Link> */}
                          <a>
                            <i
                              onClick={() => onDelete(item.id)}
                              className="fas fa-trash-alt fa-lg delete-btn"
                            />
                          </a>
                          {/* <Link to='/AccAppointments'>
                                        <a onClick={() => pushToAccAppointments(item.id)}>
                                            <i className="fa-sharp fa-solid fa-check fa-lg tick-btn" />
                                        </a>
                                    </Link> */}
                        </td>
                      </tr>
                    );
                  })}
                </tbody>
              )}
            </table>
          </div>
        </div>
      </div>
    </div>
  );
}
