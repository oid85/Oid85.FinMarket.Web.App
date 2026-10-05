import React from 'react'
import { Tab, Tabs, TabList, TabPanel } from 'react-tabs'
import { useSelector } from 'react-redux'
import 'react-tabs/style/react-tabs.css'
import { Alert } from '../../Alert/Alert'
import '../styles.css'
import { ShareLifePortfolioScreen } from './ShareLifePortfolioScreen'
import { BondLifePortfolioScreen } from './BondLifePortfolioScreen'
import { SevenEtfLifePortfolioScreen } from './SevenEtfLifePortfolioScreen'
import { ThreeEtfLifePortfolioScreen } from './ThreeEtfLifePortfolioScreen'

export const LifePortfolioScreen = () => {
    const alert = useSelector(state => state.app.alert)

    return (
        <React.Fragment>            
            {alert && <Alert text={alert} />}
            <Tabs>
                <TabList>
                <Tab title='Облигации'>Облигации</Tab>
                <Tab title='Акции'>Акции</Tab>                
                <Tab title='7 ETF'>7 ETF</Tab>
                <Tab title='3 ETF'>3 ETF</Tab>
                </TabList>
                <TabPanel>
                    <BondLifePortfolioScreen />
                </TabPanel>                 
                <TabPanel>
                    <ShareLifePortfolioScreen />
                </TabPanel>  
                <TabPanel>
                    <SevenEtfLifePortfolioScreen />
                </TabPanel> 
                <TabPanel>
                    <ThreeEtfLifePortfolioScreen />
                </TabPanel>                                                                                                                                                           
            </Tabs>
        </React.Fragment>
    )     
}
