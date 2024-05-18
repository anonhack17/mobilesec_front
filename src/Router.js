import React from 'react';
import {Route, Routes} from "react-router";
import Scan from "./scan/scan";
import MobileThreats from "./MobileThreats/MobileThreats";
import Home from "./Home/Home";

const Router = () => {
    return (
        <div>
            <Routes>
                <Route path={'/'} element={<Home/>}></Route>
                <Route path={'/scan'} element={<Scan/>}></Route>
                <Route path={'/threats'} element={<MobileThreats/>}></Route>
            </Routes>
        </div>
    );
};

export default Router;