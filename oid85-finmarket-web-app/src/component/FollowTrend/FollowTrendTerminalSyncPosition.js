import React from 'react'
import './styles.css'

const formatNumber = (num) => {
    return new Intl.NumberFormat('ru-RU').format(num);
};

export const FollowTrendTerminalSyncPosition = ({button}) => {
    return (
        <React.Fragment>    
            {
                button.doShow
                ?
                <div className='follow-trend-terminal-row-sync-position border-style' style={{backgroundColor: button.colorFill}}>
                    {button.title}
                </div>
                :
                <div className='follow-trend-terminal-row-sync-position border-style'></div>
            }      
        </React.Fragment>
    )
}