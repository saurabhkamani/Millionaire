import React from 'react'
import { Link } from 'react-router-dom'

function Menubar() {
    return (
        <>
            <div className="header-middle-area" id="sticky">
                <div className="container">
                    <div className="row">
                        <div className="col-lg-2 col-md-2 col-sm-12 col-xs-12">
                            <div className="logo-area">
                                <Link to="index-2.html"><img src="images/logo.png" alt="logo" /></Link>
                            </div>
                        </div>
                        <div className="col-lg-9 col-md-9 col-sm-12 col-xs-12">
                            <div className="main-menu">
                                <nav>
                                    <ul>
                                        <li className="active"><Link to="/">Home <i className="fa fa-angle" /></Link>

                                        </li>
                                        <li><Link to="/Uplodepost">UploadPost <i className="fa fa-angle" /></Link>
                                        </li>
                                        <li><Link to="/">About<i className="fa fa-angle" /></Link>
                                        </li>
                                        <li><Link to="/">Contact<i className="fa fa-angle" /></Link>
                                        </li>
                                        <li><Link to="/Profiles">Profile<i className="fa fa-angle" /></Link>
                                        </li>
                                       
                                    </ul>
                                </nav>
                            </div>
                        </div>
                        <div className="col-lg-1 col-md-1 col-sm-12 col-xs-12">
                            <div className="cart-area">
                                <Link to="cart.html"><i className="fa fa-shopping-basket" /><span>3</span></Link>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

        </>
    )
}

export default Menubar
