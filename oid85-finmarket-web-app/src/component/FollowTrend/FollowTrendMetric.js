import React from 'react'
import { CONSTANTS } from '../../constants'
import './styles.css'

const GetColor = (value) => {
    if (!value) { return CONSTANTS.COLOR_WHITE }    
    if (value < 0) { return CONSTANTS.COLOR_LIGHTRED }
    if (value > 0) { return CONSTANTS.COLOR_LIGHTGREEN }
    return CONSTANTS.COLOR_WHITE
}

const GetValue = (value, eunit) => {
    if (!value) { return '' }
    return `${value} ${eunit}`
}

export const FollowTrendMetric = ({title, text, value, eunit}) => {
    return (
        <React.Fragment>          
            <div title={title} className='follow-trend-metric border-style' style={{backgroundColor: GetColor(value)}}>
                <div className='follow-trend-container follow-trend-metric-description'>{text}</div> 
                <div className='follow-trend-container follow-trend-metric-value'>{GetValue(value, eunit)}</div>                 
            </div> 
        </React.Fragment>                
    )
}