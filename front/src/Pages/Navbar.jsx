import React from 'react'
import { Link } from 'react-router-dom'

const Navbar = () => {
  return (
    <div>
        <nav>
            <ul>
                <li><Link to="/">All products</Link></li>
                <li><Link to="/add">Add product</Link></li>
            </ul>
        </nav>
    </div>
  )
}

export default Navbar