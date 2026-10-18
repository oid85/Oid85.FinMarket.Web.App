import React from 'react'
import './styles.css'

const formatNumber = (num) => {
    return new Intl.NumberFormat('ru-RU').format(num);
};

export const FollowTrendTerminalSyncStop = ({button}) => {
    return (
        <React.Fragment>    
            {
                button.doShow
                ?
                <div className='follow-trend-terminal-row-sync-stop border-style' style={{backgroundColor: button.colorFill}}>
                    Поставить стоп
                </div>
                :
                <div className='follow-trend-terminal-row-sync-stop border-style'></div>
            }      
        </React.Fragment>
    )
}