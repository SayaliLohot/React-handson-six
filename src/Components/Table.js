import React, { useContext } from "react";
import { Link, useNavigate } from "react-router-dom";
import ContexData from "./ContexData";
import Nav from "./Nav";

function Table() {
  const DataContex = useContext(ContexData);
  console.log(DataContex);
  const nav = useNavigate()
  return (

    <div>
      <Nav />

      <div className="tablehead">
        <h1>Student Details</h1>
        
        <button onClick={()=>{nav('/addNewStudent')}}>Add New Student</button>
      </div>
      <table>
        <thead>
        <tr>
          <th>Name</th>
          {/* <th>id</th> */}
          <th>Age</th>
          <th>Course</th>
          <th>Batch</th>
          <th>Edit</th>
        </tr>
        </thead>
        <tbody>
          {DataContex.entries.map((item,index ) => (
            // console.log(item, index);
           
              <tr key={index}>
                <td >{item.name}</td>
                {/* <td >{item.id}</td> */}
                <td >{item.age}</td>
                <td >{item.course}</td>
                <td >{item.batch}</td>
                <td >
                  <Link to="/editStudent" state={{data: index }} >
                    Edit
                  </Link>
                </td>
              </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default Table;
