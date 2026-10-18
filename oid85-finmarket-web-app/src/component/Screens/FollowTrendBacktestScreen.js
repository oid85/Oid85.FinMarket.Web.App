import React from 'react'
import { useSelector } from 'react-redux'
import 'react-tabs/style/react-tabs.css'
import { Alert } from '../Alert/Alert'
import { FollowTrendBacktest } from '../FollowTrend/FollowTrendBacktest'
import './styles.css'

export const FollowTrendBacktestScreen = () => {
    const alert = useSelector(state => state.app.alert)

    return (
        <React.Fragment>            
            {alert && <Alert text={alert} />}
            <div>
                <div className='horizontal-container'>
                    <FollowTrendBacktest />
                </div>
            </div>            
        </React.Fragment>
    )    
}
