import React from 'react'
import './styles.css'

const formatNumber = (num) => {
    return new Intl.NumberFormat('ru-RU').format(num);
};

export const FollowTrendTerminalLifeStop = ({stop}) => {
    return (
        <React.Fragment>    
            {
                stop.doShow
                ?
                <div className='follow-trend-terminal-row-life-stop border-style' style={{backgroundColor: stop.colorFill}}>
                    <div className='follow-trend-container'>{`Size ${formatNumber(stop.size)} шт.`}</div>
                </div>
                :
                <div className='follow-trend-terminal-row-life-stop border-style'></div>
            }      
        </React.Fragment>
    )
}