import React from 'react'

function Topbar() {
    return (
        <>
            <div className="header-top-area hidden-sm">
                <div className="container">
                    <div className="row">
                        <div className="col-lg-6 col-md-6 col-sm-6">
                            <div className="header-top-left">
                                <ul>
                                    <li><i className="fa fa-phone" /><a href="tel:+985-2356-14566">+985-2356-14566</a></li>
                                    <li><i className="fa fa-envelope-o" /><a href="mailto:yourmail@gmail.com">yourmail@gmail.com</a></li>
                                </ul>
                            </div>
                        </div>
                        <div className="col-lg-6 col-md-6 col-sm-6">
                            <div className="right-side-tool text-right">
                                <div className="social-media-area">
                                    <ul>
                                        <li><a href="#"><i className="fa fa-facebook" /></a></li>
                                        <li><a href="#"><i className="fa fa-twitter" /></a></li>
                                        <li><a href="#"><i className="fa fa-rss" /></a></li>
                                        <li><a href="#"><i className="fa fa-pinterest-p" /></a></li>
                                        <li><a href="#"><i className="fa fa-linkedin" /></a></li>
                                        <li><a href="#"><i className="fa fa-instagram" /></a></li>
                                    </ul>
                                </div>
                                <div className="header-top-right">
                                    <ul>
                                        <li><i className="fa fa-users" /><a href="registration.html">Login/Registration</a></li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>

    )
}

export default Topbar
