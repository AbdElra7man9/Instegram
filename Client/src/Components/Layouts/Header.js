import{Instegramfont,Heart,HomeIcon,Message,Story,Addpostbtn,Arrowdown} from '../Exports';
import { Link,useNavigate } from "react-router-dom";
import { Dropdown } from "react-bootstrap";
const Header = () => {
  const Navigate = useNavigate();
  const logout =() => {
    localStorage.removeItem("authToken");
    Navigate('/signin');
  } 
  return (
    <nav className="navbar navbar-light border-bottom fixed-top py-0">
      <div className="container-fluid ">
        <div className="container mb-2">
          <div className="d-flex">
            <Link className="mt-4" to="/">
              <Instegramfont />
            </Link>
            <Link to="/" className="ms-2 mt-4"><Arrowdown /></Link>
            <input
              className="form-control d-md-block d-none searchbar  mt-3"
              type="search"
              placeholder="Searing"></input>
            <div className="mt-2 ms-auto icons d-flex ">
              <Link to="/" className="ms-4"><HomeIcon /></Link>
              <Link to="/signin" className="ms-4"><Message /></Link>
              <Link to="/signup" className="ms-4"><Addpostbtn /></Link>
              <Link to="/logout" className="ms-4"><Story /></Link>
              <Link to="/" className="ms-4"><Heart /></Link>
              <div className="ms-3 pt-0">
                <Dropdown>
                  <Dropdown.Toggle variant="" id="dropdown-basic">
                    <img className="profileheadericon" src="./Images/profile.jpg" alt="profile"></img>
                  </Dropdown.Toggle>

                  <Dropdown.Menu className="text-end ">
                    <Link to="/profile" className="d-block me-2 py-2 text-dark ">Profile</Link>
                    <Link to="/saved" className="d-block me-2 py-2 text-dark ">Saved</Link>
                    <Link to="/sitting" className="d-block me-2 py-2 text-dark ">Sitting</Link>
                    <Link to="/switch" className="d-block me-2 py-2 text-dark ">Switch Acoount</Link>
                    <Dropdown.Divider />
                    <button onClick={logout} className="d-block btn ms-auto me-2 py-2 text-dark ">Log Out</button>
                  </Dropdown.Menu>
                </Dropdown>
              </div>
            </div>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Header;
