import React, { Component } from "react";
import {
    Route, Routes, NavLink, HashRouter
} from "react-router-dom";
import Account1 from "./Accounts/Account1";
import Account2 from "./Accounts/Account2";

class Main extends Component {
    render() {
        return (
            <HashRouter>
                <div>
                    <ul className="header">
                        <h1 align="center">Rutherford Electric Membership Corporation</h1>
                        <li><NavLink to="/acct1">Account 1 Information</NavLink></li>
                        <li><NavLink to="/acct2">Account 2 Information</NavLink></li>
                    </ul>

                    <div className="content">
                        <Routes>
                            <Route path="/acct1" element={<Account1 />}/>
                            <Route path="/acct2" element={<Account2 />}/>
                        </Routes>
                    </div>
                </div>
            </HashRouter>
        );
    }
}

export default Main;