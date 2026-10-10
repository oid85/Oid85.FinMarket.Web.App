import React from 'react'
import { Tab, Tabs, TabList, TabPanel } from 'react-tabs'
import { useSelector } from 'react-redux'
import 'react-tabs/style/react-tabs.css'
import { Alert } from '../../Alert/Alert'
import '../styles.css'
import { TrendDynamicScreen } from './TrendDynamicScreen'
import { CompareTrendScreen } from './CompareTrendScreen'
import { WeekTrendDeltaScreen } from './WeekTrendDeltaScreen'
import { ClosePriceDiagramSharesScreen } from './ClosePriceDiagramSharesScreen'
import { ClosePriceDiagramIndexesScreen } from './ClosePriceDiagramIndexesScreen'
import { TrendAggregateScreen } from './TrendAggregateScreen'

export const DynamicScreen = () => {
    const alert = useSelector(state => state.app.alert)

    return (
        <React.Fragment>            
            {alert && <Alert text={alert} />}
            <Tabs>
                <TabList>
                    <Tab title='Динамика по дням'>Дни</Tab>
                    <Tab title='Динамика по неделям'>Нед.</Tab>
                    <Tab title='Трендовый агрегат'>Тренд. агр.</Tab>
                    <Tab title='Графики сравнения динамики акций с индексом полной доходности (MCFTR)'>Срав. с MCFTR</Tab>
                    <Tab title='Графики акций'>Граф. (акц.)</Tab>
                    <Tab title='Графики индексов'>Граф. (инд.)</Tab>
                </TabList>
                <TabPanel>
                    <TrendDynamicScreen />                                        
                </TabPanel>    
                <TabPanel>
                    <WeekTrendDeltaScreen />
                </TabPanel>
                <TabPanel>
                    <TrendAggregateScreen />
                </TabPanel>                
                <TabPanel>
                    <CompareTrendScreen />
                </TabPanel> 
                <TabPanel>
                    <ClosePriceDiagramSharesScreen />
                </TabPanel>      
                <TabPanel>
                    <ClosePriceDiagramIndexesScreen />
                </TabPanel>                                                                                                                           
            </Tabs>
        </React.Fragment>
    )     
}
