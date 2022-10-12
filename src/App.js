
import './App.css';

import Main from './components/Main/Main';
import Navbar from './components/Navbar/Navbar';
import Data from "../src/assests/Data"

function App() {
  return (
  <>
<Navbar/>

{Data.map((item)=>{
  const {name, number,photo,position}=item;
  return <Main  name={name} number={number} position={position} photo={photo}/>
})}





  </>
)
}

export default App;
