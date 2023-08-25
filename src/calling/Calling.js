import React from 'react'
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Menubar from '../component/header/Menubar';
import Topbar from '../component/header/Topbar';
import Profiles from '../component/profile/Profiles';
import Slider from '../component/slider/Slider';
import Footer from '../component/footer/Footer';
import Uplodepost from '../component/uplodepost/Uplodepost';

const Calling = () => {
    return (
        <div>
            <BrowserRouter>
                <div>
                    <Topbar />
                    <Menubar />
                    {/* <Slider /> */}

                    <Routes>
                        <Route path="/Profiles" element={<Profiles />} />
                        <Route path="/Uplodepost" element={<Uplodepost />} />
                    </Routes>
                    <Footer />
                </div>
            </BrowserRouter>
        </div>
    )
}

export default Calling
