import "./Header.css"




 const Header = ({from,to}) => {
  
  return (
    <div className="header">
        <h1>Employee List</h1>
        <h5>( Employes {from} to {to})</h5>
    </div>
  )
}


export default Header;
