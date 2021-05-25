import React from 'react' 
import './table-header.css' 

const TableHeader = () => {
    return (
        <section className="table-header-section">
            <div className="table-header-container">
                <div className="table-header-asset">
                    <p>Asset</p>
                </div>
                <div className="table-header-price">
                    <p>Price (GBP)</p>
                </div>
                <div className="table-header-price-change">
                    <p>Change 1h (%)</p>
                </div>
                <div className="table-header-price-change">
                    <p>Change 24h (%)</p>
                </div>
                <div className="table-header-price-change">
                    <p>Change 7d (%)</p>
                </div>
                <div className="table-header-market-cap">
                    <p>Market cap (GBP)</p>
                </div>
            </div>
        </section>
    )
}

export default TableHeader