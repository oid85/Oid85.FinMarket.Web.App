import React from 'react'
import { CONSTANTS } from '../../constants'
import './styles.css'

const formatNumber = (num) => {
    return new Intl.NumberFormat('ru-RU').format(num);
  };

export const FollowTrendTerminalMoney = ({title, text, value, eunit}) => {

    return (
        <React.Fragment>          
            <div 
                title={title} 
                className='follow-trend-money border-style' 
                style={{backgroundColor: CONSTANTS.COLOR_LIGHTGREEN}}
                >
                <div className='follow-trend-container follow-trend-money-description'>{text}</div> 
                <div className='follow-trend-container follow-trend-money-value'>{`${formatNumber(value)} ${eunit}`}</div>                 
            </div> 
        </React.Fragment>                
    )
}