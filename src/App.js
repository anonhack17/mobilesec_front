import React, { useState } from 'react';
import Scan from "./scan/scan";
import Header from "./layout/header/header";
import Footer from "./layout/footer/footer";
import DeviceScanner from "./DeviceScanner/DeviceScanner";
import MobileThreats from "./MobileThreats/MobileThreats";
import Router from "./Router";


function App() {

    return (
        <div>
            <Header></Header>
            <Router></Router>
            <Footer/>
        </div>
    );
}

export default App;
