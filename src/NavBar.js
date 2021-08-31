import React from 'react';
import { Link } from 'react-router-dom';

function NavBar() {
    return (
        <div className="Navbar">
            <h1>Public Blog</h1>
            <div className="links">
                <Link to="/">Home</Link>
                <Link to="/create" style={{
                    backgroundColor: "rgb(0, 140, 255)",
                    color: "white",
                    borderRadius: "8px"
                }}>New Blog</Link>
            </div>
        </div>
    );
}

export default NavBar;