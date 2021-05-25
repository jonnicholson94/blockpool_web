import React from 'react' 
import './pending.css'

const Pending = () => {
    return (
        <div className="pending-container">
            <p>Fetching the latest prices</p>
            <span className="spinner"></span>
        </div>
    )
}

export default Pending