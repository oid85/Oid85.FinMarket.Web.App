import React from 'react'
import { useSelector } from 'react-redux'
import 'react-tabs/style/react-tabs.css'
import { Alert } from '../../Alert/Alert'
import { ThreeEtfLifePortfolio } from '../../LifePortfolio/ThreeEtfLifePortfolio'
import '../styles.css'

export const ThreeEtfLifePortfolioScreen = () => {
    const alert = useSelector(state => state.app.alert)

    return (
        <React.Fragment>            
            {alert && <Alert text={alert} />}
            <div>
                <div className='horizontal-container'>
                    <ThreeEtfLifePortfolio />
                </div>
            </div>            
        </React.Fragment>
    )    
}
