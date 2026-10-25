import React from 'react'
import { Area, Bar, CartesianGrid, ComposedChart, Legend, Line, LineChart, Tooltip, XAxis, YAxis } from 'recharts';
import './styles.css'

export const FollowTrendPriceDiagram = ({series}) => {
    return (
        <React.Fragment>          
            <div className='follow-trend-diagram'>
            <ComposedChart                                    
                data={series}
                height={170}
                width={187}
            >        
                <XAxis hide={true} dataKey="date" type="category" allowDuplicatedCategory={false} />         
                <YAxis hide={true} domain={['auto', 'auto']}/>
                {
                    series[0]
                    ? 
                    <Area 
                        type="monotone"
                        dataKey="value" 
                        data={series[0].data} 
                        name={series[0].name} 
                        key={series[0].name} 
                        stroke={series[0].color}
                        fill={series[0].colorFill}
                        strokeWidth={1}
                        dot={false}
                        />
                    :
                    <div></div>
                }                                          
            </ComposedChart>
            </div>
        </React.Fragment>                
    )
}