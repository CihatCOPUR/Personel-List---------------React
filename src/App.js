import "./App.css";

import Header from "./Header/Header";
import Main from "./Main/Main";
import Buton from "./Buton/Buton";
import data from "../src/assest/data"
import {useState} from "react"

function App() {

const [page, setPage]=useState(1);

const userPage=5;

const indexOfLastUser=page * userPage;

const indexOfFirstUser=indexOfLastUser-userPage;

const currentUsers=data.slice(indexOfFirstUser ,indexOfLastUser)


  return (
    <div className="App">

<Header from={indexOfFirstUser+1} to={indexOfFirstUser+currentUsers.length}/>

{currentUsers.map((item)=> <Main  key={item.id} {...item}  />  )}
 
 <Buton   total={Math.ceil(data.length/userPage)} page={page}  setPage={setPage}/>



      
    </div>
  );
}

export default App;
