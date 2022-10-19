import "./Header.css";

const Header = () => {
  return (
    <div className="container ">
      <div className="logo">
        <h1 className="logo-h1">Mane</h1>
        <h4 className="logo-h4">ETHİCAL HAIRDRESSING</h4>
      </div>

      <div className="ul">
        <ul className="  ">
          <li><a href="">HOME</a> </li>
          <li><a href="">ABOUT</a> </li>
          <li><a href="">SERVİCES</a> </li>
          <li><a href="">CONTACT</a> </li>
          <li><a href="" className="book text-white">BOOK</a> </li>
        </ul>
      </div>
    </div>
  );
};

export default Header;
