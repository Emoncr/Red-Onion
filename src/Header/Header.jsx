import React from 'react'
import './header.css'
import Logo from '../images/logo2.png'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCartShopping } from "@fortawesome/free-solid-svg-icons";




const Header = () => {
    return (
        <nav className="navbar navbar-expand-lg navbar-light bg-white px-2 py-3">
            <div className="container-fluid d-flex">
                <div>
                    <a className="navbar-brand" href="#home">
                        <img width='100px' src={Logo} alt="logo" />
                    </a>
                </div>
                <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse item-container" id="navbarSupportedContent">
                    <ul className="navbar-nav ms-auto mb-2 mb-lg-0 align-items-center">
                        <li className="nav-item ">
                            <button className='cart-btn'>
                                <FontAwesomeIcon color='#333' icon={faCartShopping} />
                                <p>1</p>
                            </button>
                        </li>
                        <li className="nav-item ms-">
                            <button className='btn'>Login</button>
                        </li>
                        <li className="nav-item">
                            <button className="btn  btn-danger ">Sing up</button>
                        </li>
                    </ul>
                </div>
            </div>
        </nav>
    )
}

export default Header