import React, { useEffect } from 'react'
import {useDispatch, useSelector} from 'react-redux'
import { fetchFollowTrendVersion, sagaFollowTrendMonitor } from '../../redux/actions/followTrendActions'
import Loader from '../Loader/Loader'
import { EditFollowTrendPortfolioTotalSumModal } from './EditFollowTrendPortfolioTotalSumModal'
import { FollowTrendBacktestDiagram } from './FollowTrendBacktestDiagram'
import { FollowTrendMetric } from './FollowTrendMetric'
import { FollowTrendPosition } from './FollowTrendPosition'
import { FollowTrendLineDiagram } from './FollowTrendLineDiagram'
import { FollowTrendPriceWithStopDiagram } from './FollowTrendPriceWithStopDiagram'
import { FollowTrendMessage } from './FollowTrendMessage'
import { FollowTrendTickerStatistic } from './FollowTrendTickerStatistic'
import { FollowTrendTotalSum } from './FollowTrendTotalSum'
import './styles.css'

export const FollowTrendMonitor = () => {
    
    const strategyVersions = ['Classic', 'SevenEtfClassic', 'BreakEvenStop', 'TrailStop', 'UpdateStop']
    const dispatch = useDispatch()
    const loading = useSelector(state => state.app.loading)
    const followTrendMonitorData = useSelector(state => state.followTrend.followTrendMonitorData)
    
    useEffect(() => {
        dispatch(sagaFollowTrendMonitor())
    }, [])

    return (
        <React.Fragment>
        {
            !followTrendMonitorData.result || loading
            ? <Loader/>
            :
            <div>
                <div className='horizontal-container'>
                {
                    strategyVersions.map((version) => (
                        <div className='follow-trend-version-button-container'>
                            <button className='btn btn-outline-dark follow-trend-version-button'
                                onClick={() => {
                                    dispatch(fetchFollowTrendVersion(version))
                                    dispatch(sagaFollowTrendMonitor()) 
                                }}><div className='follow-trend-version-button-text'>{version}</div></button>
                        </div>                        
                    ))
                }                                                                                                                                                                                                                                                              
                </div>
                <div>
                    {
                        followTrendMonitorData.result.description.map((text) => (
                            <div className='follow-trend-description'>{text}</div> 
                        ))                        
                    }
                </div>
                <div>Статистика по доходности</div>
                <div>
                    <div className='horizontal-container'>
                        <FollowTrendTotalSum title={"Сумма портфеля"} text={"Сумма портфеля"} value={followTrendMonitorData.result.totalSumLife} eunit={"руб."}/>
                        <FollowTrendMetric title={"Годовая процентная доходность средняя"} text={"Дох. ср."} value={followTrendMonitorData.result.yield} eunit={"%"}/>
                        <FollowTrendMetric title={"Годовая процентная доходность за 2021 год"} text={"Дох. 2021"} value={followTrendMonitorData.result.yield2021} eunit={"%"}/>
                        <FollowTrendMetric title={"Годовая процентная доходность за 2022 год"} text={"Дох. 2022"} value={followTrendMonitorData.result.yield2022} eunit={"%"}/>
                        <FollowTrendMetric title={"Годовая процентная доходность за 2023 год"} text={"Дох. 2023"} value={followTrendMonitorData.result.yield2023} eunit={"%"}/>
                        <FollowTrendMetric title={"Годовая процентная доходность за 2024 год"} text={"Дох. 2024"} value={followTrendMonitorData.result.yield2024} eunit={"%"}/>
                        <FollowTrendMetric title={"Годовая процентная доходность за 2025 год"} text={"Дох. 2025"} value={followTrendMonitorData.result.yield2025} eunit={"%"}/>
                        <FollowTrendMetric title={"Годовая процентная доходность за 2026 год"} text={"Дох. 2026 YTD"} value={followTrendMonitorData.result.yield2026} eunit={"%"}/>
                        <FollowTrendMetric title={"Годовая процентная доходность за последний год"} text={"Дох. год"} value={followTrendMonitorData.result.yieldYear} eunit={"%"}/>
                        <FollowTrendMetric title={"Процентная доходность за последний квартал"} text={"Дох. кварт."} value={followTrendMonitorData.result.yieldQuarter} eunit={"%"}/>
                        <FollowTrendMetric title={"Процентная доходность за последний месяц"} text={"Дох. мес."} value={followTrendMonitorData.result.yieldMonth} eunit={"%"}/>
                        <FollowTrendMetric title={"Процентная доходность за последнюю неделю"} text={"Дох. нед."} value={followTrendMonitorData.result.yieldWeek} eunit={"%"}/>
                        <FollowTrendMetric title={"Максимальная просадка, %"} text={"Просад. макс."} value={followTrendMonitorData.result.maxDrawdownPercent} eunit={"%"}/>
                        <FollowTrendMetric title={"Текущая просадка, %"} text={"Просад. тек."} value={followTrendMonitorData.result.currentDrawdownPercent} eunit={"%"}/>
                    </div>                              
                </div>
                <div>Открытые позиции</div>
                <div className='horizontal-container'>
                    {
                        followTrendMonitorData.result.currentPositions.map((position) => (
                            <FollowTrendPosition position={position}/>     
                        ))                        
                    }
                </div>
                <div>График цены за 15 дней</div>
                <div className='horizontal-container'>
                    {
                        followTrendMonitorData.result.priceWithStopSeries.map((seriesList) => (
                            <FollowTrendPriceWithStopDiagram series={seriesList}/>
                        ))                        
                    }
                </div>                
                <div>За все время</div>
                <div className='horizontal-container'>
                    <div className='follow-trend-container'>
                        <FollowTrendBacktestDiagram series={followTrendMonitorData.result.backtestSeries}/>
                    </div> 
                    <div className='follow-trend-container'>
                        <FollowTrendLineDiagram series={followTrendMonitorData.result.priceDynamicSeries}/>
                    </div>                                                                               
                </div>
                <div>За последний квартал</div>
                <div className='horizontal-container'>
                    <div className='follow-trend-container'>
                        <FollowTrendBacktestDiagram series={followTrendMonitorData.result.shortBacktestSeries}/>
                    </div>               
                </div>                
                <div>Сообщения</div>
                <div>
                    {
                        followTrendMonitorData.result.messages.map((message) => (
                            <FollowTrendMessage message={message}/>     
                        ))                        
                    }
                </div>
                <div>Статистика по сигналам и выбитым стоп-лоссам</div>   
                <div>
                    <div className='horizontal-container'>  
                        <div className='follow-trend-ticker-statistic-number border-style'>№</div>              
                        <div className='border-style' style={{width: 32}}></div>
                        <div className='follow-trend-ticker-statistic-ticker border-style'>Тикер</div>
                        <div className='follow-trend-ticker-statistic-value border-style'>Сигналов, шт.</div>
                        <div className='follow-trend-ticker-statistic-value border-style'>Выбито СЛ, шт.</div>
                        <div className='follow-trend-ticker-statistic-value border-style'>Выбито СЛ, %</div>
                    </div>                    
                    {
                        followTrendMonitorData.result.tickerStatistic.map((tickerStatisticItem) => (
                            <FollowTrendTickerStatistic tickerStatisticItem={tickerStatisticItem}/>     
                        ))                        
                    }
                </div>                                            
            </div>
        }
        <EditFollowTrendPortfolioTotalSumModal />
        </React.Fragment>                
    )
}