import React from 'react'
import './styles.css'

const formatNumber = (num) => {
    return new Intl.NumberFormat('ru-RU').format(num);
};

export const FollowTrendBacktestResult = ({backtestResult}) => {
    return (
        <React.Fragment>          
            <div className='horizontal-container'>
                <div className='follow-trend-backtest-result-number border-style'>{backtestResult.number}</div>
                <div className='follow-trend-backtest-result-strategy-name border-style'>{backtestResult.strategyName}</div>
                <div className='follow-trend-backtest-result-strategy-params border-style'>{backtestResult.strategyParams}</div>
                <div className='follow-trend-backtest-result-rf border-style'>{backtestResult.recoveryFactor}</div>
                <div className='follow-trend-backtest-result-np border-style'>{formatNumber(backtestResult.netProfit)}</div>
                <div className='follow-trend-backtest-result-ayr border-style'>{`${backtestResult.annualYieldReturn} %`}</div>
            </div>
        </React.Fragment>
    )
}