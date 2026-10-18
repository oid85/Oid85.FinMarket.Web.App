import React from 'react'
import './styles.css'

const formatNumber = (num) => {
    return new Intl.NumberFormat('ru-RU').format(num);
};

export const FollowTrendTerminalTaskSyncPosition = ({task}) => {
    return (
        <React.Fragment>    
            {
                task.doShow
                ?
                <div className='follow-trend-terminal-row-task-sync-position border-style' style={{backgroundColor: task.colorFill}}>
                    New
                </div>
                :
                <div className='follow-trend-terminal-row-task-sync-position border-style'></div>
            }      
        </React.Fragment>
    )
}