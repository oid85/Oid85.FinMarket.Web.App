import React from 'react'
import { useSelector } from 'react-redux'
import 'react-tabs/style/react-tabs.css'
import { Alert } from '../../Alert/Alert'
import { SevenEtfLifePortfolio } from '../../LifePortfolio/SevenEtfLifePortfolio'
import '../styles.css'

export const SevenEtfLifePortfolioScreen = () => {
    const alert = useSelector(state => state.app.alert)

    return (
        <React.Fragment>            
            {alert && <Alert text={alert} />}
            <div>
                <div className='horizontal-container'>
                    <SevenEtfLifePortfolio />
                </div>
            </div>            
        </React.Fragment>
    )    
}
