import React from "react";
import {Cryptocurrencies, CryptoDetails, Exchanges, Homepage, Navbar, News} from "./components";
import './App.css';
import {Link, Route, Switch} from "react-router-dom";
import {Layout, Space, Typography} from "antd";

const App = () => {
    return (
        <React.Fragment>
            <div className="app">
                <div className="navbar">
                    <Navbar/>
                </div>
                <div className="main">
                    <Layout>
                        <div className="routes">
                            <Switch>
                                <Route exact path="/">
                                    <Homepage/>
                                </Route>
                                <Route exact path="/exchanges">
                                    <Exchanges/>
                                </Route>
                                <Route exact path="/cryptocurrencies">
                                    <Cryptocurrencies/>
                                </Route>
                                <Route exact path="/crypto/:coinID"> {/* meaning of ':' is the value will be dynamic */}
                                    <CryptoDetails/>
                                </Route>
                                <Route exact path="/news">
                                    <News/>
                                </Route>
                            </Switch>
                        </div>
                    </Layout>
                    <div className="footer">
                        <Typography.Title level={5} style={{color: 'white', textAlign: 'center'}}>
                            InfoCrypt, <br/>
                            All rights reserved.
                        </Typography.Title>
                        <Space>
                            <Link to="/">Home</Link>
                            <Link to="/exchanges">Exchanges</Link>
                            <Link to="/news">News</Link>
                        </Space>
                    </div>
                </div>
            </div>
        </React.Fragment>
    );
}

export default App;
