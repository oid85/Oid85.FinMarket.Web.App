import React from 'react'
import { Tab, Tabs, TabList, TabPanel } from 'react-tabs'
import { useSelector } from 'react-redux'
import 'react-tabs/style/react-tabs.css'
import { Alert } from '../Alert/Alert'
import './styles.css'
import { FollowTrendMonitorScreen } from './FollowTrendMonitorScreen'
import { FollowTrendBacktestScreen } from './FollowTrendBacktestScreen'
import { FollowTrendTerminalScreen } from './FollowTrendTerminalScreen'

export const FollowTrendScreen = () => {
    const alert = useSelector(state => state.app.alert)

    return (
        <React.Fragment>            
            {alert && <Alert text={alert} />}
            <Tabs>
                <TabList>
                    <Tab title='Мониторинг'>Мониторинг</Tab>
                    <Tab title='Бектест'>Бектест</Tab>
                    <Tab title='Терминал'>Терминал</Tab>
                </TabList>                
                <TabPanel>
                    <FollowTrendMonitorScreen />                    
                </TabPanel>
                <TabPanel>
                    <FollowTrendBacktestScreen />                    
                </TabPanel>     
                <TabPanel>
                    <FollowTrendTerminalScreen />                    
                </TabPanel>                                                                                                                                               
            </Tabs>
        </React.Fragment>
    )     
}
