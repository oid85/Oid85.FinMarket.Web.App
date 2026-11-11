import React from 'react'
import {useDispatch, useSelector} from 'react-redux'
import {Ticker} from '../Ticker/Ticker'
import './styles.css'
import {CONSTANTS} from '../../constants'

const GetColorDelta = (delta) => {
    if (!delta) { return CONSTANTS.COLOR_WHITE }
    if (delta > 0) { return CONSTANTS.COLOR_LIGHTGREEN }
    if (delta <= 0) { return CONSTANTS.COLOR_LIGHTRED }
    
    return CONSTANTS.COLOR_WHITE
}

const GetPriceValue = (price) => {
    if (!price) { return '' }
    return price
}

const GetDeltaValue = (delta) => {
    if (!delta) { return '' }
    return `${delta} %`
}

export const WeekTrendDeltaData = ({data}) => {
    return (
        <React.Fragment>          
            <div className='vertical-container'>
            {
                data.map((dataItem) => (
                    <div className='horizontal-container'>
                        <div className='trend-dynamic-border-style'><Ticker value={dataItem.ticker} width={34} height={34} /></div>
                        <div className='vertical-container week-trend-border-style'>
                            <div className='week-trend-delta-instrument-ticker-cell'>{dataItem.ticker}</div>
                            <div className='week-trend-delta-instrument-name-cell'>{dataItem.name}</div>
                        </div>
                        <div className='horizontal-container'>
                            {
                                dataItem.items.map((item) => (                                                
                                    <div className='week-trend-delta-value-cell week-trend-border-style' style={{backgroundColor: GetColorDelta(item.delta)}}>
                                        <div className='week-trend-delta-price-cell'>{GetPriceValue(item.price)}</div>
                                        <div className='week-trend-delta-delta-cell'>{GetDeltaValue(item.delta)}</div>
                                    </div>
                                ))
                            }
                        </div>                                                                 
                    </div>
                ))
            }
            </div>
        </React.Fragment>                
    )
}