import React,{useState} from "react";
import "../App.css";
import 'bootstrap/dist/css/bootstrap.min.css';
import prof from "../images/prof.png";
import { FaPencilAlt } from 'react-icons/fa';
import { BsTrash3 } from "react-icons/bs";

function SignUp(){
    const [user,setUser] = useState({
        name :"",gender:"",age : "",phone :"",date:"",time:"",type: "",doctor:"",
    });
    const [isEditing, setIsEditing] = useState(false);
    const [editingIndex, setEditingIndex] = useState(null);

    let name1,value;
    const handleClick = (e) =>{
        
        name1 = e.target.name;
        value = e.target.value;
        setUser({...user,[name1]:value})
    }

    const [tableData, setTableData] = useState([]);
  
    const addRow = () => {
      if (isEditing) {
        const updatedData = [...tableData];
        updatedData[editingIndex] = user;
        setTableData(updatedData);
        setIsEditing(false);
        setEditingIndex(null);
      } else {
        setTableData([...tableData, user]);
      }
      setUser({
        name: '',
        gender: '',
        phone: '',
        date: '',
        time: '',
        type: '',
        doctor: '',
      });
    };
    
  const deleteRow = (indexToDelete) => {
    const updatedData = [...tableData];
    updatedData.splice(indexToDelete, 1);
    setTableData(updatedData);
  };
  const handleEdit = (index) => {
    setIsEditing(true);
    setEditingIndex(index);
    setUser(tableData[index]); 
  };
    return(
        <div>
        <section class="form-content">
            <div class="container register-form">
                    <div class="form">
                        <div class="note">
                            <p>Welcome to Gradious Doctor Appointment Booking</p>
                        </div>
        
                        <div class="form-content">
                            <div class="row">
                                <div class="col-md-4">
                                    <div class="form-group">
                                        <input type="text" class="form-control row-gap" placeholder="Patient Name *" value={user.name} name="name" onChange={handleClick}/>
                                    </div>
                                    <div class="form-group ">
                                    <select  class="form-control row-gap select" placeholder="Select Male/Female *" value={user.gender} name="gender" onChange={handleClick}>
                                <option name="M">Male</option>
                                <option name="F">Female</option> 
                                </select>
         
                                    </div>
                                    <div class="form-group">
                                        <input type="text" class="form-control row-gap" placeholder="Age *" value={user.age} name="age" onChange={handleClick}/>
                                    </div>
        
                                </div>
                                <div class="col-md-4">
                                    <div class="form-group row-gap">
                                        <input type="text" class="form-control" placeholder="Phone Number *" value={user.phone} name="phone" onChange={handleClick}/>
                                    </div>
                                    <div class="form-group row-gap">
                                        <input type="text" class="form-control" placeholder="Date *" value={user.date} name="date" onChange={handleClick}/>
                                    </div>
        
                                    <div class="form-group row-gap">
                                        <input type="text" class="form-control" placeholder="Time *" value={user.time} name="time" onChange={handleClick}/>
                                    </div>
        
                                </div>
                                <div class="col-md-4">
                                    <div class="form-group row-gap">
                                        <input type="text" class="form-control" placeholder="Doctor Name *" value={user.doctor} name="doctor" onChange={handleClick}/>
                                    </div>
                                    <div class="form-group row-gap">
                                    <select  class="form-control select" placeholder="Select Consule/Revisit *" value={user.type} onChange={handleClick} name="type">
                                <option name="Consult">Consult</option>
                                <option name="Revisit" >Revisit</option> 
                                </select>               
        
                                </div>
                            </div>
        
                        </div>
                        <button type="button" className="btnSubmit" onClick={addRow}>{isEditing ? "Update Appointment" : "Book Appointment"}</button>
                    </div>
                </div>
            </div>
        </section>
 <section class="main-content">
     <div className="container">
        <br />
		<br />
      <table className="table">
        <thead>
          <tr>
            <th>Patient</th>
            <th>Status</th>
            <th>Appointment</th>
            <th>Phone</th>
            <th>Doctor</th>
            <th>Actions</th>
          </tr>
        </thead>
        <tbody>
          {tableData.map((row, index) => (
            <tr key={index}>
            
              <td><div className="user-info">
              <div class="user-info__img">
									<img src={prof} alt="User Img" />
								</div>
              <div class="user-info__basic">
									<h5 class="mb-0">{row.name}</h5>
									<p class="text-muted mb-0">{row.age} Years,<span>{row.gender!==''?row.gender:"Male"}</span></p></div> 
                </div>
              </td>
                
              <td><span class={row.type==="Revisit"?"btn btn-primary":"btn btn-success"}>{row.type!==""?row.type:"Consult"}</span></td>
              <td><h6 class="mb-0">{row.time}</h6>
							<small>{row.date}</small></td>
              <td><h6 class="mb-0">{row.phone}</h6>
							<a href="#!"><small>Contact</small></a></td>
              <td><h6 class="mb-0">{row.doctor}</h6></td>
              <td>
							
                <button className="btn" onClick={() => deleteRow(index)}><BsTrash3 /></button>
								<button className="btn" onClick={() => handleEdit(index)}><FaPencilAlt /></button>
								
						  </td>
            </tr>
          ))}
        </tbody>
      </table>
      </div>
      </section>
    </div>
    )
}
export default SignUp;