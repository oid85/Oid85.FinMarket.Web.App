import React from 'react'
import { CONSTANTS } from '../../constants'
import { Ticker } from '../Ticker/Ticker';
import './styles.css'

const formatNumber = (num) => {
    return new Intl.NumberFormat('ru-RU').format(num);
};

const GetColor = (position) => {
    if (!position) { return CONSTANTS.COLOR_WHITE }    
    if (position.profitPercent == 0) { return CONSTANTS.COLOR_LIGHTGREEN }
    if (position.profitPercent < 0) { return CONSTANTS.COLOR_LIGHTRED }
    return CONSTANTS.COLOR_LIGHTGREEN
}

export const FollowTrendPosition = ({position}) => {
    return (
        <React.Fragment>          
            <div className='follow-trend-current-position border-style' style={{backgroundColor: GetColor(position)}}>
                <div className='follow-trend-container horizontal-container'>
                    <div className='border-style'><Ticker value={position.ticker} width={50} height={50} /></div>
                    <div className='follow-trend-ticker'>{`${position.number}. ${position.ticker}`}</div>
                </div>
                {
                    position.ticker != 'MON'
                    ? <div className='follow-trend-container'>{`Size ${formatNumber(position.size)} шт.`}</div>
                    : <div></div>
                }
                <div className='follow-trend-container'>{`Cost ${formatNumber(position.cost)} руб.`}</div>
                {
                    position.entryPrice
                    ? <div className='follow-trend-container'>{`PEn ${formatNumber(position.entryPrice)} руб.`}</div>
                    : <div></div>
                }                
                {
                    position.stopPrice
                    ? <div className='follow-trend-container'>{`SL ${formatNumber(position.stopPrice)} руб.`}</div>
                    : <div></div>
                }
                {
                    position.currentStopSizePercent
                    ? <div className='follow-trend-container'>{`SL ${formatNumber(position.currentStopSizePercent)} %`}</div>
                    : <div></div>
                }
                {
                    position.profitPercent
                    ? <div className='follow-trend-container'>{`PR ${formatNumber(position.profitPercent)} %`}</div>
                    : <div></div>
                }                
            </div>
        </React.Fragment>
    )
}