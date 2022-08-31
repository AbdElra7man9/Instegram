import { Instegramfont, Heart, HomeIcon, Message, Story, Addpostbtn, Arrowdown, ImagesIcon } from '../Exports';
import { Link, useNavigate } from "react-router-dom";
import { Dropdown, Modal } from "react-bootstrap";
import { useState } from 'react';
const Header = () => {
  const Navigate = useNavigate();
  const logout = () => {
    localStorage.removeItem("authToken");
    Navigate('/signin');
  }
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
  const [showSubModal, setShowSubModal] = useState(false);

  const handleCloseSubModal = () => setShowSubModal(false);
  const handleShowSubModal = () => { setShowSubModal(true); setShow(false); }
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
              <Link to="/messages" className="ms-4"><Message /></Link>
              <Link to="" variant="" onClick={handleShow} className="ms-4"><Addpostbtn /></Link>
              <Modal show={show} onHide={handleClose} backdrop="static" scrollable
                dialogClassName="modal-90w addpostModel" centered >
                <Modal.Body >
                  <div className='text-center'>
                    <Modal.Header closeButton>
                      <Modal.Title id="example-custom-modal-styling-title" dialogClassName='text-center'>Create new post</Modal.Title>
                    </Modal.Header>
                    <div className='my-5 modalHight'>
                      <ImagesIcon />
                      <p className='text-dark fs-4 thinfont mt-3'>Drag photos and videos here</p>
                      <button className='btn btn-primary py-1 mt-2' type='file' variant="" onClick={handleShowSubModal}>Select From Computer</button>
                      <Modal show={showSubModal} onHide={handleCloseSubModal} backdrop="static" scrollable centered dialogClassName='addpostModel'>
                        <Modal.Body >
                          <div className='text-center'>
                            <p className='text-dark'>Create new post</p><hr></hr>
                            <div className='my-5 modalHight'>
                              <ImagesIcon />
                              {/* <p className='text-dark fs-4 thinfont mt-3'>Drag photos and videos here</p> */}
                              {/* <button className='btn btn-primary py-1 mt-2' type='file'>Select From Computer</button> */}
                            </div>
                          </div>
                        </Modal.Body>
                      </Modal>
                    </div>
                  </div>
                </Modal.Body>
              </Modal>

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
