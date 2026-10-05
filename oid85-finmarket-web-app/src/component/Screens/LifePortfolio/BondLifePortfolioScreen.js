import React from 'react'
import { useSelector } from 'react-redux'
import 'react-tabs/style/react-tabs.css'
import { Alert } from '../../Alert/Alert'
import { BondLifePortfolio } from '../../LifePortfolio/BondLifePortfolio'
import '../styles.css'

export const BondLifePortfolioScreen = () => {
    const alert = useSelector(state => state.app.alert)

    return (
        <React.Fragment>            
            {alert && <Alert text={alert} />}
            <div>
                <div className='horizontal-container'>
                    <BondLifePortfolio />
                </div>
            </div>            
        </React.Fragment>
    )    
}
