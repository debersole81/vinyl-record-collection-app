import React from "react";
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import { LinkContainer } from 'react-router-bootstrap';
import { Link } from "react-router-dom";

function Header(props) {

    /**Change handlers*/

    /**Render the dashboard.*/
    const handleViewDashTrue = () => {
        props.viewDashTrue();
    };

    /**Hide the dashboard*/
    const handleViewDashFalse = () => {
        props.viewDashFalse();
    };

    return (
        <nav className="nav">
            <h3>Logo</h3>
            <ul className="nav-links">
                <Link to="/dashboard" onClick={handleViewDashTrue}><li>Dashboard</li></Link>
                <Link to="/dashboard/collection" onClick={handleViewDashFalse}><li>Collection</li></Link>
                <Link to="/dashboard/wishlist" onClick={handleViewDashFalse}><li>Wish List</li></Link>
                <Link to="/dashboard/randomizer" onClick={handleViewDashFalse}><li>Randomizer</li></Link>
                <Link to="/dashboard/search" onClick={handleViewDashFalse}><li>Search</li></Link>
            </ul>
        </nav>
    );
};

export default Header;