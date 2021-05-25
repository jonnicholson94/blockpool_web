import React, { useEffect, useState } from 'react' 

import HomepageBackground from '../components/homepage-background/homepage-background'
import GlobalHeader from '../components/global-header/global-header'
import DataTable from '../components/data-table/data-table'
import Pending from '../components/pending/pending'

import axios from 'axios'

const Homepage = () => {

    const [pending, setPending] = useState(true)

    const [bitcoin, setBitcoin] = useState({})
    const [ethereum, setEthereum] = useState({})
    const [cardano, setCardano] = useState({})
    const [stellar, setStellar] = useState({})
    const [algorand, setAlgorand] = useState({})
    const [xrp, setXrp] = useState({})

    useEffect(() => {
        axios.get("/api/dataFetch")
            .then((response) => {
                const data = response.data.data 
                return data
            })
            .then((data) => {
                setBitcoin(data[1])
                setXrp(data[52])
                setStellar(data[512])
                setEthereum(data[1027])
                setCardano(data[2010])
                setAlgorand(data[4030])
            })
            .then(() => {
                setPending(false)
            })
    }, [])
    
    return (
        <>

            { pending ? <Pending /> :
            <>
                <GlobalHeader />
                <DataTable bitcoin={bitcoin} ethereum={ethereum} cardano={cardano} stellar={stellar} algorand={algorand} xrp={xrp} />
            </>
            }
            <HomepageBackground  />
        </>
    )
}

export default Homepage