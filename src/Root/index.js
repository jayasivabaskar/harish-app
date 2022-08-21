import React from "react";
import PropTypes from "prop-types";
import { IntlProvider } from "react-intl";
import { Provider, connect } from "react-redux";
import {BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "../Home/Home";
import { Header, Footer, WelcomePage, Login, Cart, Favorite } from "../Components";


const Root = (props) => {
    const { store } = props;

    return (
        <Provider store={store}>
            <IntlProvider locale="en">
                <Header />
                <Footer />
                <BrowserRouter>
                    <Routes>
                        <Route key={1} exact path="/" element={<Home />} />
                        <Route key={2} path="/login" element={<Login />} />
                        <Route key={3} path="/cart" element={<Cart />} />
                        <Route key={4} path="/favorite" element={<Favorite />} />
                        <Route key={5} path="/products" element={<WelcomePage />} />
                    </Routes>
                </BrowserRouter>
            </IntlProvider>
        </Provider>
    );
};

Root.propTypes = {
    store: PropTypes.object.isRequired
};

export default connect(
    state => ({}),
    dispatch => ({})
)(Root);