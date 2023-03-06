import React, { useContext } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import ContexData from "./ContexData";

function Edit() {
  const DataContex = useContext(ContexData);
  const index = useLocation().state.data;
  const navigate = useNavigate()

  const updateObj ={
    name:DataContex.entries[index].name,
    // id:DataContex.entries[index].id,
    age:DataContex.entries[index].age,
    batch:DataContex.entries[index].batch,
    course:DataContex.entries[index].course,
  }
  const handleOnChange =(e)=>{
    updateObj[e.target.name]=e.target.value
  }

  const handleUpdate = ()=>{
    DataContex.entries[index]=updateObj
    navigate('/student')
  }
  return (
    <div className="editpart">
    <input placeholder={DataContex.entries[index].name} name='name' onChange={handleOnChange}></input>
    <input placeholder={DataContex.entries[index].age} name='age' onChange={handleOnChange}></input>
   <input placeholder={DataContex.entries[index].course} name='course' onChange={handleOnChange}></input>
     <input placeholder={DataContex.entries[index].batch} name='batch' onChange={handleOnChange}></input>
      {/* <input placeholder={DataContex.entries[index].id} name='id' onChange={handleOnChange}></input> */}
      <button onClick={handleUpdate}>Update</button>
    </div>
  );
}

export default Edit;

