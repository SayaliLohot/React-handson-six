import './App.css';
import ContexData from './Components/ContexData'
import React , {useState} from 'react'
import {Routes,Route} from 'react-router-dom'
import Home from './Components/Home'
import ContactUs from './Components/ContactUs'
import Edit from './Components/Edit'
import Table from './Components/Table'
import AddStudent from './Components/AddStudent'
function App() {
  const [data,setData]=useState([{name:"Sayali",id:1,age:23,course:"MERN",batch:"October"},{name:"Shruti",id:2,age:23,course:"MEAN",batch:"November"},{name:"Komal",id:3,age:23,course:"MERN",batch:"October"},{name:"Shree",id:4,age:23,course:"MEAN",batch:"November"},{name:"Sameer",id:5,age:23,course:"MERN",batch:"December"}])

  return (
    <div className="App">
  <Routes>
    <Route path="/" element={<Home/>}/>
    <Route path="/student" element={
      <ContexData.Provider value={{entries:data , updateFunction : setData}}>
        <Table/>
      </ContexData.Provider>
    }/>
    <Route path="/editStudent" element={
      <ContexData.Provider value={{entries:data , updateFunction : setData}}>
        <Edit/>
      </ContexData.Provider>
    }/>
    <Route path="/contactUs" element={<ContactUs/>}/>
<Route path="/addNewStudent" element={
      <ContexData.Provider value={{entries:data , updateFunction : setData}}>
<AddStudent/>
      </ContexData.Provider>
    }/>
  </Routes>
    </div>
  );
}
export default App;
