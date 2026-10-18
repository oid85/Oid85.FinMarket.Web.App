import React from 'react'
import { CONSTANTS } from '../../constants'
import './styles.css'

const formatNumber = (num) => {
    return new Intl.NumberFormat('ru-RU').format(num);
  };

const GetColor = (value) => {
    if (!value) { return CONSTANTS.COLOR_WHITE }    
    if (value < 0) { return CONSTANTS.COLOR_LIGHTRED }
    if (value > 0) { return CONSTANTS.COLOR_LIGHTGREEN }
    return CONSTANTS.COLOR_WHITE
}  

export const FollowTrendTerminalTotalDailyPnl = ({title, text, value, eunit}) => {

    return (
        <React.Fragment>          
            <div 
                title={title} 
                className='follow-trend-total-daily-pnl border-style' 
                style={{backgroundColor: GetColor(value)}}
                >
                <div className='follow-trend-container follow-trend-total-daily-pnl-description'>{text}</div> 
                <div className='follow-trend-container follow-trend-total-daily-pnl-value'>{`${formatNumber(value)} ${eunit}`}</div>                 
            </div> 
        </React.Fragment>                
    )
}