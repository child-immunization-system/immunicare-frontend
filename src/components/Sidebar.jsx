import React from 'react';
import { Link } from 'react-router-dom';

function Sidebar() {
    return (
        <div className="bg-light border-right" id="sidebar-wrapper">
            <div className="sidebar-heading">Menu</div>
            <nav className="flex-column">
                <Link as={Link} to="/">Dashboard</Link>
                <Link as={Link} to="/immunizations">Immunizations</Link>
                <Link as={Link} to="/settings">Settings</Link>
            </nav>
        </div>
    );
}

export default Sidebar;
