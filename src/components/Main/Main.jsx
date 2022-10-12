import "./Main.css";

const Main = (props) => {
  const { name, age, image, email } = props;
  return (
    <div className="content">
      <div className="Main">
        <div className="img">
          <img src={image} alt="img" />
        </div>
        <div className="write">
          <h1> {name}</h1>
          <p>{email}</p>
          <p>{age} years old</p>
        </div>
      </div>
    </div>
  );
};
export default Main;
