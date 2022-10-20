import "./Main.css"





 const Main = ({id,name,age,image,email}) => {
  return (
    <div className="main">
        <img src={image} alt="img" className="main-img" />
        <div className="main-info">
            <h4 className="name">{name}</h4>
            <p className="email">{email}</p>
            <p className="age">{age}</p>
        </div>
    </div>
  )
}
export default Main;