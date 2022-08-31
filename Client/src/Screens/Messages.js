import React from 'react'
import { Header, Footer, Message, Arrowdown } from '../Components/Exports';
import { Link } from 'react-router-dom';

const Messages = () => {
    return (
        <div>
            <Header />
            <div className='container border messagepage nav whitecolor d-flex'>
                <div className='col-4 '>
                    <div className='d-flex py-3'>
                        <div className='mx-auto d-flex'>
                            <p className='fw-bold mx-auto'>3bdo</p>
                            <span className='ms-2 fw-bold'><Arrowdown /></span>
                        </div>
                        <div className='ms-auto'><Message /></div>
                    </div> <hr></hr>
                    <div className="d-flex">
                        <Link to="/" className="mt-3 row">
                            <img
                                className="col-3 Suggestionicon"
                                src="https://www.pngitem.com/pimgs/m/150-1503945_transparent-user-png-default-user-image-png-png.png"
                                alt="profile"></img>
                            <p className="p-0 fw-bold col">Egypt</p>
                        </Link>
                    </div>
                    <div></div>
                </div>
                <div className='col border'></div>
            </div>
            <Footer />
        </div>
    )
}

export default Messages
