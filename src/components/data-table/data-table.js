import React from 'react' 
import './data-table.css'

import TableHeader from './parts/table-header/table-header'
import TableCell from './parts/table-cell/table-cell'

const DataTable = ({ bitcoin, ethereum, cardano, stellar, algorand, xrp }) => {

    return (
        <section className="data-table-section">
            <div className="data-table-container">
                <TableHeader />
                <TableCell 
                    assetLogo="./images/Bitcoin.png" 
                    assetName={bitcoin.name} 
                    assetPrice={bitcoin.quote.GBP.price.toLocaleString()} 
                    assetPriceChangeLastHour={bitcoin.quote.GBP.percent_change_1h.toLocaleString()} 
                    assetPriceChangeTwentyFour={bitcoin.quote.GBP.percent_change_24h.toLocaleString()} 
                    assetPriceChangeSevenDay={bitcoin.quote.GBP.percent_change_7d.toLocaleString()} 
                    assetMarketCap={bitcoin.quote.GBP.market_cap.toLocaleString()} 
                    assetAltText="The Bitcoin logo"  />
                <TableCell 
                    assetLogo="./images/Ethereum.png" 
                    assetName={ethereum.name} 
                    assetPrice={ethereum.quote.GBP.price.toLocaleString()} 
                    assetPriceChangeLastHour={ethereum.quote.GBP.percent_change_1h.toLocaleString()} 
                    assetPriceChangeTwentyFour={ethereum.quote.GBP.percent_change_24h.toLocaleString()} 
                    assetPriceChangeSevenDay={ethereum.quote.GBP.percent_change_7d.toLocaleString()}  
                    assetMarketCap={ethereum.quote.GBP.market_cap.toLocaleString()} 
                    assetAltText="The Ethereum logo" />
                <TableCell 
                    assetLogo="./images/Cardano.png" 
                    assetName={cardano.name} 
                    assetPrice={cardano.quote.GBP.price.toLocaleString()} 
                    assetPriceChangeLastHour={cardano.quote.GBP.percent_change_1h.toLocaleString()} 
                    assetPriceChangeTwentyFour={cardano.quote.GBP.percent_change_24h.toLocaleString()} 
                    assetPriceChangeSevenDay={cardano.quote.GBP.percent_change_7d.toLocaleString()} 
                    assetMarketCap={cardano.quote.GBP.market_cap.toLocaleString()} 
                    assetAltText="The Cardano logo" />
                <TableCell  
                    assetLogo="./images/Stellar.png" 
                    assetName="Stellar Lumens" 
                    assetPrice={stellar.quote.GBP.price.toLocaleString()} 
                    assetPriceChangeLastHour={stellar.quote.GBP.percent_change_1h.toLocaleString()} 
                    assetPriceChangeTwentyFour={stellar.quote.GBP.percent_change_24h.toLocaleString()} 
                    assetPriceChangeSevenDay={stellar.quote.GBP.percent_change_7d.toLocaleString()} 
                    assetMarketCap={stellar.quote.GBP.market_cap.toLocaleString()} 
                    assetAltText="The Stellar logo" />
                <TableCell 
                    assetLogo="./images/Algorand.png" 
                    assetName={algorand.name} 
                    assetPrice={algorand.quote.GBP.price.toLocaleString()} 
                    assetPriceChangeLastHour={algorand.quote.GBP.percent_change_1h.toLocaleString()} 
                    assetPriceChangeTwentyFour={algorand.quote.GBP.percent_change_24h.toLocaleString()} 
                    assetPriceChangeSevenDay={algorand.quote.GBP.percent_change_7d.toLocaleString()} 
                    assetMarketCap={algorand.quote.GBP.market_cap.toLocaleString()} 
                    assetAltText="The Algorand logo" />
                <TableCell 
                    assetLogo="./images/XRP.png" 
                    assetName={xrp.name} 
                    assetPrice={xrp.quote.GBP.price.toLocaleString()} 
                    assetPriceChangeLastHour={xrp.quote.GBP.percent_change_1h.toLocaleString()} 
                    assetPriceChangeTwentyFour={xrp.quote.GBP.percent_change_24h.toLocaleString()} 
                    assetPriceChangeSevenDay={xrp.quote.GBP.percent_change_7d.toLocaleString()} 
                    assetMarketCap={xrp.quote.GBP.market_cap.toLocaleString()} 
                    assetAltText="The XRP logo" />
            </div>
        </section>
    )
}

export default DataTable