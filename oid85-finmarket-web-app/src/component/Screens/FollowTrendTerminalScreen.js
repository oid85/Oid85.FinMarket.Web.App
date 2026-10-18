import React from 'react'
import { useSelector } from 'react-redux'
import 'react-tabs/style/react-tabs.css'
import { Alert } from '../Alert/Alert'
import { FollowTrendTerminal } from '../FollowTrend/FollowTrendTerminal'
import './styles.css'

export const FollowTrendTerminalScreen = () => {
    const alert = useSelector(state => state.app.alert)

    return (
        <React.Fragment>            
            {alert && <Alert text={alert} />}
            <div>
                <div className='horizontal-container'>
                    <FollowTrendTerminal />
                </div>
            </div>            
        </React.Fragment>
    )    
}
