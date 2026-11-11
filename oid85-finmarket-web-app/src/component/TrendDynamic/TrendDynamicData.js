import React from 'react'
import {useDispatch} from 'react-redux'
import {Ticker} from '../Ticker/Ticker'
import './styles.css'
import {CONSTANTS} from '../../constants'

const GetColorTrend = (trend) => {
    if (!trend) { return CONSTANTS.COLOR_WHITE }
    if (trend == 1) { return CONSTANTS.COLOR_LIGHTGREEN }
    return CONSTANTS.COLOR_LIGHTRED
}

const GetValueDelta = (delta) => {
    if (!delta) { return "" }
    return `${delta} %`
}

export const TrendDynamicData = ({data}) => {
    return (
        <React.Fragment>          
            <div className='vertical-container'>
            {
                data.map((dataItem) => (
                    <div className='horizontal-container'>
                        <div className='trend-dynamic-border-style'><Ticker value={dataItem.ticker} width={34} height={34} /></div>
                        <div title={`${dataItem.name}`} className='vertical-container trend-dynamic-border-style'>
                            <div className='instrument-ticker-cell'>{dataItem.ticker}</div>                            
                            <div className='instrument-name-cell'>{dataItem.name}</div>                            
                        </div>                  
                        <div className='vertical-container'>
                            <div className='horizontal-container'>
                            {
                                dataItem.items.map((item) => (                                                
                                    <div className='trend-dynamic-border-style' style={{backgroundColor: GetColorTrend(item.trend, item.delta)}}>
                                        <div className='trend-cell'>{item.price}</div>
                                        <div className='delta-cell'>{GetValueDelta(item.delta)}</div>
                                    </div>
                                ))
                            }     
                            </div>     
                        </div>                                                                    
                    </div>
                ))
            }           
            </div>
        </React.Fragment>                
    )
}