import React from 'react'
import './styles.css'

const formatNumber = (num) => {
    return new Intl.NumberFormat('ru-RU').format(num);
};

export const FollowTrendTerminalLifePosition = ({position}) => {
    return (
        <React.Fragment>    
            {
                position.doShow
                ?
                <div className='follow-trend-terminal-row-life-position border-style' style={{backgroundColor: position.colorFill}}>
                    <div className='follow-trend-container'>{`Size ${formatNumber(position.size)} шт.`}</div>
                    <div className='follow-trend-container'>{`Cost ${formatNumber(position.cost)} руб.`}</div>
                    <div className='follow-trend-container'>{`Price ${formatNumber(position.currentPrice)} руб.`}</div>
                    <div className='follow-trend-container'>{`DPnL ${formatNumber(position.dailyPnl)} руб.`}</div>
                </div>
                :
                <div className='follow-trend-terminal-row-life-position border-style'></div>
            }      
        </React.Fragment>
    )
}