import React, { useEffect } from 'react'
import {useDispatch, useSelector} from 'react-redux'
import { fetchFollowTrendVersion, sagaFollowTrendTerminal } from '../../redux/actions/followTrendActions'
import Loader from '../Loader/Loader'
import { FollowTrendTerminalMoney } from './FollowTrendTerminalMoney'
import { FollowTrendTerminalTotalSum } from './FollowTrendTerminalTotalSum'
import { FollowTrendTerminalTotalDailyPnl } from './FollowTrendTerminalTotalDailyPnl'
import './styles.css'
import { Ticker } from '../Ticker/Ticker'
import { FollowTrendTerminalTargetPosition } from './FollowTrendTerminalTargetPosition'
import { FollowTrendTerminalLifePosition } from './FollowTrendTerminalLifePosition'
import { FollowTrendTerminalTargetStop } from './FollowTrendTerminalTargetStop'
import { FollowTrendTerminalLifeStop } from './FollowTrendTerminalLifeStop'
import { FollowTrendTerminalSyncPosition } from './FollowTrendTerminalSyncPosition'
import { FollowTrendTerminalSyncStop } from './FollowTrendTerminalSyncStop'
import { FollowTrendTerminalTaskSyncPosition } from './FollowTrendTerminalTaskSyncPosition'
import { FollowTrendTerminalTaskSyncStop } from './FollowTrendTerminalTaskSyncStop'

export const FollowTrendTerminal = () => {
    
    const strategyVersions = ['Classic']
    const dispatch = useDispatch()
    const loading = useSelector(state => state.app.loading)
    const followTrendTerminalData = useSelector(state => state.followTrend.followTrendTerminalData)
    
    useEffect(() => {
        dispatch(sagaFollowTrendTerminal())
    }, [])

    return (
        <React.Fragment>
        {
            !followTrendTerminalData.result || loading
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
                                    dispatch(sagaFollowTrendTerminal()) 
                                }}><div className='follow-trend-version-button-text'>{version}</div></button>
                        </div>                        
                    ))
                }                                                                                                                                                                                                                                                              
                </div>
                <div>Панель терминала</div>                                                       
                <div>
                    <div className='horizontal-container'>
                        <FollowTrendTerminalTotalSum title={"Сумма портфеля"} text={"Сумма портфеля"} value={followTrendTerminalData.result.totalSum} eunit={"руб."}/>
                        <FollowTrendTerminalMoney title={"Деньги"} text={"Деньги"} value={followTrendTerminalData.result.money} eunit={"руб."}/>
                        <FollowTrendTerminalTotalDailyPnl title={"Дневной PnL"} text={"Дневной PnL"} value={followTrendTerminalData.result.totalDailyPnl} eunit={"руб."}/>
                    </div>                              
                </div>    
                <div>Позиции</div>  
                <div>
                    <div className='horizontal-container'>
                        <div className='follow-trend-terminal-row-number border-style'>№</div>              
                        <div className='border-style' style={{width: 102}}></div>
                        <div className='follow-trend-terminal-row-ticker border-style'>Тикер</div>
                        <div className='follow-trend-terminal-row-target-position border-style'>Поз. расч.</div>
                        <div className='follow-trend-terminal-row-life-position border-style'>Поз. Life</div>
                        <div className='follow-trend-terminal-row-sync-position border-style'>Управл.</div>
                        <div className='follow-trend-terminal-row-target-stop border-style'>Стоп расч.</div>
                        <div className='follow-trend-terminal-row-life-stop border-style'>Стоп Life</div>
                        <div className='follow-trend-terminal-row-sync-stop border-style'>Управл.</div>     
                        <div className='follow-trend-terminal-row-task-sync-position border-style'>Синхр. поз.</div>       
                        <div className='follow-trend-terminal-row-task-sync-stop border-style'>Синхр. стоп</div>                                         
                    </div>                    
                    {
                        followTrendTerminalData.result.rows.map((row) => (
                            <div className='horizontal-container'>
                                <div className='follow-trend-terminal-row-number border-style'>{row.number}</div>                                
                                <div className='border-style'><Ticker value={row.ticker} width={100} height={100} /></div>
                                <div className='follow-trend-terminal-row-ticker border-style'>{row.ticker}</div>
                                <FollowTrendTerminalTargetPosition position={row.targetPosition}/>
                                <FollowTrendTerminalLifePosition position={row.lifePosition}/>
                                <FollowTrendTerminalSyncPosition button={row.syncSizeButton}/>                                
                                <FollowTrendTerminalTargetStop stop={row.targetStop}/>
                                <FollowTrendTerminalLifeStop stop={row.lifeStop}/>
                                <FollowTrendTerminalSyncStop button={row.syncStopButton}/>
                                <FollowTrendTerminalTaskSyncPosition task={row.syncTickerSizeTask}/>
                                <FollowTrendTerminalTaskSyncStop task={row.syncTickerStopTask}/>
                            </div>
                        ))                        
                    }
                </div>                          
            </div>
        }
        </React.Fragment>                
    )
}