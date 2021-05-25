import React from 'react' 
import { Link } from 'react-router-dom'
import './global-header.css'

const GlobalHeader = () => {
    return (
        <header className="global-header-section">
            <div className="global-header-container">
                <Link className="global-header-logo" to="/">Blockpool</Link>
            </div>
        </header>
    )
}

export default GlobalHeader