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

export const LifePortfolioYieldMetric = ({title, text, yieldRub, yieldPercent}) => {
    return (
        <React.Fragment>          
            <div title={title} className='life-portfolio-metric border-style' style={{backgroundColor: GetColor(yieldRub)}}>
                <div className='life-portfolio-container life-portfolio-metric-description'>{text}</div>
                <div className='life-portfolio-container life-portfolio-metric-value'>{GetValue(yieldRub, 'руб.')}</div>
                <div className='life-portfolio-container life-portfolio-metric-value'>{GetValue(yieldPercent, '%')}</div>
            </div> 
        </React.Fragment>                
    )
}