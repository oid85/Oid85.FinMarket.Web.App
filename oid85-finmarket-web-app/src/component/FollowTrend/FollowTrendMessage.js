import React from 'react'
import { Calendar } from '../Calendar/Calendar';
import { Ticker } from '../Ticker/Ticker';
import './styles.css'

export const FollowTrendMessage = ({message}) => {
    return (
        <React.Fragment>
            <div className='horizontal-container'>
                <div className='border-style'><Calendar date = {message.date} /></div>
                <div className='border-style'><Ticker value={message.ticker} width={50} height={50} /></div>
                <div className='follow-trend-protocol-message-ticker border-style' style={{backgroundColor: message.colorFill}}>{`${message.ticker}`}</div>                
                <div className='follow-trend-protocol-message-text border-style' style={{backgroundColor: message.colorFill}}>{`${message.message}`}</div>                
            </div>
        </React.Fragment>
    )
}