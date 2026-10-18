import React from 'react'
import { CONSTANTS } from '../../constants'
import './styles.css'

const formatNumber = (num) => {
    return new Intl.NumberFormat('ru-RU').format(num);
  };

export const FollowTrendTerminalTotalSum = ({title, text, value, eunit}) => {

    return (
        <React.Fragment>          
            <div 
                title={title} 
                className='follow-trend-total-sum border-style' 
                style={{backgroundColor: CONSTANTS.COLOR_LIGHTGREEN}}
                >
                <div className='follow-trend-container follow-trend-total-summ-description'>{text}</div> 
                <div className='follow-trend-container follow-trend-total-summ-value'>{`${formatNumber(value)} ${eunit}`}</div>                 
            </div> 
        </React.Fragment>                
    )
}