import React, { useEffect } from 'react'
import {useDispatch, useSelector} from 'react-redux'
import { sagaFollowTrendBacktestResult } from '../../redux/actions/followTrendActions'
import Loader from '../Loader/Loader'
import { FollowTrendBacktestResult } from './FollowTrendBacktestResult'
import { FollowTrendBacktestResultEquityDiagram } from './FollowTrendBacktestResultEquityDiagram'
import './styles.css'

export const FollowTrendBacktest = () => {
    
    const dispatch = useDispatch()
    const loading = useSelector(state => state.app.loading)
    const followTrendBacktestResultData = useSelector(state => state.followTrend.followTrendBacktestResultData)
    
    useEffect(() => {
        dispatch(sagaFollowTrendBacktestResult())
    }, [])

    return (
        <React.Fragment>
        {
            !followTrendBacktestResultData.result || loading
            ? <Loader/>
            :
            <div>
                <div className='horizontal-container'>                         
                    <div>
                        <div>Результаты бектеста</div>
                        <div className='horizontal-container'>  
                            <div className='follow-trend-backtest-result-number border-style'>№</div>
                            <div className='follow-trend-backtest-result-strategy-name border-style'>Стратегия</div>
                            <div className='follow-trend-backtest-result-strategy-params border-style'>Параметры</div>
                            <div className='follow-trend-backtest-result-rf border-style'>RF</div>
                            <div className='follow-trend-backtest-result-np border-style'>NP</div>
                            <div className='follow-trend-backtest-result-ayr border-style'>AYR</div>
                        </div>
                        {
                            followTrendBacktestResultData.result.backtestResults.map((backtestResult) => (
                                <FollowTrendBacktestResult backtestResult={backtestResult}/>     
                            ))                        
                        }                     
                    </div>    
                    <div className='follow-trend-container'>
                        <FollowTrendBacktestResultEquityDiagram series={followTrendBacktestResultData.result.equitySeries}/>
                    </div>                                      
                </div>                                                          
            </div>
        }
        </React.Fragment>                
    )
}