import React from 'react'
import { NavLink } from 'react-router-dom'

const nav = () => (
        <ul>
            <li key={1}><NavLink to={'/'} >Home</NavLink></li>
            <li key={2}><NavLink to={'/Users'} >Users</NavLink></li>
            <li key={3}><NavLink to={'/Courses'} >Courses</NavLink></li>
        </ul>
);

export default nav;