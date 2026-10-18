import React from 'react'
import { useSelector } from 'react-redux'
import 'react-tabs/style/react-tabs.css'
import { Alert } from '../Alert/Alert'
import { FollowTrendMonitor } from '../FollowTrend/FollowTrendMonitor'
import './styles.css'

export const FollowTrendMonitorScreen = () => {
    const alert = useSelector(state => state.app.alert)

    return (
        <React.Fragment>            
            {alert && <Alert text={alert} />}
            <div>
                <div className='horizontal-container'>
                    <FollowTrendMonitor />
                </div>
            </div>            
        </React.Fragment>
    )    
}
