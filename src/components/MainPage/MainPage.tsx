import React, { useState } from 'react';
import { Link } from "react-router-dom";
import './MainPage.css';
import { MyTasks } from './MyTasks/MyTasks';

export function MainPage() {
    return (
        <div id='MainPage' className='main-page-container'>
            <div className='sidebar'>
                <Link to={`/`} className='link'>Main page</Link>
                <Link to={`resources`} className='link'>My resources</Link>
            </div>

            <div className='header'>
                <h2>Welcome to your Personal Organizer!</h2>
            </div>

            <div className='main-content'>
                <MyTasks />
            </div>
        </div>
    )
}