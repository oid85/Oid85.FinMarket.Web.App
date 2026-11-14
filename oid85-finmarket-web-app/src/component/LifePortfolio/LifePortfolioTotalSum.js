import React from 'react'
import { CONSTANTS } from '../../constants'
import './styles.css'

const formatNumber = (num) => {
    return new Intl.NumberFormat('ru-RU').format(num);
  };

export const LifePortfolioTotalSum = ({title, text, value, eunit}) => {    
    return (
        <React.Fragment>          
            <div 
                title={title} 
                className='life-portfolio-total-sum-container border-style' 
                style={{backgroundColor: CONSTANTS.COLOR_LIGHTGREEN}}
                >
                <div className='life-portfolio-container life-portfolio-total-sum-description'>{text}</div> 
                <div className='life-portfolio-container life-portfolio-total-sum-value'>{`${formatNumber(value)} ${eunit}`}</div>                 
            </div> 
        </React.Fragment>                
    )
}