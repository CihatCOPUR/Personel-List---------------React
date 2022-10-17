



export const Events = () => {


const handleClick=()=>{

    alert(`buton clicked`); }

const handleClear=(msg)=>{
  alert(msg)
}
const handleChange=(e)=>{
console.log(e.target)
}
 


  return (
    <div className="container text-center mt-4">
        <button onClick={handleClick}  className="btn btn-danger  ">Click</button>

<button onClick={()=>handleClear(`Clear`)}   className="btn btn-warning">Clear</button>


<button   onClick={handleChange}   className="btn btn-dark">Change</button>

    </div>
  )
}


export default Events;
