import React, { useState } from 'react';
import { Link } from "react-router-dom";
import './MyResources.css';

export function MyResources() {
    const [fileNames, setFileNames] = useState<string[]>([]);

    const addFileToResources = (name: string) => {
        setFileNames([
            ...fileNames,
            name
        ]);
    };

    return (
        <div id='MyResources' className='my-resources-container'>
            <div className='sidebar'>
                <Link to={`/`} className='link'>Main page</Link>
                <Link to={`resources`} className='link'>My resources</Link>
            </div>

            <div className='header'>
                <h2>Welcome to your Personal Organizer!</h2>
            </div>

            <div className='main-content'>
                <h3>My resources</h3>

            <div className='upload-btn-container'>
                <input type="file" id="input" className='upload-btn' multiple  onChange={(e) => addFileToResources(e.target.value)} />
            </div>

                {fileNames.map((fileName, index) => (
                    <p key={`${fileName} ${index}`}>{fileName.split('\\').pop()}</p>
                ))}
            </div>
        </div>
    )
}