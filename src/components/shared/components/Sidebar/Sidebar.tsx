import React, { useState } from 'react';
import './Sidebar.css';
import { Link } from "react-router-dom";

export function Sidebar() {
    return (
        <div className='sidebar'>
            <Link to={`/`} className='link'>Main page</Link>
            <Link to={`resources`} className='link'>My resources</Link>
        </div>
    );
};