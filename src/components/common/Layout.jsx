import React from "react";
import { Outlet } from "react-router-dom";
import Header from '../ui/Header';
import Footer from '../ui/Footer';

const Layout = () => {
    return (
        <>
            <a className="skip-to-content-link" href="#main">Skip to page content</a>
            <Header />
            <main id="main" role="main">
                <Outlet />
            </main>
            <Footer />
        </>
    );
};

export default Layout;