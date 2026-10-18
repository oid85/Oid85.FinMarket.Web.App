import React from 'react'
import './styles.css'

const formatNumber = (num) => {
    return new Intl.NumberFormat('ru-RU').format(num);
};

export const FollowTrendTerminalTargetStop = ({stop}) => {
    return (
        <React.Fragment>    
            {
                stop.doShow
                ?
                <div className='follow-trend-terminal-row-target-stop border-style' style={{backgroundColor: stop.colorFill}}>
                    <div className='follow-trend-container'>{`Size ${formatNumber(stop.size)} шт.`}</div>
                </div>
                :
                <div className='follow-trend-terminal-row-target-stop border-style'></div>
            }      
        </React.Fragment>
    )
}