import React from 'react'
import './styles.css'

const formatNumber = (num) => {
    return new Intl.NumberFormat('ru-RU').format(num);
};

export const MomentumTerminalTaskSyncStop = ({task}) => {
    return (
        <React.Fragment>    
            {
                task.doShow
                ?
                <div className='momentum-terminal-row-task-sync-stop border-style' style={{backgroundColor: task.colorFill}}>
                    New
                </div>
                :
                <div className='momentum-terminal-row-task-sync-stop border-style'></div>
            }      
        </React.Fragment>
    )
}