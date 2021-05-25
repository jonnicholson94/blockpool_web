import React from 'react' 
import './table-cell.css' 

const TableCell = ({ assetLogo, assetName, assetPrice, assetPriceChangeLastHour, assetPriceChangeSevenDay, assetPriceChangeTwentyFour, assetMarketCap, assetAltText }) => {
    return (
        <div className="table-cell-container">

            <div className="table-cell-asset-details">
                <img className="table-cell-image" src={assetLogo} alt={assetAltText} />
                <p>{assetName}</p>
            </div>

            <div className="table-cell-price-details">
                <p>£{assetPrice}</p>
            </div>

            <div className="table-cell-price-change">
                { assetPriceChangeLastHour >= 0 ? <p className="green">+{assetPriceChangeLastHour}%</p> : <p className="red">{assetPriceChangeLastHour}%</p> }
            </div>

            <div className="table-cell-price-change">
                { assetPriceChangeTwentyFour >= 0 ? <p className="green">+{assetPriceChangeTwentyFour}%</p> : <p className="red">{assetPriceChangeTwentyFour}%</p> }
            </div>

            <div className="table-cell-price-change">
                { assetPriceChangeSevenDay >= 0 ? <p className="green">+{assetPriceChangeSevenDay}%</p> : <p className="red">{assetPriceChangeSevenDay}%</p> }
            </div>

            <div className="table-cell-market-cap">
                <p>£{assetMarketCap}</p>
            </div>

        </div>
    )
}

export default TableCell