import React from 'react'

function Footer() {
    return (
        <div>
            <footer>
                <div className="footer-top-area pt-100 pb-100">
                    <div className="container">
                        <div className="row">
                            <div className="col-lg-3 col-md-4 col-sm-12">
                                <div className="single-footer footer-one">
                                    <h3>About Company</h3>
                                    <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Earum repellat, maxime vel alias impedit veritatis temporibus, sequi quos veniam eius optio corporis modi dicta molestias at inventore culpa, natus explicabo.</p>
                                    <div className="footer-social-media-area">
                                        <nav>
                                            <ul>
                                                <li><a href="#"><i className="fa fa-facebook" /></a></li>
                                                <li><a href="#"><i className="fa fa-twitter" /></a></li>
                                                <li><a href="#"><i className="fa fa-rss" /></a></li>
                                                <li><a href="#"><i className="fa fa-pinterest-p" /></a></li>
                                                <li><a href="#"><i className="fa fa-linkedin" /></a></li>
                                                <li><a href="#"><i className="fa fa-instagram" /></a></li>
                                            </ul>
                                        </nav>
                                    </div>
                                </div>
                            </div>
                            <div className="col-lg-3 col-md-4 hidden-sm">
                                <div className="single-footer footer-two">
                                    <h3>Twitter Feed</h3>
                                    <nav>
                                        <ul>
                                            <li><i className="fa fa-twitter" /> Lorem ipsum dolor sit amet, consectetur adipisicing elit. <a href="#">https://twitter.com/?lang=en</a>
                                                <br /> 3 days ago
                                            </li>
                                            <li><i className="fa fa-twitter" /> Lorem ipsum dolor sit amet, consectetur adipisicing elit. <a href="#">https://twitter.com/?lang=en</a>
                                                <br /> 3 days ago
                                            </li>
                                        </ul>
                                    </nav>
                                </div>
                            </div>
                            <div className="col-lg-3 hidden-md col-sm-12">
                                <div className="single-footer footer-three">
                                    <h3>Flickr Photos</h3>
                                    <ul>
                                        <li>
                                            <a href="#"><img src="images/flicker/1.png" alt="flicker photo" /></a>
                                        </li>
                                        <li>
                                            <a href="#"><img src="images/flicker/2.png" alt="flicker photo" /></a>
                                        </li>
                                        <li>
                                            <a href="#"><img src="images/flicker/3.png" alt="flicker photo" /></a>
                                        </li>
                                        <li>
                                            <a href="#"><img src="images/flicker/4.png" alt="flicker photo" /></a>
                                        </li>
                                        <li>
                                            <a href="#"><img src="images/flicker/5.png" alt="flicker photo" /></a>
                                        </li>
                                        <li>
                                            <a href="#"><img src="images/flicker/6.png" alt="flicker photo" /></a>
                                        </li>
                                    </ul>
                                </div>
                            </div>
                            <div className="col-lg-3 col-md-4 col-sm-12">
                                <div className="single-footer footer-four margin-0">
                                    <h3>Corporate Office</h3>
                                    <nav>
                                        <ul>
                                            <li><i className="fa fa-paper-plane-o" /> 44 New Design Street, rne 00 USA</li>
                                            <li><i className="fa fa-phone" /> <a href="tel:+985-2356-14566">+985-2356-14566</a></li>
                                            <li><i className="fa fa-envelope-o" /> <a href="mailto:yourmail@gmail.com">yourmail@gmail.com</a></li>
                                            <li><i className="fa fa-fax" /> Fax: (123) 4589761</li>
                                        </ul>
                                    </nav>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="footer-bottom-area">
                    <div className="container">
                        <div className="row">
                            <div className="col-lg-12 col-md-12 col-sm-12 col-xs-12">
                                <div className="footer-bottom">
                                    <p> © Copyrights 2018. All rights reserved.</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </footer>

        </div>
    )
}

export default Footer
