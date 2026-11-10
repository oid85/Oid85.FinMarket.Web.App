import React from 'react'
import { AreaChart, Area, CartesianGrid, Legend, Line, LineChart, Tooltip, XAxis, YAxis } from 'recharts';
import './styles.css'
import {CONSTANTS} from '../../constants'

export const LineDiagram = ({ key, ticker, name, data }) => {
    return (
        <div className='fundamental-by-sector-border-style'>
            <div className='fundamental-by-sector-line-diagram-title'>{ticker}</div>
            <div className='fundamental-by-sector-line-diagram-name'>{name}</div>
            <AreaChart key = {key} width={185} height={120} data={data}>
                <CartesianGrid strokeDasharray="3 3" />
                <YAxis width={25} type="number" domain={['auto', 'auto']} fontSize={10} />
                <Tooltip />
                <Area type="monotone" dataKey="value" strokeWidth={2} stroke={CONSTANTS.COLOR_STATEBLUE} fill={CONSTANTS.COLOR_LIGHTSKYBLUE} />
            </AreaChart>
        </div>
    )
}
