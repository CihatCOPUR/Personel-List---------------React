
import './App.css';

import Main from './components/Main/Main';

import Data from "../src/assests/Data"

function App() {
  return (
  <>


{Data.map((item)=>{
  const {name, age,image,email}=item;
  return <Main  name={name} age={age} image={image} email={email}/>
})}





  </>
)
}

export default App;
