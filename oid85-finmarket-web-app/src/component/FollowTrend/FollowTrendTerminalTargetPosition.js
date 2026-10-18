import React from 'react'
import './styles.css'

const formatNumber = (num) => {
    return new Intl.NumberFormat('ru-RU').format(num);
};

export const FollowTrendTerminalTargetPosition = ({position}) => {
    return (
        <React.Fragment>    
            {
                position.doShow
                ?
                <div className='follow-trend-terminal-row-target-position border-style' style={{backgroundColor: position.colorFill}}>
                    <div className='follow-trend-container'>{`Size ${formatNumber(position.size)} шт.`}</div>
                </div>
                :
                <div className='follow-trend-terminal-row-target-position border-style'></div>
            }      
        </React.Fragment>
    )
}