import React from 'react'
import { Tab, Tabs, TabList, TabPanel } from 'react-tabs'
import { useSelector } from 'react-redux'
import 'react-tabs/style/react-tabs.css'
import { Alert } from '../Alert/Alert'
import { DynamicScreen } from '../Screens/Dynamic/DynamicScreen'
import { PortfolioScreen } from '../Screens/PortfolioScreen'
import { LifePortfolioScreen } from '../Screens/LifePortfolio/LifePortfolioScreen'
import { BondAnalyseScreen } from '../Screens/BondAnalyseScreen'
import { FundamentalScreen } from '../Screens/FundamentalScreen'
import { PortfolioBacktestScreen } from '../Screens/PortfolioBacktestScreen'
import { AlgoScreen } from '../Screens/AlgoScreen'
import { MomentumScreen } from '../Screens/MomentumScreen'
import { StatArbitrageScreen } from '../Screens/StatArbitrageScreen'
import { MacroScreen } from '../Screens/MacroScreen'

export const Workspace = () => {
    const alert = useSelector(state => state.app.alert)

    return (
        <React.Fragment>            
            {alert && <Alert text={alert} />}
            <Tabs>
                <TabList>
                    <Tab title='Динамика'>Динамика</Tab>
                    <Tab title='Фундаментал'>Фунд.</Tab>                    
                    <Tab title='Макро'>Макро</Tab>
                    <Tab title='Аналитика по облигациям'>Облигации</Tab>
                    <Tab title='Портфель акций'>Портфель</Tab>
                    <Tab title='Портфель Life'>Портфель Life</Tab>
                    <Tab title='Бектест портфеля'>Бэктест</Tab>
                    <Tab title='Алго'>Алго</Tab>
                    <Tab title='Моментум'>Моментум</Tab>
                    <Tab title='Статистический арбитраж'>Стат. арбитраж</Tab>
                </TabList>
                <TabPanel>
                    <DynamicScreen />                    
                </TabPanel>                                                                          
                <TabPanel>
                    <FundamentalScreen />
                </TabPanel>                                                                                                                    
                <TabPanel>
                    <MacroScreen />
                </TabPanel>                   
                <TabPanel>
                    <BondAnalyseScreen />
                </TabPanel> 
                <TabPanel>
                    <PortfolioScreen />
                </TabPanel>         
                <TabPanel>
                    <LifePortfolioScreen />
                </TabPanel>                                      
                <TabPanel>
                    <PortfolioBacktestScreen />
                </TabPanel>          
                <TabPanel>
                    <AlgoScreen />
                </TabPanel>   
                <TabPanel>
                    <MomentumScreen />
                </TabPanel>                     
                <TabPanel>
                    <StatArbitrageScreen />
                </TabPanel>                                                                                                                
            </Tabs>
        </React.Fragment>
    )    
}
